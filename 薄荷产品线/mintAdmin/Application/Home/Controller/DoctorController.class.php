<?php
namespace Home\Controller;
use \Think\Controller;

class DoctorController extends Controller {
    //医生列表
    public function index(){
        $usermodel=D('User');
        if(I('account')){
        	$where['account']=array('LIKE','%'.I('account').'%');
        }
        if(I('name')){
        	$where['name']=array('LIKE','%'.urldecode(I('name')).'%');
        }
        if(I('sex')){
        	$where['sex']=array('EQ',I('sex'));
        }
        if(I('phone')){
        	$where['phone']=array('LIKE','%'.I('phone').'%');
        }
        if(I('company_name')){
        	$where['company_name']=array('LIKE',urldecode(I('company_name')));
        }
        if(I('hospital')){
        	$where['hospital']=array('LIKE',urldecode(I('hospital')));
        }
        if(I('county')){
        	$where['county']=array('EQ',urldecode(I('county')));
        }
        /*if(I('identity_id')){
        	$where['identity_id']=array('EQ',I('identity_id'));
        }*/
        $where['identity_id']=array('EQ',2);
        $where['is_show']=array('EQ',1);
        //获取当前页和每页显示数量
        $page=I('post.p')?I('post.p'):1;
        $p_len=I('post.p_len')?I('post.p_len'):10;
        $start=($page-1)*$p_len;
        
        $count=$usermodel->where($where)->count();
        $data=$usermodel->field('id,photo,name,phone,sex,position,hospital,context,field,label')->where($where)->limit($start.','.$p_len)->order('id desc')->select();
        $usercount=$usermodel->count();//总用户
        if($data){
            $code=1;
            $msg='查询成功！';
            foreach($data as $key=>$value){
            	$value['label']=substr($value['label'], 1,-1);
            	$data[$key]['label_arr']=explode(',', $value['label']);
            }
        }else{
            $code=1;
            $msg='没有数据！';
        }
        echo json_encode(array('code'=>$code,'msg'=>$msg,'count'=>(int)$count,'data'=>$data));
    }

    /**
     * 返回单个医生信息
     * baikeliang
     */
    public function getOne(){
        $id = I('id');
        if(!$id){
            echo json_encode(array('code'=>0,'msg'=>'缺少医生id！'));
            exit;
        }
        $model = D('User');
        $data=$model->field('id,photo,name,phone,sex,position,hospital,context,field,label_id,label,job_age,meiqia')->where("id=".$id)->find();
        //查询该医生的服务项目
        $dtsvModel=D('DoctorService');
        $service_data=$dtsvModel->field('group_concat(b.id) as service_id,group_concat(b.service_name) as service_name')->alias('a')->join('left join '.C('DB_PREFIX').'service as b on a.service_id=b.id')->where('a.doctor_id='.$id)->select();
        if($data){
            //处理标签
            $data['label_id']=explode(',', $data['label_id']);
            $data['label']=substr($data['label'], 1,-1);
            $data['label_arr']=explode(',', $data['label']);
            $data['service_id_arr']=explode(',', $service_data[0]['service_id']);
            $data['service_name_arr']=explode(',', $service_data[0]['service_name']);
            if(session('userId')){
            	$u_data=$model->field('id,account,mint_name,name,real_name,birthyear,birthmonth,birthday,sex,phone')->where("id=".session('userId'))->find();
            	if($u_data){
            		$data['u_name']=$u_data['name'];
            		$data['u_real_name']=$u_data['real_name'];
            	}else{
            		$data['u_name']='';
            		$data['u_real_name']='';
            	}
            	$data['is_login']=1;
            }else{
            	$data['u_name']='';
            	$data['u_real_name']='';
            	$data['is_login']=0;
            }
            $code=1;
            $msg='查询成功！';
        }else{
            $code=0;
            $msg='没有数据！';
        }
        echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$data));
    }
    
    /**
     * 获取单个医生单月的出诊安排
     * baikeliang
     * 2017-1-5
     */
    public function getDoctorDate(){
    	$doctor_id = I('doctor_id');
    	if(!$doctor_id){
    		echo json_encode(array('code'=>0,'msg'=>'缺少医生id！'));
    		exit;
    	}
    	$visit_date = I('visit_date');
    	if(!$visit_date){
    		echo json_encode(array('code'=>0,'msg'=>'缺少年月！'));
    		exit;
    	}
        $where['visit_date']=array('LIKE',$visit_date.'%');
        $where['doctor_id']=array('EQ',$doctor_id);
        $model=D('Dttime');
        $data=$model->field('visit_date,type')->where($where)->select();
        if($data){
            $code=1;
            $msg='成功';
        }else{
            $code=1;
            $msg='没有数据';
        }
        //返回json数据
        echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$data));
    }
    
    /**
     * 获取单个医生单日的出诊时间
     * baikeliang
     * 2017-1-5
     */
    public function getDoctorTime(){
    	$doctor_id = I('doctor_id');
    	if(!$doctor_id){
    		echo json_encode(array('code'=>0,'msg'=>'缺少医生id！'));
    		exit;
    	}
    	$visit_date = I('visit_date');
    	if(!$visit_date){
    		echo json_encode(array('code'=>0,'msg'=>'缺少日期！'));
    		exit;
    	}
		//查询出该医生当天的出诊时间
		$dttimeModel=D('Dttime');
		$where['a.doctor_id']=array('EQ',$doctor_id);
		$where['a.visit_date']=array('EQ',$visit_date);
		$data=$dttimeModel->alias('a')->field('a.*,b.clinic_name,b.clinic_address')->join('left join '.C('DB_PREFIX').'clinic as b on a.clinic_id=b.id')->where($where)->find();
		//判断该医生当天是否真的出诊
		if($data){
			//计算全部出诊时间
			/*$all_time_arr=array();
			$s_time=strtotime($data['visit_date'].' 09:00');
			$e_time=strtotime($data['visit_date'].' 21:00');
			while ($s_time<=$e_time) {
				$all_time_arr[]['visit_time']=$s_time;
				$s_time+=$data['time_span']*60;
			}
			//计算出出诊时间戳
			$start_time=strtotime($data['visit_date'].' '.$data['start_time']);
			//计算出终诊时间戳
			$end_time=strtotime($data['visit_date'].' '.$data['end_time']);
			//计算出诊时间戳格式时间段
			$time_arr_temp=array();
			while ($start_time<=$end_time) {
				$time_arr_temp[]=$start_time;
				$start_time+=$data['time_span']*60;
			}*/
			//计算全部出诊时间
			$all_time_arr=array();
			$s_time=strtotime($data['visit_date'].' 09:00');
			$e_time=strtotime($data['visit_date'].' 21:00');
			//计算午休时间戳
			$start_rest=strtotime($data['visit_date'].' 12:00');
			$end_rest=strtotime($data['visit_date'].' 13:00');
			//计算上下午出诊时间戳格式时间段
			$time_arr=array();
			while ($s_time<=$start_rest-$data['time_span']*60) {
				$time_arr[]['visit_time']=$s_time;
				$s_time+=$data['time_span']*60;
			}
			$time_arr1=array();
			while ($end_rest<=$e_time-$data['time_span']*60) {
				$time_arr1[]['visit_time']=$end_rest;
				$end_rest+=$data['time_span']*60;
			}
			//合并上下午出诊时间段
			$all_time_arr=array_merge($time_arr,$time_arr1);
			
			//计算出出诊时间戳
			$start_time=strtotime($data['visit_date'].' '.$data['start_time']);
			//计算出终诊时间戳
			$end_time=strtotime($data['visit_date'].' '.$data['end_time']);
			//计算午休时间戳
			$start_rest=$data['visit_date'].' 12:00';
			$start_rest=strtotime($start_rest);
			$end_rest=$data['visit_date'].' 13:00';
			$end_rest=strtotime($end_rest);
			//计算上下午出诊时间戳格式时间段
			$time_arr=array();
			while ($start_time<=$start_rest-$data['time_span']*60) {
				$time_arr[]=$start_time;
				$start_time+=$data['time_span']*60;
			}
			$time_arr1=array();
			while ($end_rest<=$end_time-$data['time_span']*60) {
				$time_arr1[]=$end_rest;
				$end_rest+=$data['time_span']*60;
			}
			//合并上下午出诊时间段
			$time_arr_temp=array_merge($time_arr,$time_arr1);
			/*var_dump($all_time_arr);
			//var_dump($time_arr);
			//var_dump($time_arr1);
			var_dump($time_arr_temp);exit;*/
			//查出该医生当天有预约的时间戳
			$appointmentModel=D('Appointment');
			$need['doctor_id']=array('EQ',$doctor_id);
			$need['status']=array('NEQ',4);
			$need['visit_time']=array('BETWEEN',array($time_arr_temp[0],$end_time));
			//$vi_data=$appointmentModel->field('group_concat(visit_time) as visit_time')->where($need)->find();
			$vi_data=$appointmentModel->field('visit_time,start_time,end_time')->where($need)->select();
			if($vi_data){
				//当天如果有预约
				/*$vi_data1=explode(',', $vi_data['visit_time']);
				//循环出诊时间戳数组，判断哪个时间段已有预约
				foreach ($all_time_arr as $k => $v) {
					if(in_array($v['visit_time'], $time_arr_temp)){
						if(in_array($v['visit_time'], $vi_data1)){
							$all_time_arr[$k]['status']=1;
						}else{
							$all_time_arr[$k]['status']=0;
						}
					}else{
						$all_time_arr[$k]['status']=2;
					}
					//将时间戳转为时间字符串格式
					$all_time_arr[$k]['visit_time']=date('H:i',$v['visit_time']);
				}*/
				foreach ($all_time_arr as $key => $value) {
					if(in_array($value['visit_time'], $time_arr_temp)){
						foreach ($vi_data as $key1 => $value1) {
							if($value['visit_time']<=$value1['start_time']&&$value1['start_time']<($value['visit_time']+$data['time_span']*60) ||
									$value['visit_time']<$value1['end_time']&&$value1['end_time']<=($value['visit_time']+$data['time_span']*60) ||
									$value1['start_time']<=$value['visit_time']&&($value['visit_time']+$data['time_span']*60)<=$value1['end_time']){
								$all_time_arr[$key]['status']=1;
								break;
							}else{
								$all_time_arr[$key]['status']=0;
							}
						}
					}else{
						$all_time_arr[$key]['status']=2;
					}
					//将时间戳转为时间字符串格式
					$all_time_arr[$key]['visit_time']=date('H:i',$value['visit_time']);
				}
			}else{
				foreach ($all_time_arr as $k => $v) {
					if(in_array($v['visit_time'], $time_arr_temp)){
						$all_time_arr[$k]['status']=0;
					}else{
						$all_time_arr[$k]['status']=2;
					}
					//将时间戳转为时间字符串格式
					$all_time_arr[$k]['visit_time']=date('H:i',$v['visit_time']);
				}
			}
			//查询出医生的其他信息
			//$doctorModel=D('User');
			//$doctor_data=$doctorModel->field('id,name,photo,job_age,field')->find($doctor_id);
			//组装最终数组
			$weekarray=array("日","一","二","三","四","五","六");
			$doctor_data['clinic_id']=$data['clinic_id'];
			$doctor_data['clinic_name']=$data['clinic_name'];
			$doctor_data['clinic_address']=$data['clinic_address'];
			$doctor_data['visit_date']=date('Y年m月d日',strtotime($visit_date));
			$doctor_data['visit_week']='星期'.$weekarray[date("w",strtotime($visit_date))];
			$doctor_data['time_arr']=$all_time_arr;
			$code=1;
			$msg='成功！';
		}else{
			$code=0;
			$msg='该医生当天没出诊时间！';
		}
		
		//返回数据
		echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$doctor_data));
    }

    //医生单个月出诊时间及诊所查询
    public function visitDateQuery(){
        $month=I('visit_date');
        if(!$month){
            echo json_encode(array('code'=>0,'msg'=>'缺少年月！'));
            exit; 
        }
        //判断下个月的最后一天是几号
        $this_month=date('n');
        if($this_month+2>12){
            $tow_month=($this_month+2)%12;
            $this_year=date('Y')+1;
        }else{
            $tow_month=$this_month+2;
            $this_year=date('Y');
        }
        $tow_date=$this_year.'-'.$tow_month.'-01';
        $time=strtotime($tow_date);
        $next_time=$time-24*60*60;
        $nex_date=date('Y-m-d',$next_time);
        //判断今天是否是本月25号以前
        $this_date=date('j');
        if(strtotime($month)<=time()){
            $is_befor=0;
        }else{
            if($this_date<25){
                $is_befor=1;
            }else{
                $is_befor=0;
            }
        }
        //查询数据
        $doctor_id=session('userId')?session('userId'):I('doctor_id');
        $where['a.visit_date']=array('LIKE','%'.$month.'%');
        $where['a.doctor_id']=array('EQ',$doctor_id);
        $model=D('Dttime');
        $data=$model->field('a.*,b.clinic_name')->alias('a')->join('left join mint_clinic as b on a.clinic_id=b.id')->where($where)->select();
        if($data){
            $code=1;
            $msg='成功';
        }else{
            $code=1;
            $msg='没有数据';
        }
        //返回json数据
        echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$data,'is_befor'=>$is_befor,'nex_date'=>$nex_date));
    }

    //医生单个月出诊日期及诊所添加
    public function visitDateAdd(){
        if(IS_POST){
            $visit_data=I('post.visit_data');
            if(!$visit_data){
                echo json_encode(array('code'=>0,'msg'=>'缺少出诊年月日！'));
                exit; 
            }
            $doctor_id=session('userId')?session('userId'):I('doctor_id');
            $model=D('Dttime');
            //循环添加数据
            //开启事物
            $model->startTrans();
            foreach ($visit_data as $key => $value) {
                $data['visit_date']=$value['visit_date'];
                $data['clinic_id']=$value['clinic_id'];
                $data['time_span']=$value['time_span'];
                $data['type']=$value['type']?$value['type']:1;
                $data['doctor_id']=$doctor_id;
                $data['create_time']=time();
                if($value['start_time']){
                    $data['start_time']=$value['start_time'];
                }
                if($value['end_time']){
                    $data['end_time']=$value['end_time'];
                }
                if($model->add($data)){
                    $code=1;
                    $msg='添加成功';
                }else{
                    $code=0;
                    $msg='添加失败';
                    break;
                }
            }
            //根据结果提交事物或者回滚事物
            if($code){
                $model->commit();
            }else{
                $model->rollback();
            }
        }else{
            $code=0;
            $msg='请使用post方式请求';
        }

       echo json_encode(array('code'=>$code,'msg'=>$msg)); 
    }

    //查询所有服务项目
    public function serviceLst(){
        $model=D('Service');
        $model->lst();    
    }

    //查询所有诊所
    public function clinicLst(){
        $model=D('Clinic');
        $model->lst();    
    }

    //查询所有医生标签
    public function tagLst(){
        $model=D('Tag');
        $data=$model->lst(1);
    }

    //编辑医生信息
    public function save(){
        if(IS_POST){
            $id = session('userId');
            if(!$id){
                echo json_encode(array('code'=>0,'msg'=>'缺少医生id！'));
                exit; 
            }
            $_POST['id']=$id;
            //修改信息
            $model=D('User');
            //处理生日
            if($_POST['birth']){
                $arr=explode('-', $_POST['birth']);
                $_POST['birthyear']=$arr['0'];
                $_POST['birthmonth']=$arr['1'];
                $_POST['birthday']=$arr['2'];
            }
            //处理标签
            if($_POST['label']&&$_POST['label_id']){
                $_POST['label']=','.implode(',', $_POST['label']).',';
                $_POST['label_id']=implode(',', $_POST['label_id']);
            }
            //修改服务项目
            if($service_ids=I('post.service_ids')){
                //先删除原有的服务项目
                $dtsvModel=D('DoctorService');
                $dtsvModel->where('doctor_id='.$id)->delete();
                //循环添加新的服务项目
                foreach ($service_ids as $key => $value) {
                    $data['doctor_id']=$id;
                    $data['service_id']=$value;
                    $data['create_time']=time();
                    $dtsvModel->add($data);
                }
                $code=1;
                $msg='修改成功！';
            }else{
                //修改基础信息
                $model = D('User');
                // 接收表单并且使用登录的规则验证表单
                if($model->create(I('post.'),2)){
                    if($model->save() !== FALSE ){
                        $code=1;
                        $msg='修改成功！';
                    }else{
                        $code=0;
                        $msg=$model->getError();
                    }        
                }else{
                    //表单验证失败
                    $code=0;
                    $msg=$model->getError();
                }
            }    
        }else{
            $code=0;
            $msg='请使用post方式请求';
        }

       echo json_encode(array('code'=>$code,'msg'=>$msg)); 
    }

	//新版添加预约
	public function newAdd(){
		if(!IS_POST){
			$code=0;
			$msg="请使用post请求！";
		}else{
			$userModel=D('User');
			$verifyModel=D('Verify');
			$model = D('Appointment');
			$str=file_get_contents('php://input');
			$arr=json_decode($str,true);
			foreach ($arr as $key => $value) {
				$_POST[$key]=$value;
			}
			$service_id=I('post.service_id');
			if(!$service_id){
				echo json_encode(array('code'=>0,'msg'=>'缺少服务项目id！'));
				exit;
			}else{
				$serviceModel=D('Service');
				$servicedata=$serviceModel->find($service_id);
				$_POST['project_name']=$servicedata['service_name'];
			}
			$doctor_id=I('post.doctor_id');
			if(!$doctor_id){
				echo json_encode(array('code'=>0,'msg'=>'缺少医生id！'));
				exit;
			}
			$visit_time=I('post.visit_time');
			if(!$visit_time){
				echo json_encode(array('code'=>0,'msg'=>'缺少预约日期！'));
				exit;
			}
			$clinic_id=I('post.clinic_id');
			if(!$clinic_id){
				echo json_encode(array('code'=>0,'msg'=>'缺少诊所id！'));
				exit;
			}
			$clinic_name=I('post.clinic_name');
			if(!$clinic_name){
				echo json_encode(array('code'=>0,'msg'=>'缺少诊所名！'));
				exit;
			}
            //读取缓存
            $userId=session('userId');
			if(0){
				//查询用户信息
				$res=$userModel->field('id,real_name,phone')->where("id=$userId")->find();
				$_POST['patient_name']=$res['real_name'];
				$_POST['patient_phone']=$res['phone'];
			}else{
				//通过表单获取用户信息
				if($_POST['patient_name']&&$_POST['patient_phone']&&$_POST['verify']){
					//判断验证码是否正确
					$verifyRes=$verifyModel->checkVerify($_POST['patient_phone'],$_POST['verify']);
					if(!$verifyRes['code']){
						echo json_encode(array('code'=>0,'msg'=>$verifyRes['msg']));
						exit;
					}
					//判断当前号码是否存在
					$res=$userModel->field('id,account,real_name,phone,identity_id,openid')->where("account='".$_POST['patient_phone']."'")->find();
					if($res['id']){
						//该用户存在
						session('userId', $res['id']);
						//$_POST['patient_name']=$res['real_name'];
						$_POST['patient_phone']=$res['phone'];
					}else{
						//添加用户
						$data['account']=$_POST['patient_phone'];
                        $data['mint_name']=$userModel->createMintName();
						$data['name']=$_POST['patient_name'];
						$data['real_name']=$_POST['patient_name'];
						$data['phone']=$_POST['patient_phone'];
						$data['user_token']=md5($_POST['account'].time());
						$data['create_time']=time();
						if($patient_id=$userModel->add($data)){
                            //成功就把会员的ID缓存
                            session('userId', $patient_id);
						}else{
							echo json_encode(array('code'=>0,'msg'=>'预约失败'));
							exit;
						}
					}
				}else{
					echo json_encode(array('code'=>0,'msg'=>'缺少用户输入数据'));
					exit;
				}
			}
			// 接收表单并且使用规则验证表单
			$_POST['patient_id']=session('userId');
			$_POST['visit_id'] = $_POST['patient_id'];
			$_POST['contact_tel']=$_POST['patient_phone'];
			$_POST['reserve_number']=$reserve_number=$model->getCode8();
			$_POST['visit_time']=strtotime($visit_time);
            $_POST['start_time']=$_POST['visit_time'];
            //查询医生的出诊时间间隔
            $dttimeModel=D('Dttime');
            $s_visit_date=date('Y-m-d',$_POST['visit_time']);
            $visit_date_res=$dttimeModel->where('doctor_id='.$doctor_id.' and visit_date='."'".$s_visit_date."'")->find();
            $_POST['time_long']=$visit_date_res['time_span'];
            $_POST['end_time']=$_POST['visit_time']+$visit_date_res['time_span']*60;
			//判断本次预约是否确实能预约
			if(!$model->checkAppointment($_POST['visit_time'], $doctor_id)){
				echo json_encode(array('code'=>0,'msg'=>'重复预约'));
				exit;
			}
			$_POST['create_time']=time();
			$_POST['visit_date']=strtotime(date('Y-m-d',$_POST['visit_time']));
			if($model->create()){
				$rs = $model->add();
				if($rs){
					//添加成功
					$code=1;
					$msg='预约成功！';
					
					$app_data=$model->field('a.id,a.is_self,a.reserve_number,a.patient_id,a.doctor_id,b.openid as p_openid,c.openid as d_openid,c.name,d.clinic_name,d.clinic_address,d.bus_line,d.told_word,e.real_name')->alias('a')->join('left join '.C('DB_PREFIX').'user as b on a.patient_id=b.id')->join('left join '.C('DB_PREFIX').'user as c on a.doctor_id=c.id')->join('left join mint_clinic as d on a.clinic_id=d.id')->join('left join '.C('DB_PREFIX').'user as e on a.visit_id=e.id')->where('a.id='.$rs)->find();
					//发送短信
					//header('Content-Type: text/html; charset=gb2312');
					//$content = '您已成功预约薄荷牙医，预约编号为'.$reserve_number.'，'.$clinic_name.'，地址是'.$app_data['clinic_address'].'，时间是'.$visit_time.'，请您合理安排好时间。如果要取消预约，请提前24小时在微信中取消。';
					$time=date('Y年m月d日 H:i',$_POST['visit_time']);
					$contact_tel=$_POST['patient_phone'];
					$content = '温馨提醒：您已预约'.$app_data['name'].'医生，请于'.$time.'到'.$clinic_name.'（'.$app_data['clinic_address'].'）就诊。'.$app_data['bus_line'].$app_data['told_word'];
					$res=sendMsg($contact_tel,$content);
					//解析处理XML
					$mxl=simplexml_load_string($res);
					$error_code=(string)$mxl->ErrorNum;
					if($error_code==='0'){
						\Think\Log::write('医生工具预约短信发送成功记录：'.$error_code,'INFO');
					}else{
						\Think\Log::write('医生工具预约短信发送失败记录：'.$error_code,'INFO');
					}
				}else{
					//登录验证失败
					$code=0;
					$msg='预约失败!';
				}
			}else{
				//表单验证失败
				$code=0;
				$msg=$model->getError();
			}
		}
		//生成二维码
		/*$file_name = C('ROOT_CODE_PATH').'app.png';
		if(!file_exists($file_name)){
			Vendor('phpqrcode.phpqrcode');
			//定义纠错级别
			$errorLevel = "M";
			//定义生成图片宽度和高度;默认为3
			$size = "3";
			//生成网址类型
			$url=C('DOMAIN_NAME').'/mintAdmin/index.php/Home/Index/weixinBasePatientList';
			$QRcode=new \QRcode();
			$QRcode->png($url, $file_name, $errorLevel, $size);
			$logo=C('ROOT_IMG_PATH').'code.png';
			
			$QR = imagecreatefromstring(file_get_contents($file_name));
			$logo = imagecreatefromstring(file_get_contents($logo));
			$QR_width = imagesx($QR);//二维码图片宽度
			$QR_height = imagesy($QR);//二维码图片高度
			$logo_width = imagesx($logo);//logo图片宽度
			$logo_height = imagesy($logo);//logo图片高度
			$logo_qr_width = $QR_width / 5;
			$scale = $logo_width/$logo_qr_width;
			$logo_qr_height = $logo_height/$scale;
			$from_width = ($QR_width - $logo_qr_width) / 2;
			//重新组合图片并调整大小
			imagecopyresampled($QR, $logo, $from_width, $from_width, 0, 0, $logo_qr_width,$logo_qr_height, $logo_width, $logo_height);
			imagepng($QR, $file_name);
		}*/
		//返回json数据
		echo json_encode(array('code'=>$code,'msg'=>$msg,'appointment_id'=>$rs,'qr_code'=>'','patient_name'=>$_POST['patient_name'],'patient_phone'=>$_POST['patient_phone']));
	}

    public function  aa(){
        var_dump(session());
    }
}