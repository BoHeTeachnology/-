<?php
namespace Admin\Controller;
use Admin\Controller;

class AtorderController extends BaseController {

	//订单列表
	public function index(){
		$AtorderModel=D('Atorder');
		//获取搜索条件
		if(I('order_number')){
        	$where['order_number']=array('LIKE','%'.I('order_number').'%');
        }
		if(I('status')){
        	$where['status']=array('LIKE','%'.urldecode(I('status')).'%');
        }
        if(I('patient_name')){
        	$where['patient_name']=array('LIKE','%'.urldecode(I('patient_name')).'%');
        }
		//获取当前页和每页显示数量
        $page=I('post.p')?I('post.p'):1;
        $p_len=I('post.p_len')?I('post.p_len'):10;
        $start=($page-1)*$p_len;
        //查询数据
        $count=$AtorderModel->field('*')->where($where)->count();
        $data=$AtorderModel->field('*')->where($where)->limit($start.','.$p_len)->order('id desc')->select();
        if($data){
        	foreach ($data as $key => $value) {
        		//处理时间
        		$data[$key]['pay_time']=date('Y-m-d',$value['pay_time']);
        	}
            $code=1;
            $msg='查询成功！';
        }else{
            $code=1;
            $msg='没有数据！';
        }

        echo json_encode(array('code'=>$code,'msg'=>$msg,'count'=>(int)$count,'data'=>$data));
	}
}