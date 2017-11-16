<?php
namespace Home\Model;
use Think\Model;
 
 //用户模型类
class UserModel extends Model{
	
	//账号密码登录验证
	public function login(){
		// 先根据用户名查询数据库
		$username = $this->data['account'];
		$password = $this->data['password'];
		$user=$this->where(array(
			'account' => array('eq', $username)
		))->find();
		if($user){
			//账号未启用
			if($user['is_use']!=1){
				$this->error = '该账号已被禁用！';
				return FALSE;
			}
			if($user['password'] == md5(md5($password))){
				if(session('openid')&&!$user['openid']){
					//绑定微信号
					$map['openid']=session('openid');
				}
				$map['id']=$user['id'];
				$map['last_login_time']=time();
				$map['user_token']=md5($username.time());
				$this->save($map);
				// 如果登录成功就把会员的ID，会员的名称存到SESSION中
				session('userId', $user['id']);
				session('userName', $user['account']);
				session('identityId', $user['identity_id']);
				return $user;
			}else{
				$this->error = '密码不正确！';
				return FALSE;
			}
		}else{
			$user=$this->where(array(
				'mint_name' => array('eq', $username)
			))->find();
			if($user){
				//账号未启用
				if($user['is_use']!=1){
					$this->error = '该账号已被禁用！';
					return FALSE;
				}
				if($user['password'] == md5(md5($password))){
					if(session('openid')&&!$user['openid']){
						//绑定微信号
						$map['openid']=session('openid');
					}
					$map['id']=$user['id'];
					$map['last_login_time']=time();
					$map['user_token']=md5($username.time());
					$this->save($map);
					// 如果登录成功就把会员的ID，会员的名称存到SESSION中
					session('userId', $user['id']);
					session('userName', $user['account']);
					session('identityId', $user['identity_id']);
					return $user;
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
	
	//openid登录验证
	public function openidLogin($openid){
		$where['openid']=array('eq', $openid);
		$user=$this->where($where)->order('last_login_time desc')->find();
		if($user){
			//账号未启用
			/*if($user['is_use']!=1){
				$this->error = '该账号已被禁用！';
				return FALSE;
			}*/
			$map['id']=$user['id'];
			$map['last_login_time']=time();
			$map['user_token']=md5(time());
			$this->save($map);
			session('userId', $user['id']);
			session('userName', $user['account']);
			session('identityId', $user['identity_id']);
			return $user;
		}else{
			$this->error = '账号不存在！';
			return false;
		}
	}
	
	//手机验证码登录验证
	public function verifyLogin($account){
		$where['account']=array('eq', $account);
		$user=$this->where($where)->find();
		if($user){
			//账号未启用
			/*if($user['is_use']!=1){
				$this->error = '该账号已被禁用！';
				return FALSE;
			}*/
			if(session('openid')&&!$user['openid']){
				//绑定微信号
				$map['openid']=session('openid');
			}
			$map['id']=$user['id'];
			$map['last_login_time']=time();
			$map['user_token']=md5($account.time());
			$this->save($map);
			// 如果登录成功就把会员的ID，会员的名称存到SESSION中
			session('userId', $user['id']);
			session('userName', $user['account']);
			session('identityId', $user['identity_id']);
			return $user;
		}else{
			$this->error = '账号不存在！';
			return false;
		}
	}

	//判断用户名是否存在
    public function checkUser($account){
        $where['account']=array('eq', $account);
        $count=$this->where($where)->count();
        if($count>0){
        	return false;
        }else{
            return true;
        }     
    }

	//判断薄荷名是否存在
    public function checkMintName($mint_name){
        $where['mint_name']=array('eq', $mint_name);
        $count=$this->where($where)->count();
        if($count>0){
        	return true;
        }else{
            return false;
        }     
    }

    //生成薄荷号
    public function createMintName($length = 6){
        $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        $str = "bh";
        for ($i = 0; $i < $length; $i++) {
          $str .= substr($chars, mt_rand(0, strlen($chars) - 1), 1);
        }
        //查询数据库该邀请码是否存在
        $res=$this->where("mint_name='".$str."'")->select();
        if($res){
            $this->createMintName();
        }else{
            return $str;
        }
    }
}