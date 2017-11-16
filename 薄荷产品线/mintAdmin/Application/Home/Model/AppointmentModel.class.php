<?php
namespace Home\Model;
use Think\Model;
 
 //预约模型类
class AppointmentModel extends Model{

    //随机生成不重复的六位邀请码
    public function getCode8(){
    	$code=rand(10000000,99999999);
    	//查询数据库该邀请码是否存在
    	$res=$this->where("reserve_number='$code'")->select();
    	if($res){
    		$this->getCode8();
    	}else{
    		return $code;
    	}
    }

    //判断是否确实能预约
    public function checkAppointment($visit_time, $doctor_id){
        //查询出该医生当天的预约间隔时间
        $dttimeModel=D('Dttime');
        $need['doctor_id']=array('EQ',$doctor_id);
        $need['visit_date']=array('EQ',date('Y-m-d',$visit_time));
        $dtdata=$dttimeModel->where($need)->find();
        //查询医生的所有预约
        $this_day_start=strtotime($dtdata['visit_date'].' 00:00');
        $this_day_end=strtotime($dtdata['visit_date'].' 24:00');
        $where['visit_time']=array('BETWEEN',array($this_day_start,$this_day_end));
        $where['doctor_id']=array('EQ',$doctor_id);
        $where['status']=array('NEQ',4);

        if($res=$this->where($where)->select()){
            //当天如果有预约
            //循环比较该医生的预约判断该预约是否可约
            foreach ($res as $key1 => $value1) {
                //当有约的开始时间和结束时间有一个在该时间段时、有预约的时间段包含该时间段时。则有被占用
                if($visit_time<=$value1['start_time']&&$value1['start_time']<($visit_time+$dtdata['time_span']*60) ||
                    $visit_time<$value1['end_time']&&$value1['end_time']<=($visit_time+$dtdata['time_span']*60) || 
                    $value1['start_time']<=$visit_time&&($visit_time+$dtdata['time_span']*60)<=$value1['end_time']){
                    return false;
                    die;
                }
            }
            return true;
        }else{
            //该医生没有预约，当前可约
            return true;
        }
    }
}