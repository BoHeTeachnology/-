<?php
namespace Home\Controller;
use \Think\Controller;

class UserController extends Controller {

	/**
	 * 手机验证码登录功能
	 * baikeliang
	 * 2016-9-21
	 */
	public function verifyLogin(){
		$code=1;
		$identity_id=0;
		if(!IS_POST){
			$code=0;
			$msg="请使用post请求！";
		}else{
			//验证参数是否完整
			if(!$account=I('post.account')){
				$code=0;
				$msg='手机号不能为空！';
			}
         	if(!$verify=I('post.verify')){
                $code=0;
                $msg='缺少短信验证码！';
            }else{
            	//验证短信验证码是否正确
            	$verifyModel=D('Verify');
            	$verifyInfo=$verifyModel->checkVerify($account,$verify);
            	if($verifyInfo['code']!=1){
            		$code=0;
            		$msg=$verifyInfo['msg'];
            	}
            }
			// 接收表单并且使用登录的规则验证表单
			if($code){
				$model = D('User');
	        	$rs = $model->checkUser($account);
	        	if($rs){
	        		if(session('headimgurl')){
	        			$_POST['photo']=session('headimgurl');//头像
	        		}
	        		if(session('nickname')){
	        			$_POST['nickname']=session('nickname');//昵称
	        		}
	        		if(session('sex')){
	        			$_POST['sex']=session('sex');//性别
	        		}
	        		if(session('country')){
	        			$_POST['country']=session('country');//国家
	        		}
	        		if(session('province')){
	        			$_POST['province']=session('province');//省、直辖市
	        		}
	        		if(session('city')){
	        			$_POST['city']=session('city');//县、区
	        		}
	        		$_POST['phone']=$account;
	        		if(session('openid')){
	        			//绑定微信号
	        			$_POST['openid']=session('openid');
	        		}
	        		$_POST['mint_name']=$model->createMintName();
	        		$_POST['user_token']=md5($account.time());
	        		$_POST['create_time']=$_POST['last_login_time']=time();
	        		unset($_POST['verify']);
	        		if($model->create(I('post.'),1)){
	        			if($id=$model->add()){
	        				$msg='注册成功！';
	        				// 如果注册成功就把会员的ID，会员的名称存到SESSION中
	        				session('userId', $id);
	        				session('userName', $account);
							session('identityId', 1);
							if(session('openid')){
								//发送微信未支付账单
								sendWXBillMsg(session('userId'),session('openid'));
							}
	        			}else{
	        				$code=0;
	        				$msg=$model->getError();
	        			}
	        		}else{
	        			$code=0;
	        			$msg=$model->getError();
	        		}
	        	}else{
	        		if($model->create()){
	        			$user = $model->verifyLogin($account);
	        			if($user){
	        				$msg='登录成功！';
	        				$identity_id=$user['identity_id'];
	        				if(session('openid')){
	        					//发送微信未支付账单
	        					sendWXBillMsg(session('userId'),session('openid'));
	        				}
	        			}else{
	        				//登录验证失败
	        				$code=0;
	        				$msg=$model->getError();
	        			}
	        		}else{
	        			//表单验证失败
	        			$code=0;
	        			$msg=$model->getError();
	        		}
	        	}
			}
		}
		//返回json数据
		echo json_encode(array('code'=>$code,'msg'=>$msg,'identity_id'=>$identity_id));
	}

	/**
	 * 账号密码登录功能
	 * baikeliang
	 */
	public function login(){
		$code=1;
		if(!IS_POST){
			$code=0;
			$msg="请使用post请求！";
		}else{
			//验证参数是否完整
			if(!I('post.account')){
				$code=0;
				$msg='手机号或薄荷号不能为空！';
			}
			if(!I('post.password')){
				$code=0;
				$msg='密码不能为空！';
			}
			// 接收表单并且使用登录的规则验证表单
			if($code){
				$model = D('User');
				if($model->create()){
					$user = $model->login();
					if($user){
						if(session('openid')){
							//发送微信未支付账单
							sendWXBillMsg(session('userId'),session('openid'));
						}
						$msg='登录成功！';
					}else{
						//登录验证失败
						$code=0;
						$msg=$model->getError();
					}
				}else{
					//表单验证失败
					$code=0;
					$msg=$model->getError();
				}
			}
		}
		//返回json数据
		echo json_encode(array('code'=>$code,'msg'=>$msg,'identity_id'=>$user['identity_id']));
	}
    
    /**
	 * 注册功能
	 * baikeliang
	 */
    public function register(){
    	$code=1;
        if(!IS_POST){
            $code=0;
            $msg="请使用post请求！";
        }else{
        	//验证参数是否完整
        	if(!$account=I('post.account')){
        		$code=0;
        		$msg='手机号不能为空！';
        	}
        	/*if(!I('post.code')){
        		$code=0;
        		$msg='缺少图片验证码！';
        	}else{
        		if(!$this->checkVerify(I('post.code'))){
        			$code=0;
        			$msg='验证码错误';
        		}
        	}*/
         	if(!$verify=I('post.verify')){
                $code=0;
                $msg='缺少短信验证码！';
            }
        	if(!$password=I('post.password')){
        		$code=0;
        		$msg='密码不能为空！';
        	}
        	/*if(!$password2=I('post.password2')){
        		$code=0;
        		$msg='确认密码不能为空！';
        	}
        	if($password!=$password2){
        		$code=0;
        		$msg='两次密码不一致！';
        	}*/
            $model = D('User');
        	$rs = $model->checkUser($account);
        	if(!$rs){
        		$code=0;
        		$msg='手机号已注册！';
        	}
            if($verify){
            	$verifyModel=D('Verify');
            	$verifyInfo=$verifyModel->checkVerify($account,$verify);
            	if($verifyInfo['code']!=1){
            		$code=0;
            		$msg=$verifyInfo['msg'];
            	}
            }
            
            // 接收表单并且使用登录的规则验证表单
            if($code){
	            $_POST['password']=md5(md5($password));
            	if(session('headimgurl')){
        			$_POST['photo']=session('headimgurl');//头像
        		}
        		if(session('nickname')){
        			$_POST['nickname']=session('nickname');//昵称
        		}
        		if(session('sex')){
        			$_POST['sex']=session('sex');//性别
        		}
        		if(session('country')){
        			$_POST['country']=session('country');//国家
        		}
        		if(session('province')){
        			$_POST['province']=session('province');//省、直辖市
        		}
        		if(session('city')){
        			$_POST['city']=session('city');//县、区
        		}
	            $_POST['phone']=$account;
	            if(session('openid')){
	            	//绑定微信号
	            	$_POST['openid']=session('openid');
	            }
	        	$_POST['mint_name']=$model->createMintName();
            	$_POST['user_token']=md5($account.time());
	        	$_POST['create_time']=$_POST['last_login_time']=time();
                if($model->create(I('post.'),1)){
                	if($id=$model->add()){
                		$msg='注册成功！';
                		// 如果注册成功就把会员的ID，会员的名称存到SESSION中
						session('userId', $id);
						session('userName', $account);
						session('identityId', 1);
                	}else{
                		$code=0;
                		$msg=$model->getError();
                	}
                }else{
                    $code=0;
                    $msg=$model->getError();
                }
            }
        }
    	//返回json数据
    	echo json_encode(array('code'=>$code,'msg'=>$msg));
    }
    
    /**
	 * 验证账号
	 * baikeliang
	 */
    public function checkUser(){
    	$code=1;
        if(!IS_POST){
            $code=0;
            $msg="请使用post请求！";
        }else{
        	//验证参数是否完整
        	if(!$account=I('post.account')){
        		$code=0;
        		$msg='手机号不能为空！';
        	}
        }
    	$model = D('User');
    	$rs = $model->checkUser($account);
    	if(!$rs){
    		$code=0;
    		$msg='手机号已注册！';
    	}else{
    		$msg='手机号可用！';
    	}
    	//返回json数据
    	echo json_encode(array('code'=>$code,'msg'=>$msg));
    }

    /**
     * 获取用户信息
     * baikeliang
     */
    public function getInfo(){
        $id = session('userId');
        if(!$id){
            echo json_encode(array('code'=>0,'msg'=>'用户未登录！'));
            exit;
        }
        if(!IS_POST){
        	echo json_encode(array('code'=>0,'msg'=>'请使用post请求！'));
        	exit;
        }
        $model = D('User');
        $data=$model->field('id,account,mint_name,password,photo,name,real_name,birthyear,birthmonth,birthday,sex,phone,position,hospital,context,field,label,job_age,work_time,invite_code,openid,identity_id,label_id,company_code')->where("id=".$id)->find();
        if($data){
            $data['nickname']=session('nickname');
            $data['headimgurl']=session('headimgurl');
            if($data['birthyear'] && $data['birthmonth'] && $data['birthday']){
            	$data['birth']=date("Y-m-d",strtotime($data['birthyear'].'-'.$data['birthmonth'].'-'.$data['birthday']));
            }
            //处理标签
            if($data['label']&&$data['label_id']){
                $data['label_id']=explode(',', $data['label_id']);
                $data['label']=substr($data['label'], 1,-1);
                $data['label_arr']=explode(',', $data['label']);
            }
            //处理服务项目
            if($data['identity_id']==2){
                //查询该医生的服务项目
                $dtsvModel=D('DoctorService');
                $service_data=$dtsvModel->field('group_concat(b.service_name) as service_name,group_concat(b.id) as service_id')->alias('a')->join('left join mint_service as b on a.service_id=b.id')->where('a.doctor_id='.$id)->select();
                $data['service_name_arr']=explode(',', $service_data[0]['service_name']);
                $data['service_id_arr']=explode(',', $service_data[0]['service_id']);
            }
            if($data['work_time']){
            	$data['work_time']=explode(',', $data['work_time']);
            }
            $code=1;
            $msg='查询成功！';
        }else{
            $code=0;
            $msg='没有数据！';
        }
        echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$data));
    }

    //获取单个用户信息
    public function getOne(){
        if(!$id=I('user_id')){
            echo json_encode(array('code'=>0,'msg'=>'用户未登录！'));
            exit;
        }
        $model = D('User');
        $data=$model->field('password',true)->find($id);
        if($data){
            $code=1;
            $msg='成功';
        }else{
            $code=0;
            $msg='该用户不存在';
        }

        echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$data));
    }

    /**
     * 修改用户信息
     * baikeliang
     */
    public function modifyInfo(){
        $id = session('userId');
        if(!$id){
            echo json_encode(array('code'=>0,'msg'=>'用户未登录！'));
            exit;
        }
        if(!IS_POST){
        	echo json_encode(array('code'=>0,'msg'=>'请使用post请求！'));
            exit;
        }
        $_POST['id']=$id;
        if(!I('post.photo')){
        	unset($_POST['photo']);
        }
        if(!I('post.name')){
        	unset($_POST['name']);
        }
        //处理生日
        if($_POST['birth']){
        	$arr=explode('-', $_POST['birth']);
        	$_POST['birthyear']=$arr['0'];
        	$_POST['birthmonth']=$arr['1'];
        	$_POST['birthday']=$arr['2'];
        }
        //处理公司邀请码
        if($invite_code=I('post.company_code')){
            //判断邀请码是否存在
            $comModel=D('Company');
            $res=$comModel->where("company_code='$invite_code'")->find();
            if(!$res){
                echo json_encode(array('code'=>0,'msg'=>'邀请码错误！'));
                exit;
            }
        }
        if(!I('post.sex')){
        	unset($_POST['sex']);
        }
        if(!I('post.phone')){
        	unset($_POST['phone']);
        }
        if(!I('post.position')){
        	unset($_POST['position']);
        }
        if(!I('post.hospital')){
        	unset($_POST['hospital']);
        }
        if(!I('post.context')){
        	unset($_POST['context']);
        }
        if(!I('post.field')){
        	unset($_POST['field']);
        }
        if(!I('post.job_age')){
        	unset($_POST['job_age']);
        }
        $model = D('User');
        if($model->create(I('post.'),2)){
        	if($model->save() !== FALSE ){
        		$map['real_name']=I('post.name');
        		$model->where('id='.$id.' and real_name=""')->save($map);
            	$code=1;
        		$msg='修改成功！';
        	}else{
        		$code=0;
        		$msg=$model->getError();
        	}
        }else{
        	//表单验证失败
        	$code=0;
        	$msg=$model->getError();
        }
        echo json_encode(array('code'=>$code,'msg'=>$msg));
    }
    
    /**
     * 设置密码
     * baikeliang
	 * 2016-9-21
     */
    public function setPwd(){
        $id = session('userId');
        if(!$id){
            echo json_encode(array('code'=>0,'msg'=>'用户未登录！'));
            exit;
        }
        if(!IS_POST){
        	echo json_encode(array('code'=>0,'msg'=>'请使用post请求！'));
            exit;
        }
        $new_pwd=I('new_pwd');
        if(!$new_pwd){
           echo json_encode(array('code'=>0,'msg'=>'新密码不能为空！')); 
           die;
        }
        $usermodel=M('User');
        $userInfo=$usermodel->find($id);
        if($userInfo['password']){
        	echo json_encode(array('code'=>0,'msg'=>'用户已经设置过密码！'));
        }else{
            $data['id']=$id;
            $data['password']=md5(md5($new_pwd));
            if($usermodel->save($data)){
                echo json_encode(array('code'=>1,'msg'=>'设置密码成功！'));
            }else{
                echo json_encode(array('code'=>0,'msg'=>'设置密码失败！'));
            }
        }
        exit;
    }
    
    /**
     * 修改密码
     * baikeliang
     */
    public function changePwd(){
        $id = session('userId');
        if(!$id){
            echo json_encode(array('code'=>0,'msg'=>'用户未登录！'));
            exit;
        }
        if(!IS_POST){
        	echo json_encode(array('code'=>0,'msg'=>'请使用post请求！'));
            exit;
        }
        $old_pwd=I('old_pwd');
        $new_pwd=I('new_pwd');
        $com_pwd=I('com_pwd');
        if(!$old_pwd){
           echo json_encode(array('code'=>0,'msg'=>'旧密码不能为空！')); 
           die;
        }
        if(!$new_pwd){
           echo json_encode(array('code'=>0,'msg'=>'新密码不能为空！')); 
           die;
        }
        if(!$com_pwd){
           echo json_encode(array('code'=>0,'msg'=>'确认密码不能为空！')); 
           die;
        }
        if($new_pwd!=$com_pwd){
           echo json_encode(array('code'=>0,'msg'=>'两次密码不一致！')); 
           die;
        }
        $usermodel=M('User');
        $userInfo=$usermodel->find($id);
        if($userInfo['password']==md5(md5($old_pwd))){
           	if($old_pwd==$new_pwd){
            	echo json_encode(array('code'=>1,'msg'=>'修改密码成功！'));
            }else{
	            //修改密码
	            $data['id']=$id;
	            $data['password']=md5(md5($new_pwd));
	            if($usermodel->save($data)){
	                echo json_encode(array('code'=>1,'msg'=>'修改密码成功！'));
	            }else{
	                echo json_encode(array('code'=>0,'msg'=>'修改密码失败！'));
	            }
           	}
        }else{
            echo json_encode(array('code'=>0,'msg'=>'旧密码错误！'));
        }
        exit;
    }
    
    /**
     * 重置密码
     * baikeliang
     */
    public function resetPwd(){
        if(!IS_POST){
        	echo json_encode(array('code'=>0,'msg'=>'请使用post请求！'));
            exit;
        }
        //接收参数
        $phone=I('post.phone');
        $code=I('post.code');
        $verify=I('post.verify');
        $new_pwd=I('new_pwd');
        $com_pwd=I('com_pwd');
        
        if(!$phone){
           	echo json_encode(array('code'=>0,'msg'=>'缺少手机号！')); 
           	die;
        }
        /*if(!$code){
           	echo json_encode(array('code'=>0,'msg'=>'缺少图片验证码！')); 
           	die;
        }*/
        if(!$verify){
           	echo json_encode(array('code'=>0,'msg'=>'缺少短信验证码！')); 
           	die;
        }
        if(!$new_pwd){
           	echo json_encode(array('code'=>0,'msg'=>'新密码不能为空！')); 
           	die;
        }
        /*if(!$com_pwd){
           	echo json_encode(array('code'=>0,'msg'=>'确认密码不能为空！')); 
           	die;
        }
        if($new_pwd!=$com_pwd){
           	echo json_encode(array('code'=>0,'msg'=>'两次密码不一致！')); 
          	die;
        }*/
        $model = D('User');
       	$rs = $model->checkUser($phone);
        if($rs){
           	echo json_encode(array('code'=>0,'msg'=>'手机号未注册！')); 
          	die;
        }
        if($verify){
            $verifyModel=D('Verify');
            $verifyInfo=$verifyModel->checkVerify($phone,$verify);
            if($verifyInfo['code']!=1){
	           	echo json_encode(array('code'=>0,'msg'=>$verifyInfo['msg'])); 
	          	die;
            }
        }
        //修改密码
        $where['account']=$phone;
        $data['password']=md5(md5($new_pwd));
        $result=$model->where($where)->save($data);
        if($result===false){
            //失败
            echo json_encode(array('code'=>0,'msg'=>'重置密码失败！'));
        }else{
            //成功
            echo json_encode(array('code'=>1,'msg'=>'重置密码成功！'));
        }
        exit;
    }

    /**
     * 修改用户薄荷名
     * baikeliang
     */
    public function modifyMintName(){
        $id = session('userId');
        if(!$id){
            echo json_encode(array('code'=>0,'msg'=>'用户未登录！'));
            exit;
        }
        if(!IS_POST){
        	echo json_encode(array('code'=>0,'msg'=>'请使用post请求！'));
            exit;
        }
        $_POST['id']=$id;
        $mint_name = I('mint_name');
        if(!$mint_name){
        	echo json_encode(array('code'=>0,'msg'=>'缺少薄荷名！'));
            exit;
        }
        $model = D('User');
        if(isMobile($mint_name)){
        	echo json_encode(array('code'=>0,'msg'=>'薄荷名格式不对！'));
        	die;
        }
        $rs = $model->checkMintName($mint_name);
        if($rs){
        	echo json_encode(array('code'=>0,'msg'=>'薄荷名已被占用！'));
        	exit;
        }
        if($model->create(I('post.'),2)){
        	if($model->save() !== FALSE ){
            	$code=1;
        		$msg='修改成功！';
        	}else{
        		$code=0;
        		$msg=$model->getError();
        	}
        }else{
        	//表单验证失败
        	$code=0;
        	$msg=$model->getError();
        }
        echo json_encode(array('code'=>$code,'msg'=>$msg));
    }
    
    /**
	 * 验证短信验证码
	 * baikeliang
	 */
    public function checkVerify(){
    	$code=1;
        $msg='短信验证码正确！';
        $id = session('userId');
        if(!$id){
            echo json_encode(array('code'=>0,'msg'=>'用户未登录！'));
            exit;
        }
        if(!IS_POST){
            $code=0;
            $msg="请使用post请求！";
        }
        //验证参数是否完整
        if(!$account=I('post.account')){
        	$code=0;
        	$msg='手机号不能为空！';
        }
        if(!$verify=I('post.verify')){
        	$code=0;
        	$msg='缺少短信验证码！';
        }else{
        	//验证短信验证码是否正确
        	$verifyModel=D('Verify');
        	$verifyInfo=$verifyModel->checkVerify2($account,$verify);
        	if($verifyInfo['code']!=1){
        		$code=0;
        		$msg=$verifyInfo['msg'];
        	}
        }
    	//返回json数据
    	echo json_encode(array('code'=>$code,'msg'=>$msg));
    }
    
    /**
	 * 验证密码
	 * baikeliang
	 */
    public function checkPwd(){
    	$code=1;
        $msg='密码正确！';
        $id = session('userId');
        if(!$id){
        	$code=0;
        	$msg="用户未登录！";
        }
        if(!IS_POST){
            $code=0;
            $msg="请使用post请求！";
        }
        //验证参数是否完整
        if(!$password=I('post.password')){
        	$code=0;
        	$msg='密码不能为空！';
        }else{
        	$usermodel=M('User');
        	$userInfo=$usermodel->find($id);
        	if($userInfo['password']!=md5(md5($password))){
        		$code=0;
        		$msg='密码不正确！';
        	}
        }
    	//返回json数据
    	echo json_encode(array('code'=>$code,'msg'=>$msg));
    }

    /**
     * 修改用户手机号
     * baikeliang
     */
    public function modifyAccount(){
        $id = session('userId');
        if(!$id){
            echo json_encode(array('code'=>0,'msg'=>'用户未登录！'));
            exit;
        }
        if(!IS_POST){
        	echo json_encode(array('code'=>0,'msg'=>'请使用post请求！'));
            exit;
        }
        $_POST['id']=$id;
        $account = I('account');
        $verify = I('verify');
        $password = I('password');
        $new_account = I('new_account');
        if(!$verify && !$password){
        	echo json_encode(array('code'=>0,'msg'=>'缺少短信验证码或者密码！'));
        	exit;
        }
        if(!$new_account){
        	echo json_encode(array('code'=>0,'msg'=>'缺少新手机号！'));
            exit;
        }
        $model = D('User');
        $rs = $model->checkUser($new_account);
        if(!$rs){
        	echo json_encode(array('code'=>0,'msg'=>'新手机号已被占用！'));
        	exit;
        }
        //验证短信
        if($verify){
        	if(!$account){
        		echo json_encode(array('code'=>0,'msg'=>'手机号不能为空！'));
        		exit;
        	}
        	//验证短信验证码是否正确
        	$verifyModel=D('Verify');
        	$verifyInfo=$verifyModel->checkVerify($account,$verify);
        	if($verifyInfo['code']!=1){
        		echo json_encode(array('code'=>0,'msg'=>$verifyInfo['msg']));
        		exit;
        	}
        }
        //验证密码
        if($password){
	        $userInfo=$model->find($id);
	        if($userInfo['password']!=md5(md5($password))){
	        	echo json_encode(array('code'=>0,'msg'=>'密码不正确！'));
	        	exit;
	        }
        }
        //修改手机号
        $where['id']=$id;
        $data['account']=$new_account;
        $result=$model->where($where)->save($data);
        
    	if($result !== FALSE ){
            $code=1;
        	$msg='修改成功！';
        }else{
        	$code=0;
        	$msg=$model->getError();
        }
        echo json_encode(array('code'=>$code,'msg'=>$msg));
        exit;
    }

	/**
	 * 退出功能
	 * baikeliang
	 */
	public function logout(){
		// 清空数据库的登录标示user_token
        $usermodel=M('User');
        $id = session('userId');
        if(!$id){
            echo json_encode(array('code'=>0,'msg'=>'用户未登录！'));
            exit;
        }
        $data['id']=$id;
        $data['user_token']='';
        $rs = $usermodel->save($data);
        if($rs){
			// 清空session
			session('userId', null);
			session('userName', null);
			session('identityId', null);
			//session('openid', null);
			//session('nickname', null);
			//session('headimgurl', null);
			//返回json数据
			echo json_encode(array('code'=>1,'msg'=>'退出成功！'));
        }else{
        	echo json_encode(array('code'=>0,'msg'=>'退出失败！'));
        }
        exit;
	}
}