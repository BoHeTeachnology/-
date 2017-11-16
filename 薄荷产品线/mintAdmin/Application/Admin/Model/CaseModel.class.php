<?php
namespace Admin\Model;
use Think\Model;
 
 //用户模型类
class CaseModel extends Model{
    //随机生成不重复的六位邀请码
    public function getCode8(){
        $code=rand(10000000,99999999);
        //查询数据库该邀请码是否存在
        $res=$this->where("case_number='$code'")->select();
        if($res){
            $this->getCode8();
        }else{
            return $code;
        }
    }
}