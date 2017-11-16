<?php
namespace Admin\Controller;
use Admin\Controller;
//use Think\Controller;
class AppController extends BaseController {
	//权限列表
    public function index(){
    	$model=D('App');
    	if(I('app_name')){
    		$where['app_name']=array('LIKE','%'.urldecode(I('app_name')).'%');
    	}
    	$data=$model->field('id,app_name,app_uri,app_url,parent_id')->where($where)->order('sort')->select();
    	//组合返回数组
    	foreach ($data as $kye => $value){
    		if($value['parent_id']==0){
				$value['children']=array();
    			foreach ($data as $k => $v){
    				if($value['id']==$v['parent_id']){
    					$value['children'][]=$v;
    				}
    			}
    			$data1[]=$value;
    		}
    	}
        if($data1){
        	$code=1;
        	$msg='查询成功！';
        }elseif($data){
        	$code=1;
        	$msg='查询成功！';
	        foreach ($data as $kye => $value){
	        	$value['children']=array();
	        	$data1[]=$value;
	    	}
        }else{
        	$code=1;
        	$msg='没有数据！';
        }
        echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$data1));
    }

    //返回所有顶级权限
    public function top(){
        $model=D('App');
        $data=$model->field('id,app_name')->where('parent_id=0')->order('sort')->select();
        if($data){
            $code=1;
            $msg='查询成功！';
        }else{
            $code=1;
            $msg='没有数据！';
        }
        echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$data));
    }

    //添加权限
    public function add(){
    	if(IS_POST){
    		$model=D('App');
    		$rs = $model->checkApp(I('app_name'));;
    		if(!$rs){
    			$code=0;
    			$msg='权限已存在！';
    			echo json_encode(array('code'=>$code,'msg'=>$msg));
    			exit;
    		}
            $_POST['create_time']=time();
    		if($model->create(I('post.'),1)){
    			//收集数据成功
    			if($model->add()){
                    $code=1;
    				$msg='添加成功！';
    			}else{
    				$code=0;
    				$msg=$model->getError();
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

    //删除权限
    public function delete(){
    	$id=I('app_id');
    	if(!$id){
    		echo json_encode(array('code'=>0,'msg'=>'缺少权限id！'));
    		exit;
    	}
    	$model=D('App');
    	if($model->delete($id) !== FALSE){
            $code=1;
    		$msg='删除成功！';
		}else{
			$code=0;
    		$msg=$model->getError();
		}
		echo json_encode(array('code'=>$code,'msg'=>$msg));
    }

    //编辑权限
    public function save(){
    	$id = I('post.app_id');
    	if(!$id){
    		echo json_encode(array('code'=>0,'msg'=>'缺少权限id！'));
    		exit;
    	}
    	$model = D('App');
    	if(IS_POST){
    		$_POST['id']=$id;
			if($model->create(I('post.'),2)){
				if(FALSE !== $model->save()){
					$code=1;
    				$msg='修改成功！';
				}else{
					$code=0;
    				$msg=$model->getError();
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

    //返回单个权限信息
    public function getOne(){
    	$id = I('app_id');
    	if(!$id){
    		echo json_encode(array('code'=>0,'msg'=>'缺少权限id！'));
    		exit;
    	}
    	$model = D('App');
    	$data=$model->field('id,app_name,app_uri,app_url,parent_id,sort')->where("id=$id")->find();
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