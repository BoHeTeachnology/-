<?php
namespace Admin\Controller;
use Admin\Controller;
class ProjectController extends BaseController {
	//项目列表
    public function index(){
        $model=D('Project');
        if(I('project_name')){
        	$where['a.project_name']=array('LIKE','%'.urldecode(I('project_name')).'%');
        }
        if(I('price')){
        	$where['a.price']=array('EQ',I('price'));
        }
        if(I('cat_name')){
        	$where['b.cat_name|c.cat_name']=array('LIKE','%'.urldecode(I('cat_name')).'%');
        }
        //获取当前页和每页显示数量
        $page=I('post.p')?I('post.p'):1;
        $p_len=I('post.p_len')?I('post.p_len'):10;
        $start=($page-1)*$p_len;
        //查询数据
        $count=$model->alias('a')->field('a.*,b.cat_name,c.cat_name as u_cat_name')->join('left join mint_category as b on a.cat_id=b.id')->join('left join mint_category as c on a.cat_id1=c.id')->where($where)->count();
        $data=$model->alias('a')->field('a.*,b.cat_name,c.cat_name as u_cat_name')->join('left join mint_category as b on a.cat_id=b.id')->join('left join mint_category as c on a.cat_id1=c.id')->where($where)->limit($start.','.$p_len)->order('a.order asc')->select();
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

    //添加项目
    public function add(){
        if(IS_POST){
            $model=D('Project');
    		$rs = $model->checkProject(I('project_name'));
    		if($rs){
    			$code=0;
    			$msg='项目已存在！';
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
                    $msg='添加项目失败！';
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

    //删除项目
    public function delete(){
        $id=I('project_id');
        if(!$id){
            echo json_encode(array('code'=>0,'msg'=>'缺少项目id！'));
            exit;
        }
        $model=D('Project');
        if($model->delete($id) !== FALSE){
            $code=1;
            $msg='删除成功！';
        }else{
            $code=0;
            $msg=$model->getError();
        }
        echo json_encode(array('code'=>$code,'msg'=>$msg));
    }

    //编辑项目
    public function save(){
        $id = I('post.id');
        if(!$id){
            echo json_encode(array('code'=>0,'msg'=>'缺少项目id！'));
            exit;
        }
        $model = D('Project');
    	$rs = $model->checkProject(I('project_name'),$id);
    	if($rs){
    		$code=0;
    		$msg='项目已存在！';
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

    //返回单个项目信息
    public function getOne(){
        $id = I('project_id');
        if(!$id){
            echo json_encode(array('code'=>0,'msg'=>'缺少项目id！'));
            exit;
        }
        //获取项目基本信息
        $model = D('Project');
        $data=$model->alias('a')->field('a.*,b.cat_name,c.cat_name as u_cat_name')->join('left join mint_category as b on a.cat_id=b.id')->join('left join mint_category as c on a.cat_id1=c.id')->where("a.id=$id")->find();
        if($data){
        	$code=1;
        	$msg='查询成功！';
        }else{
        	$code=0;
        	$msg='没有数据！';
        }

        echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$data));
    }

    //项目分类列表
    public function catLst(){
        $belong=I('belong');
        if($belong!=2){
            $belong=1;
        }
        $model=D('Category');
        $where['belong']=array('EQ',$belong);
        $data=$model->where($where)->order('`order` asc')->select();
        if($data){
            $code=1;
            $msg='查询成功！';
        }else{
            $code=1;
            $msg='没有数据！';
        }
        echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$data));
    }
}