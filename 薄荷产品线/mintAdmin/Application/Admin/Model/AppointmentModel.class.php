<?php
namespace Admin\Model;
use Think\Model;
 
 //用户模型类
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

    //判断是否是重复预约
    public function checkAppointment($visit_time, $doctor_id){
        $where['doctor_id']=array('EQ',$doctor_id);
        $where['status']=array('NEQ',4);
        $where['visit_time']=array('EQ',$visit_time);
        if($this->where($where)->find()){
            return false;
        }else{
            return true;
        }
    }

    /**
     * 判断是否是重复预约
     * @param $start_time	开始时间
     * @param $end_time		结束时间
     * @param $doctor_id	医生id
     * @param $id			预约id
     * @return boolean		有
     * baikeliang
     */
    public function checkAppointments($start_time, $end_time, $doctor_id, $id=0){
        if($id){
        	$where['id']=array('NEQ',$id);
        }
        $where['doctor_id']=array('EQ',$doctor_id);
        $where['status']=array('NEQ',4);
        
        $start_time1 = $start_time+1;
        $end_time1 = $end_time-1;
        $map['start_time']=array('BETWEEN',"$start_time,$end_time1");
        $map['end_time']=array('BETWEEN',"$start_time1,$end_time");
        $map['_string'] = 'start_time<='.$start_time.' AND end_time>='.$end_time;
        $map['_logic'] = 'or';
        $where['_complex'] = $map;
        $rs = $this->where($where)->find();
        if($rs){
            return true;
        }else{
            return false;
        }
    }
}