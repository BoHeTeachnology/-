<?php
namespace Home\Model;
use Think\Model;
 
 //诊所模型类
class ClinicModel extends Model{

	public function lst(){
		$data=$this->field('account,password',true)->select();
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
}    