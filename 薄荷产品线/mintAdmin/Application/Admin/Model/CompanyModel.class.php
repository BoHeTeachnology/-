<?php
namespace Admin\Model;
use Think\Model;
 
 //用户模型类
class CompanyModel extends Model{

    //随机生成不重复的六位邀请码
    public function getCode6(){
    	$code=rand(100000,999999);
    	//查询数据库该邀请码是否存在
    	$res=$this->where("company_code='$code'")->select();
    	if($res){
    		$this->getCode6();
    	}else{
    		return $code;
    	}
    }
}