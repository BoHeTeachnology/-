<?php
namespace Admin\Model;
use Think\Model;
 
 //诊所模型类
class ClinicModel extends Model{
	
	//登录验证
	public function login(){
		// 先根据账号查询数据库
		$account = $this->data['account'];
		$password = $this->data['password'];
		$clinic=$this->where(array(
			'account' => array('eq', $account)
		))->find();
		if($clinic){
			if($clinic['password'] == md5(md5($password))){
				// 如果登录成功就把会员的ID，会员的名称存到SESSION中
				session('clinicId', $clinic['id']);
				session('clinicName', $clinic['clinic_name']);
				return TRUE;
			}else{
				$this->error = '密码不正确！';
				return FALSE;
			}
		}else{
			$this->error = '账号不存在！';
			return FALSE;
		}
	}
}