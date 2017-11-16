<?php
namespace Admin\Controller;
use Think\Controller;
class BaseController extends Controller {
	
	public function __construct(){
		// 先调用父类的构造函数
		parent::__construct();
		//return;
		$code=0;
		$data='';
		//判断用户是否登录
		if(!session('userId')){
			$msg='没有登录！';
			echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$data));
			exit;
		}
		//判断用户是否有访问权限
		$pris=$this->getPri(session('userId'));
		if(!in_array(CONTROLLER_NAME, $pris) && session('userName')!='admin'){
			$msg='无权访问！';
			echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$data));
			exit;
		}
	}

	//获取用户的权限
	private function getPri($id){
		$where['a.id']=$id;
		$usermodel=M('User');
		$pris=$usermodel->field('c.app_uri as uri')->alias('a')->join('left join '.C('DB_PREFIX').'role_app b on a.role_id=b.role_id')->join(C('DB_PREFIX').'app c on b.app_id=c.id')->where($where)->select();
		//处理数组
		$arr=array();
		foreach ($pris as $key => $value) {
			$arr[]=$value['uri'];
		}
		return $arr;
	}
}