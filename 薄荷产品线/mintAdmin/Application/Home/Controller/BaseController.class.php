<?php
namespace Home\Controller;
use Think\Controller;
class BaseController extends Controller {
	
	public function __construct(){
		// 先调用父类的构造函数
		parent::__construct();
		$code=0;
		$data='';
		//return;
		//判断用户是否登录
		if(!session('userId')){
			$msg='没有登录！';
			echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$data));
			exit;
		}
	}
}