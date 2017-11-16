<?php
namespace Admin\Controller;
use Admin\Controller;

class ClinicSurveyController extends BaseController {
	
	//获取诊所预约概况
	public function getClinicSurvey(){
		$clinicModel=D('Clinic');
		//获取搜索条件
		if(I('clinic_brand')){
        	$where['clinic_brand']=array('LIKE','%'.urldecode(I('clinic_brand')).'%');
        }
		//获取当前页和每页显示数量
		$page=I('post.p')?I('post.p'):1;
		$p_len=I('post.p_len')?I('post.p_len'):10;
		$start=($page-1)*$p_len;
		//查询数据
		$count=$clinicModel->where($where)->count();
		$data=$clinicModel->field('id,clinic_brand,clinic_name,chair_nums')->where($where)->limit($start.','.$p_len)->order('id desc')->select();
		//日期
		$visit_date=I('visit_date')?strtotime(I('visit_date')):strtotime("today");
		$date=array();
		for ($i=0;$i<7;$i++){
			$date[$i]['w'] = date('N',($visit_date+$i*24*60*60));
			$date[$i]['d'] = date('m月d日',($visit_date+$i*24*60*60));
			$date[$i]['day'] = date('Y-m-d',($visit_date+$i*24*60*60));
			$date[$i]['time'] = $visit_date+$i*24*60*60;
		}
		if($data){
			$code=1;
			$msg='查询成功！';
			//查询预约数
			$app_model=D('Appointment');
			$map['status'] = array('NEQ',4);
			$map['visit_date'] = array('BETWEEN',($visit_date-1).",".($visit_date+7*24*60*60+1));
			$app_data=$app_model->field('clinic_id,visit_date,COUNT(id) AS COUNT')->where($map)->group('clinic_id,visit_date')->select();
			//查询医生
			$doctor_model=D('Dttime');
			$s_date=I('visit_date')?I('visit_date'):date('Y-m-d',time());
			$e_date=I('visit_date')?date('Y-m-d',$visit_date+7*24*60*60):date('Y-m-d',time()+7*24*60*60+1);
			$map1['visit_date'] = array('BETWEEN',$s_date.",".$e_date);
			$doctor_data=$doctor_model->field('GROUP_CONCAT(doctor_id) as doctor_ids,visit_date,clinic_id')->where($map1)->group('clinic_id,visit_date')->select();
			foreach ($doctor_data as $k=>$v){
				$map2['doctor_id'] = array('in',$v['doctor_ids']);
				$map2['visit_date'] = array('eq',$v['visit_date']);
				//查询医生详情
				$doctor_info=$doctor_model->field('visit_date,start_time,end_time,time_span')->where($map2)->select();
				$doctor_count = 0;
				foreach ($doctor_info as $k1=>$v1){
					$start_time=strtotime($v1['visit_date'].' '.$v1['start_time']);
					$end_time=strtotime($v1['visit_date'].' '.$v1['end_time']);
					$doctor_count = $doctor_count+($end_time-$start_time)/$v1['time_span']/60+1;
				}
				$doctor_data[$k]['count'] = $doctor_count;
				$doctor_data[$k]['visit_date1'] = strtotime($v['visit_date']);
			}
			foreach ($app_data as $k2=>$v2){
				$app_data[$k2]['full']=0;
				foreach ($doctor_data as $k3=>$v3){
					if($v2['clinic_id']==$v3['clinic_id'] && $v2['visit_date']==$v3['visit_date1']){
						if($v2['count']<$v3['count']){
							$app_data[$k2]['full']=0;
						}else{
							$app_data[$k2]['full']=1;
						}
					}
				}
				$app_data[$k2]['visit_date1']=date('Y-m-d',$v2['visit_date']);
			}
			//查询椅位数
			$map2['chair_date'] = array('BETWEEN',($visit_date-1).",".($visit_date+7*24*60*60+1));
			$chair_model = D('Chairnum');
			$chair_data=$chair_model->field('clinic_id,chair_nums,chair_date')->where($map2)->select();
			//拼装数据
			foreach ($data as $key=>$value){
				$day_data=array();
				foreach ($date as $k4=>$v4){
					$day_data[$k4]['day']=$v4['day'];
					$day_data[$k4]['app_num']=0;
					$day_data[$k4]['chair_num']=$value['chair_nums'];
					$day_data[$k4]['full']=0;
					foreach ($app_data as $k5=>$v5){
						if($value['id']==$v5['clinic_id'] && $v4['time']==$v5['visit_date']){
							$day_data[$k4]['app_num']=$v5['count'];
							$day_data[$k4]['full']=$v5['full'];
						}
					}
					foreach ($chair_data as $k6=>$v6){
						if($value['id']==$v6['clinic_id'] && $v4['time']==$v5['chair_date']){
							$day_data[$k4]['chair_num']=$v6['chair_nums'];
						}
					}
				}
				$data[$key]['day_data'] = $day_data;
			}
		}else{
			$code=1;
			$msg='没有数据！';
		}
		//echo '<pre>';
		//print_r($data);exit;
		echo json_encode(array('code'=>$code,'msg'=>$msg,'count'=>(int)$count,'data'=>$data,'date'=>$date));
	}
}