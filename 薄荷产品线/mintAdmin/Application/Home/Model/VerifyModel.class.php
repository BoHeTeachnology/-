<?php
namespace Home\Model;
use Think\Model;
 
 //短信验证码模型类
class VerifyModel extends Model{

	public function checkVerify($phone,$verify){
		//判断验证码是否正确
		$where['phone']=$phone;
		$where['verify']=$verify;
		$where['is_use']=1;
		$res=$this->where($where)->find();
		if($res){
			//判断验证码有没有过期
			if($res['create_time']+300>time()){
				//修改验证码为已使用
				$this->where('id='.$res['id'])->setField('is_use',2);
				$verifyInfo['code']=1;
			}else{
				$verifyInfo['code']=0;
				$verifyInfo['msg']='短信验证码过期！';
			}
		}else{
			$verifyInfo['code']=0;
			$verifyInfo['msg']='短信验证码错误！';
		}
		return $verifyInfo;
	}

	public function checkVerify2($phone,$verify){
		//判断验证码是否正确
		$where['phone']=$phone;
		$where['verify']=$verify;
		$where['is_use']=1;
		$res=$this->where($where)->find();
		if($res){
			//判断验证码有没有过期
			if($res['create_time']+300>time()){
				$verifyInfo['code']=1;
			}else{
				$verifyInfo['code']=0;
				$verifyInfo['msg']='短信验证码过期！';
			}
		}else{
			$verifyInfo['code']=0;
			$verifyInfo['msg']='短信验证码错误！';
		}
		return $verifyInfo;
	}
}    