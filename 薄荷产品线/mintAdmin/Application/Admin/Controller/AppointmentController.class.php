<?php
namespace Admin\Controller;
use Admin\Controller;
use Tool\Weixin;

class AppointmentController extends BaseController {

	//预约列表
	public function index(){
		$AppointmentModel=D('Appointment');
		//如果预约中时间小于现在则自动更新此预约为已过期
		$AppointmentModel->status=3;
		$time=time()-24*60*60;
		$AppointmentModel->where("visit_time<$time and status = 1")->save();
		//如果已确认预约的时间小于昨天则自动更新此预约为已过期
		$AppointmentModel->status=3;
		$time=time()-24*60*60*2;
		$AppointmentModel->where("visit_time<$time and status = 5")->save();
		//获取搜索条件
		if(I('reserve_number')){
        	$where['a.reserve_number']=array('LIKE','%'.I('reserve_number').'%');
        }
		if(I('visit_name')){
        	$where['c.real_name']=array('LIKE','%'.urldecode(I('visit_name')).'%');
        }
        if(I('project_name')){
        	$where['a.project_name']=array('LIKE','%'.urldecode(I('project_name')).'%');
        }
        if(I('doctor_name')){
        	$where['b.name']=array('LIKE','%'.urldecode(I('doctor_name')).'%');
        }
        if(I('clinic_name')){
        	$where['d.clinic_name']=array('LIKE','%'.urldecode(I('clinic_name')).'%');
        }
        if(I('company_name')){
        	$where['e.company_name']=array('LIKE','%'.urldecode(I('company_name')).'%');
        }
        $start=I('start');
        $end=I('end');
        if($start&&$end){
            //传了时间
            $end=strtotime($end);
            $start=strtotime($start);
            $where['a.visit_time']=array('BETWEEN',"$start,$end");
        }
		//获取当前页和每页显示数量
        $page=I('post.p')?I('post.p'):1;
        $p_len=I('post.p_len')?I('post.p_len'):10;
        $start=($page-1)*$p_len;
        //查询数据
        $count=$AppointmentModel->alias('a')->field('a.*,b.name as doctor_name')->join('left join mint_user as b on a.doctor_id=b.id')->join('left join mint_user as c on a.visit_id=c.id')->join('left join mint_clinic as d on a.clinic_id=d.id')->join('left join mint_company as e on a.invite_code=e.company_code')->where($where)->count();
        $data=$AppointmentModel->alias('a')->field('a.*,b.name as doctor_name,c.real_name as visit_name,d.clinic_name,e.company_name')->join('left join mint_user as b on a.doctor_id=b.id')->join('left join mint_user as c on a.visit_id=c.id')->join('left join mint_clinic as d on a.clinic_id=d.id')->join('left join mint_company as e on a.invite_code=e.company_code')->where($where)->limit($start.','.$p_len)->order('visit_time desc,id desc')->select();
        if($data){
        	foreach ($data as $key => $value) {
        		//处理时间
        		$data[$key]['visit_time']=date('Y-m-d H:i',$value['visit_time']);
        		$data[$key]['create_time']=date('Y-m-d H:i',$value['create_time']);
        		if(!$value['doctor_name']){
        			$data[$key]['doctor_name']='';
        		}
        	}
            $code=1;
            $msg='查询成功！';
        }else{
            $code=1;
            $msg='没有数据！';
        }

        echo json_encode(array('code'=>$code,'msg'=>$msg,'count'=>(int)$count,'data'=>$data));
	}

	//添加预约
	public function add(){
		if(!IS_POST){
			$code=0;
			$msg="请使用post请求！";
		}else{
			$is_self=I('post.is_self');
			if(!$is_self){
				echo json_encode(array('code'=>0,'msg'=>'缺少是否本人类型！'));
				exit;
			}
			$patient_id=I('post.patient_id');
			if(!$patient_id){
				echo json_encode(array('code'=>0,'msg'=>'缺少预约人id'));
				exit;
			}
			$patient_name=I('post.patient_name');
			if(!$patient_name){
				echo json_encode(array('code'=>0,'msg'=>'缺少预约人姓名！'));
				exit;
			}
			$contact_tel=I('post.contact_tel');
			if(!$contact_tel){
				echo json_encode(array('code'=>0,'msg'=>'缺少预约人联系电话！'));
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
			$time_long=I('post.time_long');
			if(!$time_long){
				echo json_encode(array('code'=>0,'msg'=>'缺少所需时长！'));
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
			$visit_id=I('post.visit_id');
			if(!$visit_id){
				echo json_encode(array('code'=>0,'msg'=>'缺少就诊人id'));
				exit;
			}
			// 接收表单并且使用登录的规则验证表单
			$model = D('Appointment');
			$_POST['patient_phone']=$contact_tel;
			$visit_time=$_POST['visit_time'];
			$_POST['visit_time']=$_POST['start_time']=strtotime($visit_time);
			$_POST['end_time']=strtotime($visit_time)+$time_long*60;
			if($model->checkAppointments($_POST['start_time'], $_POST['end_time'], $doctor_id)){
				echo json_encode(array('code'=>0,'msg'=>'该时间段已有预约！'));
				exit;
			}
			$_POST['visit_date']=strtotime(date('Y-m-d',$_POST['visit_time']));
			$_POST['create_time']=time();
			$_POST['reserve_number']=$reserve_number=$model->getCode8();
			//判断邀请码是否存在
			$comModel=D('Company');
			$company_code=$_POST['invite_code'];
			if($comModel->where("company_code='$company_code'")->find()){
				if($model->create()){
					$rs = $model->add();
					if($rs){
						//改变用户的公司邀请码
						$userModel=D('User');
						$userModel->company_code=$company_code;
						$userModel->where("id=$patient_id")->save();
						//添加成功
						$code=1;
						$msg='添加成功！';
						
						$map['a.id'] = array('eq',$rs);
						$app_data=$model->field('a.id,a.is_self,a.reserve_number,a.patient_id,a.doctor_id,b.openid as p_openid,c.openid as d_openid,c.name,d.clinic_name,d.clinic_address,d.bus_line,d.told_word,e.real_name')->alias('a')->join('left join '.C('DB_PREFIX').'user as b on a.patient_id=b.id')->join('left join '.C('DB_PREFIX').'user as c on a.doctor_id=c.id')->join('left join mint_clinic as d on a.clinic_id=d.id')->join('left join '.C('DB_PREFIX').'user as e on a.visit_id=e.id')->where($map)->find();
						//发送微信模版消息
						$user_data=$userModel->field('phone,openid')->where("id=".$patient_id)->find();
						if($user_data['openid']){
							$openid = $user_data['openid'];
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
							\Think\Log::write('后台病人预约微信模板消息记录：'.json_encode($data),'INFO');
						}
						if($user_data['phone']){
							//发送短信
							header('Content-Type: text/html; charset=gb2312');
							//$content = '您已成功预约薄荷牙医，预约编号为'.$reserve_number.'，'.$clinic_name.'，地址是'.$app_data['clinic_address'].'，时间是'.$visit_time.'，请您合理安排好时间。如果要取消预约，请提前24小时在微信中取消。';
							$time=date('Y年m月d日 H:i',$_POST['visit_time']);
							if($is_self==2){
								$content = '温馨提醒：您已为'.$app_data['real_name'].'预约'.$project_name.'项目，请于'.$time.'到'.$clinic_name.'（'.$app_data['clinic_address'].'）就诊。'.$app_data['bus_line'].$app_data['told_word'];
							}else{
								$content = '温馨提醒：您已预约'.$project_name.'项目，请于'.$time.'到'.$clinic_name.'（'.$app_data['clinic_address'].'）就诊。'.$app_data['bus_line'].$app_data['told_word'];
							}
							$res=sendMsg($user_data['phone'],$content);
							//解析处理XML
							$mxl=simplexml_load_string($res);
							$error_code=(string)$mxl->ErrorNum;
							if($error_code==='0'){
								\Think\Log::write('病人预约短信发送成功记录：'.$error_code,'INFO');
							}else{
								\Think\Log::write('病人预约短信发送失败记录：'.$error_code,'INFO');
							}
						}
					}else{
						//登录验证失败
						$code=0;
						$msg='添加失败!';
					}
				}else{
					//表单验证失败
					$code=0;
					$msg=$model->getError();
				}	
			}else{
				$code=0;
				$msg="邀请码不存在";
			}
			
		}
		//返回json数据
		echo json_encode(array('code'=>$code,'msg'=>$msg));
	}

	//修改预约
	public function edit(){
		if(!IS_POST){
			$code=0;
			$msg="请使用post请求！";
		}else{
			$id=I('post.id');
			if(!$id){
				echo json_encode(array('code'=>0,'msg'=>'缺少预约id'));
				exit;
			}
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
			$time_long=I('post.time_long');
			if(!$time_long){
				echo json_encode(array('code'=>0,'msg'=>'缺少所需时长！'));
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
			$patient_id=I('post.patient_id');
			if(!$patient_id){
				echo json_encode(array('code'=>0,'msg'=>'缺少预约人id'));
				exit;
			}
			$visit_id=I('post.visit_id');
			if(!$visit_id){
				echo json_encode(array('code'=>0,'msg'=>'缺少就诊人id'));
				exit;
			}
			// 接收表单并且使用登录的规则验证表单
			$model = D('Appointment');
			$_POST['patient_phone']=$contact_tel;
			$visit_time=$_POST['visit_time'];
			$_POST['visit_time']=$_POST['start_time']=strtotime($visit_time);
			$_POST['end_time']=strtotime($visit_time)+$time_long*60;
			$_POST['visit_date']=strtotime(date('Y-m-d',$_POST['visit_time']));
			if($model->checkAppointments($_POST['start_time'], $_POST['end_time'], $doctor_id, $id)){
				echo json_encode(array('code'=>0,'msg'=>'该时间段已有预约！'));
				exit;
			}
			if($model->create()){
				if($model->save()!==false){
					$code=1;
					$msg='修改成功！';
				}else{
					$code=0;
					$msg='修改失败!';
				}
			}else{
				//表单验证失败
				$code=0;
				$msg=$model->getError();
			}
		}
		//返回json数据
		echo json_encode(array('code'=>$code,'msg'=>$msg));
	}

	//删除预约
	public function delete(){
		if(!$id=I('appointment_id')){
			echo json_encode(array('code'=>0,'msg'=>'缺少预约id'));
			exit;
		}
		$model = D('Appointment');
		if($model->delete($id)!==false){
			$code=1;
			$msg='删除成功！';
		}else{
			//登录验证失败
			$code=0;
			$msg='删除失败!';
		}

		//返回json数据
		echo json_encode(array('code'=>$code,'msg'=>$msg));
	}

	//获取单个预约
	public function getOne(){
		if(!$id=I('appointment_id')){
			echo json_encode(array('code'=>0,'msg'=>'缺少预约id'));
			exit;
		}
		$model = D('Appointment');
		$data=$model->alias('a')->field('a.*,b.name as doctor_name,b.account as doctor_phone,c.real_name as visit_name,d.clinic_name,e.company_name')->join('left join mint_user as c on a.visit_id=c.id')->join('left join mint_user as b on a.doctor_id=b.id')->join('left join mint_clinic as d on a.clinic_id=d.id')->join('left join mint_company as e on a.invite_code=e.company_code')->where("a.id=$id")->find();
		if($data){
			$data['visit_time']=date('Y-m-d H:i',$data['visit_time']);
			$data['start_time']=date('Y-m-d H:i',$data['start_time']);
			$data['end_time']=date('Y-m-d H:i',$data['end_time']);
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

	//病人、医生列表
	public function userLst(){
		$identity_id=I('identity_id')?I('identity_id'):2;
		$userModel=D('User');
		$data=$userModel->field('id,name,account')->where('identity_id='.$identity_id)->select();
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

	//诊所列表
	public function clinicLst(){
		$clinicModel=D('Clinic');
		$data=$clinicModel->field('id,clinic_name')->select();
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

	//企业列表
	public function companyLst(){
		$companyModel=D('Company');
		$data=$companyModel->field('id,company_name,company_code')->select();
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

	//查询所有服务项目
    public function serviceLst(){
        $model=D('Service');
        $data=$model->select();   
        if($data){
        	$code=1;
        	$msg='成功';
        }else{
        	$code=0;
        	$msg='失败';
        }

        //返回json数据
		echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$data));
    }

	//返回单个医生的详细信息和出诊时间状态
	public function getOneVisitData(){
		$doctor_id=I('doctor_id');
		$visit_date=I('visit_date');
		if(!$doctor_id){
			echo json_encode(array('code'=>0,'msg'=>'缺少医生id！'));
			exit;
		}
		if(!$visit_date){
			echo json_encode(array('code'=>0,'msg'=>'缺少预约日期！'));
			exit;
		}
		//查询出该医生当天的出诊时间
		$dttimeModel=D('Dttime');
		$where['a.doctor_id']=array('EQ',$doctor_id);
		$where['a.visit_date']=array('EQ',$visit_date);
		$data=$dttimeModel->alias('a')->field('a.*,b.clinic_name')->join('left join mint_clinic as b on a.clinic_id=b.id')->where($where)->find();
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
				//$start_time+=$data['time_span']*60;
				$start_time+=15*60; //时间间隔固定为15分钟
			}
			//查出该医生当天有预约的时间戳
			$appointmentModel=D('Appointment');
			$need['doctor_id']=array('EQ',$doctor_id);
			$need['status']=array('NEQ',4);
			$need['visit_time']=array('BETWEEN',array($time_arr[0]['visit_time'],$end_time));
			/*$vi_data=$appointmentModel->field('group_concat(visit_time) as visit_time')->where($need)->find();
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
			}*/
			//$vi_data=$appointmentModel->field('GROUP_CONCAT(start_time) AS start_time,GROUP_CONCAT(end_time) AS end_time')->where($need)->find();
			$vi_data=$appointmentModel->field('start_time,end_time')->where($need)->select();
			//echo $appointmentModel->_sql();exit;
			if($vi_data){
				//当天如果有预约
				//循环出诊时间戳数组，判断哪个时间段已有预约
				foreach ($time_arr as $key => $value) {
					$time_arr[$key]['is_have']=0;
					foreach ($vi_data as $k => $v) {
						if($value['visit_time']>=$v['start_time'] && $value['visit_time']<$v['end_time']){
							$time_arr[$key]['is_have']=1;
							break;
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
			$doctor_data['clinic_id']=$data['clinic_id'];
			$doctor_data['clinic_name']=$data['clinic_name'];
			$doctor_data['time_span']=$data['time_span'];
			$doctor_data['visit_date']=$visit_date;
			$doctor_data['time_arr']=$time_arr;
			$code=1;
			$msg='成功';
		}else{
			$code=0;
			$msg='该医生当天没出诊信息！';
		}
		
		//返回数据
		echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$doctor_data));
	}

	//根据时间和服务项目获取医生列表
	public function getDoctorLst(){
		//获取时间
		$visit_date=I('visit_date');
		$service_id=I('service_id');
		if(!$visit_date){
			echo json_encode(array('code'=>0,'msg'=>'缺少预约日期！'));
			exit;
		}
		if(!$service_id){
			echo json_encode(array('code'=>0,'msg'=>'缺少服务id！'));
			exit;
		}
		//判断今天是否是本月26号以前
		$this_month=date('m');
		$get_month=explode('-',$visit_date );
        if($this_month==$get_month[1]){
            $is_this_month=1;
        }else{
            $is_this_month=0;
        }
		//根据时间查出今天有出诊的医生id
		$dttimeModel=D('Dttime');
		$dt_ids=$dttimeModel->field('group_concat(doctor_id) as id')->where("visit_date='$visit_date'")->find();
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
			}else{
				$code=1;
				$msg='没有数据';
			}
		}else{
			$code=1;
			$msg='没有数据';
		}

		echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$data,'is_this_month'=>$is_this_month));
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
        $doctor_id=I('doctor_id')?I('doctor_id'):session('userId');
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
		//查出医生id
		$usermodel=D('User');
		$dt_ids=$usermodel->field('group_concat(id) as id')->where("identity_id=2")->find();
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

	//根据就诊人id返回预约人信息
	public function getAppointmentInfo(){
		$visit_id=I('visit_id');
		if(!$visit_id){
			echo json_encode(array('code'=>0,'msg'=>'缺少就诊人id！'));
            exit;
		}
		$userModel=D('User');
		$res=$userModel->find($visit_id);
		if($res['is_own']){
			//是为本人预约
			$data['patient_id']=$res['id'];
			$data['patient_name']=$res['real_name'];
			$data['is_self']=1;
			$data['relation']='';
			$data['contact_tel']=$res['phone'];
			$code=1;
            $msg='成功';
		}else{
			//为关系成员预约
			$relationModel=D('Relation');
            $res1=$relationModel->where('child_id='.$visit_id)->find();
            $res2=$userModel->find($res1['parent_id']);
            if($res1&&$res2){
            	$data['patient_id']=$res2['id'];
				$data['patient_name']=$res2['real_name'];
				$data['is_self']=2;
				$data['relation']=$res1['relation'];
				$data['contact_tel']=$res['phone'];
				$code=1;
            	$msg='成功';
            }else{
            	$code=0;
            	$msg='此关系成员关系不成立，无法预约';
            }
		}

		echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$data));
	}
}