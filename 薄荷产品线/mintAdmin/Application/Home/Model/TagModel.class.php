<?php
namespace Home\Model;
use Think\Model;
 
 //标签模型类
class TagModel extends Model{

	public function lst($type){
		$data=$this->where('type='.$type)->select();
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