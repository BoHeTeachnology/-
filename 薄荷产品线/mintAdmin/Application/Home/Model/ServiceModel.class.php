<?php
namespace Home\Model;
use Think\Model;
 
 //服务项目模型类
class ServiceModel extends Model{

	public function lst(){
		$data=$this->where('is_use=1')->order('sort')->select();
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