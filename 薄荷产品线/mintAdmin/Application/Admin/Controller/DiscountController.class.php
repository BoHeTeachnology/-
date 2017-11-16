<?php
namespace Admin\Controller;
use Admin\Controller;
class DiscountController extends BaseController {
    
    /**
     * 折扣列表
     * baikeliang
     * 2017-3-22
     */
    public function index(){
        $model=D('Discount');
        if(I('discount')){
        	$where['discount']=array('LIKE','%'.I('discount').'%');
        }
        $data=$model->field('id,discount,is_use,sort,create_time')->where($where)->order('sort')->select();
        if($data){
            $code=1;
            $msg='查询成功！';
            foreach ($data as $key => $value) {
            	$data[$key]['create_time']=date('Y-m-d',$value['create_time']);
            }
        }else{
            $code=0;
            $msg='没有数据！';
        }
        echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$data));
    }

    /**
     * 添加折扣
     * baikeliang
     * 2017-3-22
     */
    public function add(){
        if(IS_POST){
        	$discount=I('discount');
            $model=D('Discount');
    		$rs = $model->checkDiscount($discount);
    		if($rs){
    			echo json_encode(array('code'=>0,'msg'=>'该折扣已存在！'));
    			exit;
    		}
            $_POST['create_time']=time();
            if($model->create(I('post.'),1)){
                //收集数据成功
            	$result = $model->add();
                if($result){
	            	$code=1;
	                $msg='添加成功！';
                }else{
                    $code=0;
                    $msg='添加失败！';
                }
            }else{
                $code=0;
                $msg=$model->getError();
            }
        }else{
            $code=0;
            $msg='请使用POST请求！';
        }
        echo json_encode(array('code'=>$code,'msg'=>$msg));
    }

    /**
     * 删除折扣
     * baikeliang
     * 2017-3-22
     */
    public function delete(){
        $id=I('id');
        if(!$id){
            echo json_encode(array('code'=>0,'msg'=>'缺少折扣id！'));
            exit;
        }
        $model=D('Discount');
        if($model->delete($id) !== FALSE){
            $code=1;
            $msg='删除成功！';
        }else{
            $code=0;
            $msg=$model->getError();
        }
        echo json_encode(array('code'=>$code,'msg'=>$msg));
    }

    /**
     * 编辑折扣
     * baikeliang
     * 2017-3-22
     */
    public function save(){
        $id=I('id');
        if(!$id){
            echo json_encode(array('code'=>0,'msg'=>'缺少折扣id！'));
            exit;
        }
        if(IS_POST){
        	$discount=I('discount');
            $model=D('Discount');
    		$rs = $model->checkDiscount($discount,$id);
    		if($rs){
    			echo json_encode(array('code'=>0,'msg'=>'该折扣已存在！'));
    			exit;
    		}
            $_POST['edit_time']=time();
            if($model->create(I('post.'),2)){
                if(FALSE !== $model->save()){
                	$code=1;
                	$msg='修改成功！';
                }else{
                    $code=0;
                    $msg='修改失败！';
                }
            }else{
                $code=0;
                $msg=$model->getError();
            }
        }else{
            $code=0;
            $msg='请使用POST请求！';
        }
        echo json_encode(array('code'=>$code,'msg'=>$msg));
    }

    /**
     * 返回单个折扣信息
     * baikeliang
     * 2017-3-22
     */
    public function getOne(){
        $id=I('id');
        if(!$id){
            echo json_encode(array('code'=>0,'msg'=>'缺少折扣id！'));
            exit;
        }
        //获取角色基本信息
        $model = D('Discount');
        $data=$model->where("id=".$id)->find();
        if($data){
        	$code=1;
        	$msg='查询成功！';
        	$data['create_time']=date('Y-m-d',$data['create_time']);
        }else{
        	$code=0;
        	$msg='没有数据！';
        }
        echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$data));
    }
}