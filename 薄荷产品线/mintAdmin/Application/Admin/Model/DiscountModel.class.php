<?php
namespace Admin\Model;
use Think\Model;
//折扣模型类
class DiscountModel extends Model{

	protected $_validate = array(
		array('discount', 'require', '折扣不能为空！', 1, 'regex'),
	);

	//判断折扣是否存在
    public function checkDiscount($discount,$id=0){
        if($id){
        	$where['id']=array('NEQ',$id);
        }
    	$where['discount']=array('EQ',$discount);
        $count=$this->where($where)->count();
        if($count>0){
        	return true;
        }else{
            return false;
        }     
    }
}