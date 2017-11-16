<?php
namespace Admin\Controller;
use Admin\Controller;
class CategoryController extends BaseController {
	//项目分类列表
    public function index(){
        $model=D('Category');
        if(I('cat_name')){
        	$where['cat_name']=array('LIKE','%'.urldecode(I('cat_name')).'%');
        }
        $where['belong']=array('EQ',1);
        $doctor_data=$model->where($where)->order('`order`')->select();
        if($doctor_data){
            foreach ($doctor_data as $key => $value) {
                $doctor_data[$key]['create_time']=date('Y-m-d',$value['create_time']);
            }
        }
        $where['belong']=array('EQ',2);
        $patient_data=$model->where($where)->order('`order`')->select();
        if($patient_data){
            foreach ($patient_data as $key => $value) {
                $patient_data[$key]['create_time']=date('Y-m-d',$value['create_time']);
            }
        }
        $code=1;
        $msg='查询成功！';
        echo json_encode(array('code'=>$code,'msg'=>$msg,'doctor_data'=>$doctor_data,'patient_data'=>$patient_data));
    }

    //添加项目分类
    public function add(){
        if(IS_POST){
            $model=D('Category');
    		$rs = $model->checkCat(I('cat_name'),I('belong'));
    		if($rs){
    			$code=0;
    			$msg='项目分类已存在！';
    			echo json_encode(array('code'=>$code,'msg'=>$msg));
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
                    $msg='添加项目分类失败！';
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

    //删除项目分类
    public function delete(){
        $id=I('cat_id');
        if(!$id){
            echo json_encode(array('code'=>0,'msg'=>'缺少项目分类id！'));
            exit;
        }
        $model=D('Category');
        if($model->delete($id) !== FALSE){
            $code=1;
            $msg='删除成功！';
        }else{
            $code=0;
            $msg=$model->getError();
        }
        echo json_encode(array('code'=>$code,'msg'=>$msg));
    }

    //编辑项目分类
    public function save(){
        $id = I('post.id');
        if(!$id){
            echo json_encode(array('code'=>0,'msg'=>'缺少项目分类id！'));
            exit;
        }
        $model = D('Category');
    	$rs = $model->checkCat(I('cat_name'),I('belong'),$id);
    	if($rs){
    		$code=0;
    		$msg='项目分类已存在！';
    		echo json_encode(array('code'=>$code,'msg'=>$msg));
    		exit;
    	}
        if(IS_POST){
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

    //返回单个项目分类信息
    public function getOne(){
        $id = I('cat_id');
        if(!$id){
            echo json_encode(array('code'=>0,'msg'=>'缺少项目分类id！'));
            exit;
        }
        //获取项目分类基本信息
        $model = D('Category');
        $data=$model->where("id=$id")->find();
        if($data){
        	$code=1;
        	$msg='查询成功！';
        }else{
        	$code=0;
        	$msg='没有数据！';
        }

        echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$data));
    }
}