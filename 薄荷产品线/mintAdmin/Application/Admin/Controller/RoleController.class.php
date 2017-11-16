<?php
namespace Admin\Controller;
use Admin\Controller;
class RoleController extends BaseController {
	//角色列表
    public function index(){
        $model=D('Role');
        if(I('role_name')){
        	$where['role_name']=array('LIKE','%'.urldecode(I('role_name')).'%');
        }
        $data=$model->where($where)->select();
        if($data){
            $code=1;
            $msg='查询成功！';
        }else{
            $code=1;
            $msg='没有数据！';
        }
        echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$data));
    }
    
    //获取所有权限信息
    public function getAllApp(){
    	$model=D('App');
    	$applst=$model->field('id,app_name,app_uri,app_url,parent_id')->order('sort')->select();
    	//组合返回数组
    	foreach ($applst as $kye => $value){
    		if($value['parent_id']==0){
    			$value['children']=array();
    			foreach ($applst as $k => $v){
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
    	}else{
    		$code=1;
    		$msg='没有数据！';
    	}
    	echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$data1));
    }

    //添加角色
    public function add(){
        if(IS_POST){
            $model=D('Role');
    		$rs = $model->checkRole(I('role_name'));
    		if(!$rs){
    			$code=0;
    			$msg='角色已存在！';
    			echo json_encode(array('code'=>$code,'msg'=>$msg));
    			exit;
    		}
            if($model->create(I('post.'),1)){
                //收集数据成功
            	$result = $model->add();
                if($result){
                	//修改角色权限
                	if($model->saveApp($result)){
		            	$code=1;
		                $msg='添加成功！';
                	}else{
                		$code=0;
                		$msg=$model->getError();
                	}
                }else{
                    $code=0;
                    $msg='添加角色失败！';
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

    //删除角色
    public function delete(){
        $id=I('role_id');
        if(!$id){
            echo json_encode(array('code'=>0,'msg'=>'缺少角色id！'));
            exit;
        }
        $model=D('Role');
        if($model->delete($id) !== FALSE){
            $code=1;
            $msg='删除成功！';
        }else{
            $code=0;
            $msg=$model->getError();
        }
        echo json_encode(array('code'=>$code,'msg'=>$msg));
    }

    //编辑角色
    public function save(){
        $id = I('post.role_id');
        if(!$id){
            echo json_encode(array('code'=>0,'msg'=>'缺少角色id！'));
            exit;
        }
        $model = D('Role');
        if(IS_POST){
            $_POST['id']=$id;
            if($model->create(I('post.'),2)){
                if(FALSE !== $model->save()){
                	//修改角色权限
                	if($model->saveApp($id)){
                		$code=1;
                		$msg='修改成功！';
                	}else{
                		$code=0;
                		$msg=$model->getError();
                	}
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

    //返回单个角色信息
    public function getOne(){
        $id = I('role_id');
        if(!$id){
            echo json_encode(array('code'=>0,'msg'=>'缺少角色id！'));
            exit;
        }
        //获取角色基本信息
        $model = D('Role');
        $data=$model->where("id=$id")->find();
        if($data){
        	$code=1;
        	$msg='查询成功！';
        }else{
        	$code=0;
        	$msg='没有数据！';
        }
        if($code){
	        //获取角色权限信息
	        $appmodel=D('App');
	        $roleappmodel=M('RoleApp');
	        //获取所有权限
	        $applst=$appmodel->field('id,app_name,app_uri,app_url,parent_id')->order('sort')->select();
	        if(!$applst){
	        	echo json_encode(array('code'=>0,'msg'=>'没有权限信息！'));
	        	exit;
	        }
	        //获取当前角色的所有权限id一维数组
	        $appids=$roleappmodel->field('GROUP_CONCAT(app_id) as app_id')->where('role_id='.$id)->find();
	        if($appids){
	        	$arr=explode( ',', $appids['app_id'] );
	        }else{
	        	$arr=array();
	        }
	        //遍历所有权限数组，判断该权限此角色是否拥有
	        foreach ($applst as $key => $value) {
	        	if(in_array($value['id'], $arr)){
	        		$applst[$key]['have']=1;
	        	}else{
	        		$applst[$key]['have']=0;
	        	}
	        }
	        //组合返回数组
	        foreach ($applst as $kye => $value){
	        	if($value['parent_id']==0){
	        		$value['children']=array();
	        		foreach ($applst as $k => $v){
	        			if($value['id']==$v['parent_id']){
	        				$value['children'][]=$v;
	        			}
	        		}
	        		$data1[]=$value;
	        	}
	        }
        }
        echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$data,'app'=>$data1));
    }
}