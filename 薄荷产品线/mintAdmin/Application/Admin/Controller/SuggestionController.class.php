<?php
namespace Admin\Controller;
use Admin\Controller;

class SuggestionController extends BaseController {

	//意见列表
	public function index(){
		$SuggestionModel=D('Suggestion');
		//获取搜索条件
		if(I('content')){
        	$where['a.content']=array('LIKE','%'.urldecode(I('content')).'%');
        }
        if(I('name')){
        	$where['b.name']=array('LIKE','%'.urldecode(I('name')).'%');
        }
		//获取当前页和每页显示数量
        $page=I('post.p')?I('post.p'):1;
        $p_len=I('post.p_len')?I('post.p_len'):10;
        $start=($page-1)*$p_len;
        //查询数据
        $count=$SuggestionModel->alias('a')->field('a.*,b.name,c.clinic_name')->join('left join mint_user as b on a.user_account=b.account')->join('left join mint_clinic as c on a.clinic_id=c.id')->where($where)->count();
        $data=$SuggestionModel->alias('a')->field('a.*,b.name,c.clinic_name')->join('left join mint_user as b on a.user_account=b.account')->join('left join mint_clinic as c on a.clinic_id=c.id')->where($where)->limit($start.','.$p_len)->order('a.id desc')->select();
        if($data){
        	foreach ($data as $key => $value) {
        		//处理时间
        		$data[$key]['create_time']=date('Y-m-d',$value['create_time']);
        	}
            $code=1;
            $msg='查询成功！';
        }else{
            $code=1;
            $msg='没有数据！';
        }

        echo json_encode(array('code'=>$code,'msg'=>$msg,'count'=>(int)$count,'data'=>$data));
	}

	//删除意见
	public function delete(){
		if(!$id=I('suggestion_id')){
			echo json_encode(array('code'=>0,'msg'=>'缺少意见id'));
			exit;
		}
		$model = D('Suggestion');
		if($model->delete($id)!==false){
			$code=1;
			$msg='删除成功！';
		}else{
			//登录验证失败
			$code=0;
			$msg='删除失败!';
		}

		//返回json数据
		echo json_encode(array('code'=>$code,'msg'=>$msg));
	}

	//获取单个意见
	public function getOne(){
		if(!$id=I('suggestion_id')){
			echo json_encode(array('code'=>0,'msg'=>'缺少意见id'));
			exit;
		}
		$model = D('Suggestion');
		$data=$model->find($id);
		if($data){
			$code=1;
			$msg='成功！';
		}else{
			//登录验证失败
			$code=0;
			$msg='失败!';
		}

		//返回json数据
		echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$data));
	}
}