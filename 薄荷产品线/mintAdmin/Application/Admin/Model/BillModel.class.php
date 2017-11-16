<?php
namespace Admin\Model;
use Think\Model;
 
 //用户模型类
class BillModel extends Model{

    //随机生成不重复的六位邀请码
    public function getCode8(){
    	$code=rand(10000000,99999999);
    	//查询数据库该邀请码是否存在
    	$res=$this->where("bill_number='$code'")->select();
    	if($res){
    		$this->getCode8();
    	}else{
    		return $code;
    	}
    }

    //查询项目信息和总价
    public function editBillObj($obj_data){
        $Model=D('BillProject');
        //计算总价
        $price=0;
        $actual_price=0;
        foreach ($obj_data as $key => $value) {
            $data=$Model->where("id=".$value['id'])->find();
            if(abs($data['price']-$obj_data[$key]['price'])>0.001||abs($data['price']*$obj_data[$key]['project_discount']-$obj_data[$key]['actual_price'])>0.00001){
                return false;
                break;
            }else{
                //更新信息并计算总价
                if(false===$Model->save($value)){
                    //更新失败
                    return false;
                    break;
                }
                $price+=$obj_data[$key]['price']*$obj_data[$key]['number'];
                $actual_price+=$obj_data[$key]['actual_price']*$obj_data[$key]['number'];
            }
        }
        $arr=array($price,$actual_price); 
        
        return $arr;
    }

}