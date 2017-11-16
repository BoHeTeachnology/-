<?php
namespace Admin\Controller;
use Admin\Controller;

class TemplateController extends BaseController {
	
	public function __construct(){
		// 先调用父类的构造函数
		//parent::__construct();
		//post数据转换
		if(IS_POST){
			$str=file_get_contents('php://input');
			$arr=json_decode($str,true);
			foreach ($arr as $key => $value) {
				$_POST[$key]=$value;
			}
		}
	}
	
	//病历分类列表
    public function catList(){
        $model=D('Casecat');
        $data=$model->where($where)->order('parent_id asc,id asc')->select();
        $arr1 = $arr2 = $arr3 = $arr4 = $arr5 = $arr6 = $arr1_k = array();
        if($data){
            foreach ($data as $key => $value) {
                //$data[$key]['create_time']=date('Y-m-d',$value['create_time']);
               	if($value['parent_id']==0){
               		$arr1[$value['id']] = $value;
               		$arr1_k[] = $value['id'];
               	}elseif(in_array($value['parent_id'],$arr1_k)){
               		$arr2[$value['id']] = $value;
               		if($arr1[$value['parent_id']]['relations']){
               			array_push($arr1[$value['parent_id']]['relations'],$value['id']);
               		}else{
               			$arr1[$value['parent_id']]['relations']=array($value['id']);
               		}
               	}else{
               		$arr3[$value['id']] = $value;
               		if($arr2[$value['parent_id']]['relations']){
               			array_push($arr2[$value['parent_id']]['relations'],$value['id']);
               		}else{
               			$arr2[$value['parent_id']]['relations']=array($value['id']);
               		}
               	}
            }
            foreach ($arr1 as $v1){
            	$arr4[] = $v1;
            }
            foreach ($arr2 as $v2){
            	$arr5[] = $v2;
            }
            foreach ($arr3 as $v3){
            	$arr6[] = $v3;
            }
            $code=1;
            $msg='查询成功！';
        }else{
            $code=1;
            $msg='没有数据！';
        }
        echo json_encode(array('code'=>$code,'msg'=>$msg,'projects'=>$arr4,'categorys'=>$arr5,'subcategorys'=>$arr6));
    }

    //添加病历分类
    public function addCat(){
        if(IS_POST){
            $model=D('Casecat');
    		$rs = $model->checkCasecat(I('cat_name'));;
    		if($rs){
    			$code=0;
    			$msg='分类名称已存在！';
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
                    $msg='添加病历分类失败！';
                }
            }else{
                $code=0;
                $msg=$model->getError();
            }
        }else{
            $code=0;
            $msg='请使用POST请求！';
        }
        echo json_encode(array('code'=>$code,'msg'=>$msg,'id'=>$result));
    }

    //删除服务项目
    public function deleteCat(){
        $id=I('id');
        if(!$id){
            echo json_encode(array('code'=>0,'msg'=>'缺少病历分类id！'));
            exit;
        }
        $model=D('Casecat');
        if($model->delete($id) !== FALSE){
            $code=1;
            $msg='删除成功！';
        }else{
            $code=0;
            $msg=$model->getError();
        }
        echo json_encode(array('code'=>$code,'msg'=>$msg));
    }

    //编辑病历分类
    public function saveCat(){
        $id = I('post.id');
        if(!$id){
            echo json_encode(array('code'=>0,'msg'=>'缺少病历分类id！'));
            exit;
        }
        $model = D('Casecat');
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

    //返回单个病历分类信息
    public function getOneCat(){
        $id = I('id');
        if(!$id){
            echo json_encode(array('code'=>0,'msg'=>'缺少病历分类id！'));
            exit;
        }
        //获取服务项目基本信息
        $model = D('Casecat');
        $data=$model->where("id=".$id)->find();
        if($data){
            $data['create_time']=date('Y-m-d',$data['create_time']);
        	$code=1;
        	$msg='查询成功！';
        }else{
        	$code=0;
        	$msg='没有数据！';
        }

        echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$data));
    }

    //添加病历模板
    public function addTemplate(){
    	if(IS_POST){
    		$template_id = I('template_id');
    		$model=D('Template');
        	$where['template_id']=array('EQ',$template_id);
    		$data=$model->where($where)->find();
    		if($data){
    			echo json_encode(array('code'=>0,'msg'=>'该病例模板已存在！'));
    			exit;
    		}
    		
    		$_POST['create_time']=time();
    		/*$content = '{';
    		foreach($_POST['content'] as $k=>$v ){
    			
    			$content.='"'.$k.'":"'.$v.'",';
    		}
    		$content = substr($content,0,-1);
    		$content .= '}';
    		$_POST['content']=$content;*/
    		$_POST['content']=json_encode($_POST['content']);
    		if($model->create(I('post.'),1)){
    			//收集数据成功
    			$result = $model->add();
    			if($result){
    				$code=1;
    				$msg='添加病历模板成功！';
    			}else{
    				$code=0;
    				$msg='添加病历模板失败！';
    			}
    		}else{
    			$code=0;
    			$msg=$model->getError();
    		}
    	}else{
    		$code=0;
    		$msg='请使用POST请求！';
    	}
    	echo json_encode(array('code'=>$code,'msg'=>$msg,'id'=>$result));
    }
    
    //删除病历模板
    public function deleteTemplate(){
    	$template_id = I('template_id');
    	if(!$template_id){
    		echo json_encode(array('code'=>0,'msg'=>'缺少病历模板id！'));
    		exit;
    	}
    	$model=D('Template');
        $where['template_id']=array('EQ',$template_id);
    	if($model->where($where)->delete() !== FALSE){
    		$code=1;
    		$msg='删除成功！';
    	}else{
    		$code=0;
    		$msg=$model->getError();
    	}
    	echo json_encode(array('code'=>$code,'msg'=>$msg));
    }
    
    //编辑病历模板
    public function saveTemplate(){
    	$template_id = I('template_id');
    	if(!$template_id){
    		echo json_encode(array('code'=>0,'msg'=>'缺少病历模板id！'));
    		exit;
    	}
    	$model = D('Template');
        $where['template_id']=array('EQ',$template_id);
        $data = $model->where($where)->find();
        if(!$data){
        	echo json_encode(array('code'=>0,'msg'=>'病历模板id不存在！'));
        	exit;
        }
    	if(IS_POST){
    		/*$content = '{';
    		foreach($_POST['content'] as $k=>$v ){
    			
    			$content.='"'.$k.'":"'.$v.'",';
    		}
    		$content = substr($content,0,-1);
    		$content .= '}';
    		$_POST['content']=$content;*/
    		$_POST['content']=json_encode($_POST['content']);
    		if($model->create(I('post.'),2)){
    			if(FALSE !== $model->where($where)->save()){
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
    
    //返回单个病历模板信息
    public function getOneTemplate(){
    	$template_id = I('template_id');
    	if(!$template_id){
    		echo json_encode(array('code'=>0,'msg'=>'缺少病历模板id！'));
    		exit;
    	}
    	$model = D('Template');
        $where['template_id']=array('EQ',$template_id);
    	$data=$model->where($where)->find();
    	if($data){
    		$data['create_time']=date('Y-m-d',$data['create_time']);
    		$data['content']=htmlspecialchars_decode($data['content']);
    		echo '{"code": 1,"msg": "查询成功！","id": '.$data['id'].',"type": "'.$data['type'].'","template_id": "'.$data['template_id'].'","content": '.htmlspecialchars_decode($data['content']).',"create_time": "'.$data['create_time'].'"}';
    	}else{
    		$code=2;
    		$msg='没有数据！';
    		echo json_encode(array('code'=>2,'msg'=>'没有数据！'));
    	}
    	//echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$data));
    }
    
}