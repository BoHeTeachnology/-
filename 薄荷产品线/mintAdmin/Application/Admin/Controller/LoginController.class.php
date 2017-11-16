<?php
namespace Admin\Controller;
use \Think\Controller;

class LoginController extends Controller {

	//登录
	public function login(){
		$code=1;
		if(!IS_POST){
			$code=0;
			$msg="请使用post请求！";
		}else{
			//验证参数是否完整
			if(!I('post.account')){
				$code=0;
				$msg='手机号不能为空！';
			}
			if(!I('post.password')){
				$code=0;
				$msg='密码不能为空！';
			}
			// 接收表单并且使用登录的规则验证表单
			if($code){
				$model = D('User');
				if($model->login()){
					$msg='登录成功！';
					//if(I('post.account')=='admin'){
						//$url='/ydadmin/html/progress/progress.html#Track';
					//}else{
						$where['a.account'] = I('post.account');
						$where['c.app_url'] = array('NEQ','');
						$arr=$model->field('c.app_url')->alias('a')->join(C('DB_PREFIX').'role_app b on a.role_id=b.role_id')->join(C('DB_PREFIX').'app c on b.app_id=c.id')->where($where)->order('c.parent_id,c.sort')->find();
						$url = $arr['app_url'];
					//}
				}else{
					//登录验证失败
					$code=0;
					$msg=$model->getError();
				}
			}
		}
		//返回json数据
		echo json_encode(array('code'=>$code,'msg'=>$msg,'url'=>$url));
	}

	//退出
	public function logOut(){
		// 清空session
		session('userId', null);
		session('userName', null);
		//返回json数据
		$code=1;
		$msg='退出成功！';
		echo json_encode(array('code'=>$code,'msg'=>$msg));
	}
}