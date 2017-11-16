<?php
namespace Home\Controller;
use Home\Controller;
use Tool\Weixin;

class AppointmentController extends BaseController {

	//判断用户已经失约次数
	public function shiyueCount(){
		$patient_id=session('userId')?session('userId'):I('post.patient_id');
		if(!$patient_id){
			echo json_encode(array('code'=>0,'msg'=>'缺少用户id！'));
			exit;
		}
		//判断用户失约次数
		$model = D('Appointment');
		$cha=time()-3*30*24*60*60;
		$time=time();
		$where['patient_id']=array('EQ',$patient_id);
		$where['status']=array('EQ',3);
		$where['create_time']=array('BETWEEN',array($cha,$time));
		$res=$model->field('count(*) as count')->where($where)->find();

		echo json_encode(array('code'=>1,'msg'=>'成功','count'=>$res['count']));
	}

	//添加预约
	public function add(){
		if(!IS_POST){
			$code=0;
			$msg="请使用post请求！";
		}else{
			$invite_code=I('post.invite_code');
			if(!$invite_code){
				echo json_encode(array('code'=>0,'msg'=>'缺少邀请码！'));
				exit;
			}
			//判断用户失约次数
			$model = D('Appointment');
			$patient_id=session('userId');
			$cha=time()-3*30*24*60*60;
			$time=time();
			$where['patient_id']=array('EQ',$patient_id);
			$where['status']=array('EQ',3);
			$where['create_time']=array('BETWEEN',array($cha,$time));
			$res=$model->field('count(*) as count')->where($where)->find();
			if($res['count']>=3){
				echo json_encode(array('code'=>0,'msg'=>'由于您近期失约次数过多，预约失败！'));
				exit;
			}
			//判断邀请码是否存在
			$comModel=D('Company');
			$res=$comModel->where("company_code='$invite_code'")->find();
			if($res){
				$is_self=I('post.is_self');
				if(!$is_self){
					echo json_encode(array('code'=>0,'msg'=>'缺少是否本人类型！'));
					exit;
				}
				$patient_name=I('post.patient_name');
				if(!$patient_name){
					echo json_encode(array('code'=>0,'msg'=>'缺少姓名！'));
					exit;
				}
				$contact_tel=I('post.contact_tel');
				if(!$contact_tel){
					echo json_encode(array('code'=>0,'msg'=>'缺少联系电话！'));
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
				$visit_time=I('post.visit_time');
				if(!$visit_time){
					echo json_encode(array('code'=>0,'msg'=>'缺少预约日期！'));
					exit;
				}
				$doctor_id=I('post.doctor_id');
				if(!$doctor_id){
					echo json_encode(array('code'=>0,'msg'=>'缺少医生id！'));
					exit;
				}
				$service_id=I('post.service_id');
				if(!$service_id){
					echo json_encode(array('code'=>0,'msg'=>'缺少服务项目id！'));
					exit;
				}
				$project_name=I('post.project_name');
				if(!$project_name){
					echo json_encode(array('code'=>0,'msg'=>'缺少服务项目名称！'));
					exit;
				}
				// 接收表单并且使用规则验证表单
				$_POST['patient_id']=session('userId');
				$_POST['visit_id'] = $_POST['patient_id'];
				$_POST['reserve_number']=$reserve_number=$model->getCode8();
				$_POST['visit_time']=strtotime($visit_time);
				//判断本次预约是否确实能预约
				if(!$model->checkAppointment($_POST['visit_time'], $doctor_id)){
					echo json_encode(array('code'=>0,'msg'=>'重复预约'));
					exit;
				}
				$_POST['create_time']=time();
				$_POST['visit_date']=strtotime(date('Y-m-d',$_POST['visit_time']));
				$_POST['patient_phone']=I('post.contact_tel')?I('post.contact_tel'):session('userName');
				$_POST['start_time']=$_POST['visit_time'];
				//查询医生的出诊时间间隔
				$dttimeModel=D('Dttime');
				$s_visit_date=date('Y-m-d',$_POST['visit_time']);
				$visit_date_res=$dttimeModel->where('doctor_id='.$doctor_id.' and visit_date='."'".$s_visit_date."'")->find();
				$_POST['time_long']=$visit_date_res['time_span'];
				$_POST['end_time']=$_POST['visit_time']+$visit_date_res['time_span']*60;
				//如果是为他人预约，则修改或者添加预约人
				if($_POST['is_self']==2){
					if($_POST['visit_people']){
						$_POST['visit_people']=json_decode($_POST['visit_people'],true);
						//同步预约表的关系字段
						$_POST['relations']=$_POST['visit_people']['relation'];
						$userModel = D('User');
						$relationModel=D('Relation');
                        $relcacheModel=D('Relcache');
						if($_POST['visit_people']['id']){
							//设置就诊人id为该关系成员
							$_POST['visit_id'] = $_POST['visit_people']['id'];
							//修改预约人
				            $_POST['visit_people']['name']=$_POST['visit_people']['real_name'];
				            //处理生日
				            if($_POST['visit_people']['birth']){
				                $arr=explode('-', $_POST['visit_people']['birth']);
				                $_POST['visit_people']['birthyear']=$arr['0'];
				                $_POST['visit_people']['birthmonth']=$arr['1'];
				                $_POST['visit_people']['birthday']=$arr['2'];
				            }
				            $userModel->save($_POST['visit_people']);
				            //修改关系
	                        $data['relation']=$_POST['visit_people']['relation'];
	                        $res1=$relationModel->where('child_id='.$_POST['visit_id'])->save($data);
	                        $res2=$relcacheModel->where('child_id='.$_POST['visit_id'])->save($data);
						}else{
							$map['real_name']=array('EQ',$_POST['visit_people']['real_name']);
							$map['phone']=array('EQ',$_POST['visit_people']['phone']);
							$u_data=$userModel->field('id')->where($map)->find();
							if($u_data){
								$_POST['visit_id'] = $u_data['id'];
								if(!$_POST['visit_id']){
									echo json_encode(array('code'=>0,'msg'=>'添加关系成员失败！'));
									exit;
								}
							
								$map1['child_id']=array('EQ',$u_data['id']);
								$map1['parent_id']=array('EQ',$_POST['patient_id']);
							
								$data['parent_id']=$_POST['patient_id'];
								$data['child_id']=$u_data['id'];
								$data['relation']=$_POST['visit_people']['relation'];
								$data['create_time']=time();
								//恢复关系
								$relation_data=$relationModel->field('id')->where($map1)->find();
								if(!$relation_data){
									$res1=$relationModel->add($data);
								}
								$relcache_data=$relcacheModel->field('id')->where($map1)->find();
								if(!$relcache_data){
									$res2=$relcacheModel->add($data);
								}
							}else{
								//添加预约人
								$_POST['visit_people']['mint_name']=$userModel->createMintName();
								$_POST['visit_people']['name']=$_POST['visit_people']['real_name'];
								$_POST['visit_people']['create_time']=time();
								$_POST['visit_people']['is_own']=0;
								//处理生日
								if($_POST['visit_people']['birth']){
									$arr=explode('-', $_POST['visit_people']['birth']);
									$_POST['visit_people']['birthyear']=$arr['0'];
									$_POST['visit_people']['birthmonth']=$arr['1'];
									$_POST['visit_people']['birthday']=$arr['2'];
								}
								$_POST['visit_people']['password']=md5(md5('123456'));
								//添加预约人并且将新生成的id赋予预约人id
								$_POST['visit_id'] = $userModel->add($_POST['visit_people']);
								if(!$_POST['visit_id']){
									echo json_encode(array('code'=>0,'msg'=>'添加关系成员失败！'));
									exit;
								}
								$data['parent_id']=$_POST['patient_id'];
								$data['child_id']=$_POST['visit_id'];
								$data['relation']=$_POST['visit_people']['relation'];
								$data['create_time']=time();
								$res1=$relationModel->add($data);
								$res2=$relcacheModel->add($data);
							}
						}
					}else{
						echo json_encode(array('code'=>0,'msg'=>'缺少预约人信息！'));
						exit;
					}
				}
				if($model->create()){
					$rs = $model->add();
					if($rs){
						//添加成功
						$code=1;
						$msg='预约成功！';
						
						$app_data=$model->field('a.id,a.is_self,a.reserve_number,a.patient_id,a.doctor_id,b.openid as p_openid,c.openid as d_openid,c.name,d.clinic_name,d.clinic_address,d.bus_line,d.told_word,e.real_name')->alias('a')->join('left join '.C('DB_PREFIX').'user as b on a.patient_id=b.id')->join('left join '.C('DB_PREFIX').'user as c on a.doctor_id=c.id')->join('left join mint_clinic as d on a.clinic_id=d.id')->join('left join '.C('DB_PREFIX').'user as e on a.visit_id=e.id')->where('a.id='.$rs)->find();

						//发送微信模版消息
						$openid = session('openid');
			    		$template_id = C('WX_App_Success');
						$url = C('DOMAIN_NAME')."/mintAdmin/index.php/Home/Index/weixinBase/type/order_info/id/".$rs;
						$message = '"first": {
				                       "value":"薄荷牙医提醒您预约成功：",
				                       "color":"#173177"
				                   },
				                   "keyword1":{
				                       "value":"'.$reserve_number.'",
				                       "color":"#173177"
				                   },
				                   "keyword2": {
				                       "value":"'.$project_name.'",
				                       "color":"#173177"
				                   },
				                   "keyword3": {
				                       "value":"'.$visit_time.'",
				                       "color":"#173177"
				                   },
				                   "keyword4": {
				                       "value":"'.$app_data['name'].'",
				                       "color":"#173177"
				                   },
				                   "keyword5": {
				                       "value":"['.$clinic_name.']地址：'.$app_data['clinic_address'].'",
				                       "color":"#173177"
				                   },
				                   "remark":{
				                       "value":"请您按预约时间准时到达，谢谢！",
				                       "color":"#173177"
				                   }';
						$weixin=new Weixin();
						$data=$weixin->sendTemplateMsg($openid,$template_id,$url,$message);
						\Think\Log::write('病人预约微信模板消息记录：'.json_encode($data),'INFO');
						
						//发送短信
						header('Content-Type: text/html; charset=gb2312');
						//$content = '您已成功预约薄荷牙医，预约编号为'.$reserve_number.'，'.$clinic_name.'，地址是'.$app_data['clinic_address'].'，时间是'.$visit_time.'，请您合理安排好时间。如果要取消预约，请提前24小时在微信中取消。';
						$time=date('Y年m月d日 H:i',$_POST['visit_time']);
						//$content = '温馨提醒：您已预约'.$project_name.'项目，请于'.$time.'到'.$clinic_name.'（'.$app_data['clinic_address'].'）就诊。'.$app_data['bus_line'].$app_data['told_word'];
						if($is_self==2){
							$content = '温馨提醒：您已为'.$app_data['real_name'].'预约'.$project_name.'项目，请于'.$time.'到'.$clinic_name.'（'.$app_data['clinic_address'].'）就诊。'.$app_data['bus_line'].$app_data['told_word'];
						}else{
							$content = '温馨提醒：您已预约'.$project_name.'项目，请于'.$time.'到'.$clinic_name.'（'.$app_data['clinic_address'].'）就诊。'.$app_data['bus_line'].$app_data['told_word'];
						}
						$res=sendMsg($contact_tel,$content);
						//解析处理XML
						$mxl=simplexml_load_string($res);
						$error_code=(string)$mxl->ErrorNum;
						if($error_code==='0'){
							\Think\Log::write('病人预约短信发送成功记录：'.$error_code,'INFO');
						}else{
							\Think\Log::write('病人预约短信发送失败记录：'.$error_code,'INFO');
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
			}else{
				$code=0;
				$msg="邀请码不存在！";
			}
			
		}
		//返回json数据
		echo json_encode(array('code'=>$code,'msg'=>$msg));
	}
	
	//病人预约列表
	public function patientList(){
		$AppointmentModel=D('Appointment');
		//如果预约时间小于现在则自动更新此预约为已过期
		$map['status']=3;
		$map1['patient_id']=session('userId');
		$map1['status']=array('IN','1,5');
		$map1['visit_time']=array('LT',strtotime('today'));
		$AppointmentModel->where($map1)->save($map);
		
		//获取搜索条件
		if(I('patient_name')){
			$where['a.patient_name']=array('LIKE','%'.urldecode(I('patient_name')).'%');
		}
		$where['patient_id']=array('EQ',session('userId'));
		//获取当前页和每页显示数量
		$page=I('post.p')?I('post.p'):1;
		$p_len=I('post.p_len')?I('post.p_len'):10;
		$start=($page-1)*$p_len;
		//查询数据
		$count=$AppointmentModel->where($where)->count();
		$data=$AppointmentModel->field('a.id,a.patient_name,a.reserve_number,a.visit_time,a.status,a.is_return,b.service_name,c.real_name as visit_name')->alias('a')->join('left join mint_service as b on a.service_id=b.id')->join('left join mint_user as c on a.visit_id=c.id')->where($where)->limit($start.','.$p_len)->order('a.status asc,a.id desc')->select();
		if($data){
			foreach ($data as $key => $value) {
				//处理时间
				$data[$key]['visit_time']=date('Y-m-d H:i',$value['visit_time']);
			}
			$code=1;
			$msg='查询成功！';
		}else{
			$code=1;
			$msg='没有数据！';
		}
	
		echo json_encode(array('code'=>$code,'msg'=>$msg,'count'=>(int)$count,'data'=>$data));
	}
	
	//医生预约列表
	public function doctorList(){
		$AppointmentModel=D('Appointment');
		//如果预约时间小于现在则自动更新此预约为已过期
		$map['status']=3;
		$map1['doctor_id']=array('EQ',session('userId'));
		$map1['status']=array('IN','1,5');
		$map1['visit_time']=array('LT',strtotime('today'));
		$AppointmentModel->where($map1)->save($map);
		
		//获取搜索条件
		if(I('patient_name')){
        	$where['patient_name']=array('LIKE','%'.urldecode(I('patient_name')).'%');
        }
		$where['doctor_id']=array('EQ',session('userId'));
		//获取当前页和每页显示数量
        $page=I('post.p')?I('post.p'):1;
        $p_len=I('post.p_len')?I('post.p_len'):10;
        $start=($page-1)*$p_len;
		//查询数据
		$count=$AppointmentModel->where($where)->count();
		$data=$AppointmentModel->field('a.id,a.patient_name,a.reserve_number,a.visit_time,a.status,a.is_return,b.service_name,c.real_name as visit_name')->alias('a')->join('left join mint_service as b on a.service_id=b.id')->join('left join mint_user as c on a.visit_id=c.id')->where($where)->limit($start.','.$p_len)->order('a.status asc,a.visit_time asc,a.id desc')->select();
		if($data){
			foreach ($data as $key => $value) {
				//处理时间
				$data[$key]['visit_time']=date('Y-m-d H:i',$value['visit_time']);
			}
			$code=1;
			$msg='查询成功！';
		}else{
			$code=1;
			$msg='没有数据！';
		}

        echo json_encode(array('code'=>$code,'msg'=>$msg,'count'=>(int)$count,'data'=>$data));
	}

	//获取单个预约
	public function getOne(){
		if(!$id=I('id')){
			echo json_encode(array('code'=>0,'msg'=>'缺少预约id'));
			exit;
		}
		$model = D('Appointment');
		$data=$model->alias('a')->field('a.*,b.name as doctor_name,c.real_name as appointment_name,d.clinic_name,d.clinic_address,e.id as company_id,e.company_name,f.real_name as visit_name')->join('left join mint_user as b on a.doctor_id=b.id')->join('left join mint_user as c on a.patient_id=c.id')->join('left join mint_clinic as d on a.clinic_id=d.id')->join('left join mint_company as e on a.invite_code=e.company_code')->join('left join mint_user as f on a.visit_id=f.id')->where("a.id=$id")->find();
		if($data){
			$data['visit_time']=date('Y-m-d H:i',$data['visit_time']);
			if(!$data['doctor_name']){
    			$data['doctor_name']='';
    		}
    		if(!$data['doctor_phone']){
    			$data['doctor_phone']='';
    		}
			$code=1;
			$msg='成功！';
		}else{
			//登录验证失败
			$code=0;
			$msg='失败!';
		}

		//返回json数据
		echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$data));
	}

	//根据时间和服务项目获取医生列表
	public function getDoctorLst(){
		//获取时间
		$visit_date=I('visit_date');
		$service_id=I('service_id');
		if(!$visit_date || !$service_id){
			echo json_encode(array('code'=>0,'msg'=>'缺少预约日期或服务id'));
			exit;
		}
		//判断用户点击的日期是否是过往日期
		$this_time=strtotime(date('Y-m-d'));
		$visit_date_time=strtotime($visit_date);
		if($this_time==$visit_date_time){
			echo json_encode(array('code'=>0,'msg'=>'抱歉，今日已约满，请重新预约！'));
			exit;
		}else if($this_time>$visit_date_time){
			echo json_encode(array('code'=>0,'msg'=>'已过期，不可预约！'));
			exit;
		}
		//判断点击时间是哪个月
		$this_month=date('Y-m');
		$next_month=date('Y-m',strtotime($this_month)+31*24*60*60);
		$get_month=explode('-',$visit_date );
        if($get_month[0].'-'.$get_month[1]==$this_month){
            $is_month=1;
        }else if($get_month[0].'-'.$get_month[1]==$next_month){
            $is_month=2;
        }else{
        	$is_month=3;
        }
        //判断今天是26号前还是后
        $this_day=date('d');
        if($this_day>26){
        	$befor26=0;
        }else{
        	$befor26=1;
        }
		//根据时间查出今天有出诊的医生id
		$dttimeModel=D('Dttime');
		$dt_ids=$dttimeModel->field('group_concat(doctor_id) as id')->where("visit_date='$visit_date' and type=1")->find();
		if($dt_ids['id']){
			$dt_ids1=explode(',', $dt_ids['id']);	
		}
		//根据服务id查出有该服务项的医生
		$dtserviceModel=D('DoctorService');
		$dt_ids0=$dtserviceModel->field('group_concat(doctor_id) as id')->where("service_id=$service_id")->find();
		if($dt_ids0['id']){
			$dt_ids2=explode(',', $dt_ids0['id']);	
		}
		//取两个结果交集获得符合的医生id
		if($dt_ids1&&$dt_ids2){
			$dt_id_arr=array_intersect($dt_ids1,$dt_ids2);
		}
		//根据医生id查询出医生列表
		if($dt_id_arr){
			$should['id']=array('IN',$dt_id_arr);
			$should['is_show']=array('EQ',1);
			$doctorModel=D('User');
			$data=$doctorModel->field('id,name,photo,job_age,field')->where($should)->select();
			//查询出当天的诊所信息
			$where['a.doctor_id']=array('IN',$dt_id_arr);
			$where['a.visit_date']=array('EQ',$visit_date);
			$clinic_data=$dttimeModel->alias('a')->field('a.doctor_id,a.clinic_id,b.clinic_name')->join('left join mint_clinic as b on a.clinic_id=b.id')->where($where)->select();
			if($data){
				//处理诊所数据
				foreach ($data as $key => $value) {
					foreach ($clinic_data as $key1 => $value1) {
						if($value['id']==$value1['doctor_id']){
							$data[$key]['clinic_id']=$value1['clinic_id'];
							$data[$key]['clinic_name']=$value1['clinic_name'];
						}
					}
				}
				$code=1;
				$msg='成功';
			}
		}
		//如果查询不到数据则根据时间给出不同的提示信息
		if(!$data){
			$code=0;
			if($is_month==3){
				$msg='抱歉，该日期还未有出诊医生信息</br>每月26号可预约下月。';
			}else if($is_month==1){
				$msg='抱歉，您预约的日期已约满</br>请重新预约';
			}else if($is_month==2){
				if($befor26==1){
					$msg='抱歉，该日期还未有出诊医生信息</br>建议26号后，再预约下月。';
				}else{
					$msg='抱歉，您预约的日期已约满</br>请重新预约';
				}
			}
		}
		echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$data));
	}

	//返回单个医生的详细信息和出诊时间状态
	public function getOneVisitData(){
		$doctor_id=I('doctor_id');
		$visit_date=I('visit_date');
		if(!$doctor_id || !$visit_date){
			echo json_encode(array('code'=>0,'msg'=>'缺少预约日期或服务id'));
			exit;
		}
		//查询出该医生当天的出诊时间
		$dttimeModel=D('Dttime');
		$where['a.doctor_id']=array('EQ',$doctor_id);
		$where['a.visit_date']=array('EQ',$visit_date);
		$data=$dttimeModel->alias('a')->field('a.*,b.clinic_name,b.clinic_address')->join('left join mint_clinic as b on a.clinic_id=b.id')->where($where)->find();
		//判断该医生当天是否真的出诊
		if($data){
			//计算出出诊时间戳
			$start_time=$data['visit_date'].' '.$data['start_time'];
			$start_time=strtotime($start_time);
			//计算出终诊时间戳
			$end_time=$data['visit_date'].' '.$data['end_time'];
			$end_time=strtotime($end_time);
			//计算出诊时间戳格式时间段
			$time_arr=array();
			while ($start_time<=$end_time) {
				$time_arr[]['visit_time']=$start_time;
				$start_time+=$data['time_span']*60;
			}
			//查出该医生当天有预约的时间戳
			$appointmentModel=D('Appointment');
			$need['doctor_id']=array('EQ',$doctor_id);
			$need['status']=array('NEQ',4);
			$need['visit_time']=array('BETWEEN',array($time_arr[0]['visit_time'],$end_time));
			$vi_data=$appointmentModel->field('group_concat(visit_time) as visit_time')->where($need)->find();
			if($vi_data['visit_time']){
				//当天如果有预约
				$vi_data1=explode(',', $vi_data['visit_time']);
				//循环出诊时间戳数组，判断哪个时间段已有预约
				foreach ($time_arr as $key => $value) {
					if(in_array($value['visit_time'], $vi_data1)){
						$time_arr[$key]['is_have']=1;
					}else{
						$time_arr[$key]['is_have']=0;
					}
					//将时间戳转为时间字符串格式
					$time_arr[$key]['visit_time']=date('H:i',$value['visit_time']);
				}
			}else{
				//当天如果没预约
				foreach ($time_arr as $key => $value) {
					$time_arr[$key]['is_have']=0;
					//将时间戳转为时间字符串格式
					$time_arr[$key]['visit_time']=date('H:i',$value['visit_time']);
				}
			}
			//查询出医生的其他信息
			$doctorModel=D('User');
			$doctor_data=$doctorModel->field('id,name,photo,job_age,field')->find($doctor_id);
			//组装最终数组
			$doctor_data['clinic_name']=$data['clinic_name'];
			$doctor_data['clinic_address']=$data['clinic_address'];
			$doctor_data['clinic_id']=$data['clinic_id'];
			$doctor_data['visit_date']=$visit_date;
			$doctor_data['time_arr']=$time_arr;
			$code=1;
			$msg='成功';
		}else{
			$code=0;
			$msg='该医生当天没出诊';
		}
		
		//返回数据
		echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$doctor_data));
	}

	//取消预约
	public function cancel(){
		$appointment_id=I('appointment_id');
		if(!$appointment_id){
			echo json_encode(array('code'=>0,'msg'=>'缺少预约id'));
			exit;
		}
		$appointmentModel=D('Appointment');
		$data=$appointmentModel->find($appointment_id);
		if($data['status']!=1){
			$code=0;
			$msg='不能取消预约中以外状态的预约';
		}else{
			if($data['visit_date']<time()+24*60*60){
				$code=0;
				$msg='就诊日24小时内的预约不能取消';
			}else{
				$appointmentModel->status=4;
				$res=$appointmentModel->where('id='.$appointment_id)->save();
				if($res){
					$code=1;
					$msg='取消成功';
				}else{
					$code=0;
					$msg='取消失败';
				}
			}
		}

		echo json_encode(array('code'=>$code,'msg'=>$msg));
	}

	//选择复诊并发送复诊信息
	public function sendReturnMsg(){
		$appointment_id=I('appointment_id');
		if(!$appointment_id){
			echo json_encode(array('code'=>0,'msg'=>'缺少预约id'));
			exit;
		}
		$patient_id=I('patient_id');
		if(!$patient_id){
			echo json_encode(array('code'=>0,'msg'=>'缺少病人id'));
			exit;
		}
		$content=I('content');
		if(!$content){
			echo json_encode(array('code'=>0,'msg'=>'缺少消息内容'));
			exit;
		}
		if($content==1){
			$_POST['content']=time()+7*24*60*60;
			$visit_time = $content.'周后';
		}else if($content==2){
			$_POST['content']=time()+7*24*60*60*2;
			$visit_time = $content.'周后';
		}else if($content==3){
			$_POST['content']=time()+7*24*60*60*3;
			$visit_time = $content.'周后';
		}else if($content==6){
			$_POST['content']=time()+7*24*60*60*6;
			$visit_time = $content.'周后';
		}else{
			$_POST['content']=strtotime($content);
			$visit_time = $content;
		}
		$_POST['create_time']=time();
		$remark=I('remark')?I('remark'):'无';
		//修改预约的复诊状态
		$appointmentModel=D('Appointment');
		$appointmentModel->need_return=1;
		$res=$appointmentModel->where('id='.$appointment_id)->save();
		//添加消息数据
		$messageModel=D('Message');
		if($messageModel->create()){
			$res1=$messageModel->add();
		}
		if($res!==false&&$res1){
			//发送复诊消息
			$code=1;
			$msg='成功';
			//发送微信模版消息
			$usermodel = D('User');
			$data=$usermodel->field('openid')->where("id=".$patient_id)->find();
			if($data['openid']){
				$map['a.id'] = array('eq',$appointment_id);
				$app_data=$appointmentModel->field('a.id,a.reserve_number,a.patient_id,a.doctor_id,b.openid as p_openid,c.openid as d_openid,c.name,d.service_name,e.clinic_name')->alias('a')->join('left join '.C('DB_PREFIX').'user as b on a.patient_id=b.id')->join('left join '.C('DB_PREFIX').'user as c on a.doctor_id=c.id')->join('left join '.C('DB_PREFIX').'service as d on a.service_id=d.id')->join('left join '.C('DB_PREFIX').'clinic as e on a.clinic_id=e.id')->where($map)->find();
				$openid = $data['openid'];
				$template_id = C('WX_Visit');
				$url = C('DOMAIN_NAME')."/mintAdmin/index.php/Home/Index/weixinBase/type/visit/m_id/".$res1."/app_id/".$appointment_id;
				$message = '"first": {
		                       "value":"薄荷牙医提醒您有一个复诊：",
		                       "color":"#173177"
		                   },
		                   "keyword1":{
		                       "value":"'.$app_data['service_name'].'",
		                       "color":"#173177"
		                   },
		                   "keyword2": {
		                       "value":"'.$app_data['clinic_name'].'",
		                       "color":"#173177"
		                   },
		                   "keyword3": {
		                       "value":"'.$app_data['name'].'",
		                       "color":"#173177"
		                   },
		                   "keyword4": {
		                       "value":"'.$visit_time.'",
		                       "color":"#173177"
		                   },
		                   "keyword5": {
		                       "value":"'.$remark.'",
		                       "color":"#173177"
		                   },
		                   "remark":{
		                       "value":"感谢您使用薄荷牙医的服务，谢谢！",
		                       "color":"#173177"
		                   }';
				$weixin=new Weixin();
				$data=$weixin->sendTemplateMsg($openid,$template_id,$url,$message);
				\Think\Log::write('病人复诊微信模板消息记录：'.json_encode($data),'INFO');
			}
		}else{
			$code=0;
			$msg='失败';
		}

		echo json_encode(array('code'=>$code,'msg'=>$msg));
	}

	//返回初诊医生id
	public function getChuId(){
		$appointment_id=I('appointment_id');
		if(!$appointment_id){
			echo json_encode(array('code'=>0,'msg'=>'缺少预约id'));
			exit;
		}
		if($appointment_id){
			$appointmentModel=D('Appointment');
			$chu_id=$appointmentModel->field('doctor_id')->where('id='.$appointment_id)->find();
		}

		if($chu_id){
			$code=1;
			$msg='成功';
		}else{
			$code=0;
			$msg='无初诊医生';
		}

		echo json_encode(array('code'=>$code,'msg'=>$msg,'chu_id'=>$chu_id['doctor_id']));
	}
	
	//返回单个月每一天的预约状态
	public function getDayStatus(){
		$month=I('month');
		$service_id=I('service_id');
		if(!$month || !$service_id){
			echo json_encode(array('code'=>0,'msg'=>'缺少年月或服务id'));
			exit;
		}
		//遍历出这个月的具体每一天
		$data=array();
		$first_day=strtotime($month.'-01');
		$month_next=$month;
		while($month==$month_next){
			$data[]['day_time']=$first_day;
			$first_day+=24*60*60;
			$month_next=date('Y-m',$first_day);
		}
		//根据服务id查出有该服务项的医生
		$dtserviceModel=D('DoctorService');
		$dt_ids0=$dtserviceModel->field('group_concat(doctor_id) as id')->where("service_id=$service_id")->find();
		if($dt_ids0['id']){
			$dt_ids1=explode(',', $dt_ids0['id']);	
		}
		//查出状态为显示的医生id
		$usermodel=D('User');
		$dt_ids=$usermodel->field('group_concat(id) as id')->where("is_show=1 and identity_id=2")->find();
		if($dt_ids['id']){
			$dt_ids2=explode(',', $dt_ids['id']);	
		}
		//取两个结果交集获得符合的医生id
		if($dt_ids1&&$dt_ids2){
			$dt_id_arr=array_intersect($dt_ids1,$dt_ids2);
		}
		//如果有医生
		if($dt_id_arr){
			//查出当月医生的出诊详情
			$dttimeModel=D('Dttime');
			$where['visit_date']=array('LIKE','%'.$month.'%');
			$where['doctor_id']=array('IN',$dt_id_arr);
			$where['type']=array('EQ',1);
			$res=$dttimeModel->field('GROUP_CONCAT(doctor_id) AS doctor_id,GROUP_CONCAT(start_time) AS start_time,GROUP_CONCAT(end_time) AS end_time,visit_date,time_span')->where($where)->group('visit_date')->select();
			//处理数据，计算出每天满约是多少次
			foreach ($res as $key => $value) {
				//将字符串数据转换为数组
				$res[$key]['doctor_id']=explode(',', $value['doctor_id']);
				$res[$key]['start_time']=explode(',', $value['start_time']);
				$res[$key]['end_time']=explode(',', $value['end_time']);
			}
			foreach ($res as $key => $value) {
				foreach ($value['doctor_id'] as $key1 => $value1) {
					$value['start_time'][$key1]=strtotime($value['visit_date'].' '.$value['start_time'][$key1]);
					$value['end_time'][$key1]=strtotime($value['visit_date'].' '.$value['end_time'][$key1]);
					//计算每个医生的满约次数
					$value['count'][$key1]=($value['end_time'][$key1]-$value['start_time'][$key1])/$value['time_span']/60;
					//排除午休时间
					$min_wuxiu=strtotime($value['visit_date'].' 12:00');
					$max_wuxiu=strtotime($value['visit_date'].' 12:30');
					if($value['start_time'][$key1]<=$min_wuxiu&&$max_wuxiu<=$value['end_time'][$key1]){
						//午休时间在出诊时间内
						$value['count'][$key1]=$value['count'][$key1]-2;
					}else if($value['start_time'][$key1]>$max_wuxiu || $value['end_time'][$key1]<$min_wuxiu){
						//午休时间不在出诊时间内
					}else{
						//午休时间和出诊时间有交叉
						$value['count'][$key1]=$value['count'][$key1]-1;
					}
				}
				foreach ($value['count'] as $key2 => $value2) {
					$value['toal_count']+=$value2;
				}
				$res[$key]=$value;
			}
			//查询出实际每天的预约次数
			$appointmentModel=D('Appointment');
			$min_time=$data[0]['day_time'];
			$last=count($data)-1;
			$max_time=$data[$last]['day_time']+24*60*60;
			$should['visit_date']=array('BETWEEN',array($min_time,$max_time));
			$should['doctor_id']=array('IN',$dt_id_arr);
			$result=$appointmentModel->field('count(*) as real_count,visit_date,doctor_id')->where($should)->group('visit_date,doctor_id')->select();
			//var_dump($res);
			//对比满约和实际预约次数
			foreach ($data as $key => $value) {
				$value['day_time']=date('Y-m-d',$value['day_time']);
				$data[$key]['day_time']=$value['day_time'];
				//首先设置状态为无出诊
				$data[$key]['status']=0;
				foreach ($res as $key1 => $value1) {
					if($value['day_time']==$value1['visit_date']){
						//当天有医生出诊
						$data[$key]['status']=1;
						//判断是否每个医生都已约满
						$man_dt=0;
						//遍历当天的出诊医生
						foreach ($value1['doctor_id'] as $key2 => $value2) {
							//遍历实际预约信息
							foreach ($result as $key3 => $value3) {
								if($value2==$value3['doctor_id']&&$value1['count'][$key2]==$value3['real_count']){
									//找到一个已约满的医生
									$man_dt+=1;
									break;
								}
							}
						}
						if($man_dt==count($value1['doctor_id'])){
							//当天的医生已全部约满
							$data[$key]['status']=2;
						}
						/*foreach ($result as $key2 => $value2) {
							$value2['visit_date']=date('Y-m-d',$value2['visit_date']);
							if($value1['visit_date']==$value2['visit_date']&&$value1['toal_count']<=$value2['real_count']){
								//已约满
								$data[$key]['status']=2;
								break 2;
							}
						}*/
					}	
				}
			}
		}else{
			//没有医生
			foreach ($data as $key => $value) {
				$value['day_time']=date('Y-m-d',$value['day_time']);
				$data[$key]['day_time']=$value['day_time'];
				//设置状态为无预约
				$data[$key]['status']=0;
			}
		}
		
		echo json_encode(array('code'=>1,'msg'=>'成功','data'=>$data));
	}

	//获取预约时的关系成员列表
	public function getRelationIndex(){
		$user_id=session('userId');
		if(!$user_id){
			echo json_encode(array('code'=>0,'msg'=>'缺少预约人id'));
			exit;
		}
		$relcacheModel=D('Relcache');
		$data=$relcacheModel->field('a.relation,b.id,b.real_name,b.birthyear,b.birthmonth,b.birthday,b.phone,b.is_own')->alias('a')->join('left join mint_user as b on a.child_id=b.id')->where('a.parent_id='.$user_id)->select();
		if($data){
			foreach ($data as $key => $value) {
				$data[$key]['birth']=$value['birthyear'].'-'.$value['birthmonth'].'-'.$value['birthday'];
			}
			$code=1;
			$msg='成功';
		}else{
			$data='';
			$code=1;
			$msg='成功';
		}

		echo json_encode(array('code'=>1,'msg'=>'成功','data'=>$data));
	}

	//删除关系成员
	public function deleteRelation(){
		$user_id=I('user_id');
		if(!$user_id){
			echo json_encode(array('code'=>0,'msg'=>'缺少关系成员id'));
			exit;
		}
		$relcacheModel=D('Relcache');
		$res=$relcacheModel->where('child_id='.$user_id)->delete();
		if($res!==false){
			$code=1;
			$msg='成功';
		}else{
			$code=0;
			$msg='失败';
		}

		echo json_encode(array('code'=>1,'msg'=>'成功'));
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
			$visit_time=I('post.visit_time');
			if(!$visit_time){
				echo json_encode(array('code'=>0,'msg'=>'缺少预约日期！'));
				exit;
			}
			$doctor_id=I('post.doctor_id');
			if(!$doctor_id){
				echo json_encode(array('code'=>0,'msg'=>'缺少医生id！'));
				exit;
			}
			$service_id=I('post.service_id');
			if(!$service_id){
				echo json_encode(array('code'=>0,'msg'=>'缺少服务项目id！'));
				exit;
			}
			if($userId=session('userId')){
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
					$res=$userModel->field('id,real_name,phone')->where("account='".$_POST['patient_phone']."'")->find();
					if($res['id']){
						//该用户存在
						session('userId',$res['id']);
						$_POST['patient_name']=$res['real_name'];
						$_POST['patient_phone']=$res['phone'];
					}else{
						//添加用户
						$data['account']=$_POST['account'];
						$data['real_name']=$_POST['real_name'];
						$data['name']=$_POST['real_name'];
						$data['create_time']=time();
						$data['phone']=$_POST['account'];
						$data['openid']=session('openid');
						if($patient_id=$userModel->add($data)){
							session('userId',$patient_id);
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
			//判断本次预约是否确实能预约
			if(!$ss=$model->checkAppointment($_POST['visit_time'], $doctor_id)){
				echo json_encode(array('code'=>0,'msg'=>'重复预约'));
				exit;
			}
			$_POST['create_time']=time();
			$_POST['visit_date']=strtotime(date('Y-m-d',$_POST['visit_time']));
			$_POST['patient_phone']=I('post.contact_tel')?I('post.contact_tel'):session('userName');
			if($model->create()){
				$rs = $model->add();
				if($rs){
					//添加成功
					$code=1;
					$msg='预约成功！';
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

		//返回json数据
		echo json_encode(array('code'=>$code,'msg'=>$msg,'appointment_id'=>$rs));
	}

//******************************************************新版医生出诊时间******************************************************************

	//新版返回单个医生的详细信息和出诊时间状态
	public function getOneVisitDataNew(){
		$doctor_id=I('doctor_id');
		$visit_date=I('visit_date');
		if(!$doctor_id || !$visit_date){
			echo json_encode(array('code'=>0,'msg'=>'缺少预约日期或服务id'));
			exit;
		}
		//查询出该医生当天的出诊时间
		$dttimeModel=D('Dttime');
		$where['a.doctor_id']=array('EQ',$doctor_id);
		$where['a.visit_date']=array('EQ',$visit_date);
		$data=$dttimeModel->alias('a')->field('a.*,b.clinic_name,b.clinic_address')->join('left join mint_clinic as b on a.clinic_id=b.id')->where($where)->find();
		//判断该医生当天是否真的出诊
		if($data){
			//计算出出诊时间戳
			$start_time=$data['visit_date'].' '.$data['start_time'];
			$start_time=strtotime($start_time);
			//计算出终诊时间戳
			$end_time=$data['visit_date'].' '.$data['end_time'];
			$end_time=strtotime($end_time);
			//计算午休时间戳
			$start_rest=$data['visit_date'].' 12:00';
			$start_rest=strtotime($start_rest);
			$end_rest=$data['visit_date'].' 13:00';
			$end_rest=strtotime($end_rest);
			//计算上下午出诊时间戳格式时间段
			$time_arr=array();
			while ($start_time<=$start_rest-$data['time_span']*60) {
				$time_arr[]['visit_time']=$start_time;
				$start_time+=$data['time_span']*60;
			}
			$time_arr1=array();
			while ($end_rest<=$end_time-$data['time_span']*60) {
				$time_arr1[]['visit_time']=$end_rest;
				$end_rest+=$data['time_span']*60;
			}
			//合并上下午出诊时间段
			$time_arr=array_merge($time_arr,$time_arr1);
			//查出该医生当天有预约的时间戳
			$this_day_start=strtotime($data['visit_date'].' 00:00');
			$this_day_end=strtotime($data['visit_date'].' 24:00');
			$appointmentModel=D('Appointment');
			$need['doctor_id']=array('EQ',$doctor_id);
			$need['status']=array('NEQ',4);
			$need['visit_time']=array('BETWEEN',array($this_day_start,$this_day_end));
			$vi_data=$appointmentModel->field('visit_time,start_time,end_time')->where($need)->select();
			if($vi_data){
				//当天如果有预约
				//循环出诊时间戳数组，判断哪个时间段已有预约
				foreach ($time_arr as $key => $value) {
					//循环有预约的时间和每一段出诊时间比较
					foreach ($vi_data as $key1 => $value1) {
						//当有约的开始时间和结束时间有一个在该时间段时、有预约的时间段包含该时间段时。则有被占用
						if($value['visit_time']<=$value1['start_time']&&$value1['start_time']<($value['visit_time']+$data['time_span']*60) ||
							$value['visit_time']<$value1['end_time']&&$value1['end_time']<=($value['visit_time']+$data['time_span']*60) || 
							$value1['start_time']<=$value['visit_time']&&($value['visit_time']+$data['time_span']*60)<=$value1['end_time']){
							$time_arr[$key]['is_have']=1;
							break;
						}else{
							$time_arr[$key]['is_have']=0;
						}
					}
					//将时间戳转为时间字符串格式
					$time_arr[$key]['visit_time']=date('H:i',$value['visit_time']);
				}
			}else{
				//当天如果没预约
				foreach ($time_arr as $key => $value) {
					$time_arr[$key]['is_have']=0;
					//将时间戳转为时间字符串格式
					$time_arr[$key]['visit_time']=date('H:i',$value['visit_time']);
				}
			}
			//查询出医生的其他信息
			$doctorModel=D('User');
			$doctor_data=$doctorModel->field('id,name,photo,job_age,field')->find($doctor_id);
			//组装最终数组
			$doctor_data['clinic_name']=$data['clinic_name'];
			$doctor_data['clinic_address']=$data['clinic_address'];
			$doctor_data['clinic_id']=$data['clinic_id'];
			$doctor_data['visit_date']=$visit_date;
			$doctor_data['time_arr']=$time_arr;
			$code=1;
			$msg='成功';
		}else{
			$code=0;
			$msg='该医生当天没出诊';
		}
		
		//返回数据
		echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$doctor_data));
	}

	//修改以前老数据的预约开始和结束时间
	public function editAppointmentVisitDate(){
		$appointmentModel=D('Appointment');
		$data=$appointmentModel->select();
		foreach ($data as $key => $value) {
			$res['start_time']=$value['visit_time'];
			$res['end_time']=$value['visit_time']+15*60;
			$result=$appointmentModel->where('id='.$value['id'])->save($res);
			if($result===false){
				die;
			}
		}
	}
}