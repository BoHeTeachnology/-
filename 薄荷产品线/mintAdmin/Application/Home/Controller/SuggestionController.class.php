<?php
namespace Home\Controller;
use \Think\Controller;

class SuggestionController extends BaseController {
	//添加意见反馈
	public function add(){
		if(!IS_POST){
			$code=0;
			$msg="请使用post请求！";
		}else{
			$user_account=I('post.user_account');
			if(!$user_account){
				echo json_encode(array('code'=>0,'msg'=>'缺少用户账号！'));
				exit;
			}
			$content=I('post.content');
			if(!$content){
				echo json_encode(array('code'=>0,'msg'=>'缺少反馈内容！'));
				exit;
			}
			// 接收表单并且使用登录的规则验证表单
			$model = D('Suggestion');
			$_POST['create_time']=time();
			if($model->create()){
				if($model->add()){
					//添加成功
					$code=1;
					$msg='反馈成功！';
				}else{
					//登录验证失败
					$code=0;
					$msg='反馈失败!';
				}
			}else{
				//表单验证失败
				$code=0;
				$msg=$model->getError();
			}
		}
		//返回json数据
		echo json_encode(array('code'=>$code,'msg'=>$msg));
	}
}