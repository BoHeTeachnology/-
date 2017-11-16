<?php
namespace Admin\Controller;
use Admin\Controller;
//管理员控制器
class AdsetController extends BaseController {
    //管理员列表
    public function index(){
        $usermodel=D('User');
        if(I('account')){
        	$where['account']=array('LIKE','%'.I('account').'%');
        }
        if(I('name')){
        	$where['name']=array('LIKE','%'.urldecode(I('name')).'%');
        }
        if(I('sex')){
        	$where['sex']=array('EQ',I('sex'));
        }
        if(I('phone')){
        	$where['phone']=array('LIKE','%'.I('phone').'%');
        }
        if(I('identity_id')){
        	$where['identity_id']=array('EQ',I('identity_id'));
        }
        //获取当前页和每页显示数量
        $page=I('post.p')?I('post.p'):1;
        $p_len=I('post.p_len')?I('post.p_len'):10;
        $start=($page-1)*$p_len;
        
        $count=$usermodel->where($where)->count();
        $data=$usermodel->field('a.*,b.role_name')->alias('a')->join('left join '.C('DB_PREFIX').'role as b on a.role_id=b.id')->where($where)->limit($start.','.$p_len)->order('a.id desc')->select();
        //$usercount=$usermodel->count();//总用户
        if($data){
            $code=1;
            $msg='查询成功！';
        }else{
            $code=1;
            $msg='没有数据！';
        }
        echo json_encode(array('code'=>$code,'msg'=>$msg,'count'=>(int)$count,'data'=>$data));
    }

    //验证用户名是否存在
    public function checkUser(){
        $model=D('User');
        $res=$model->checkUser(I('account'));
        if($res){
            $code=1;
            $msg='用户名可用！';
        }else{
            $code=0;
            $msg='用户已存在！';
        }
        echo json_encode(array('code'=>$code,'msg'=>$msg));
    }

    //角色列表
    public function roleList(){
        $model=D('Role');
        $data=$model->select();
        if($data){
            $code=1;
            $msg='查询成功！';
        }else{
            $code=1;
            $msg='没有数据！';
        }
        echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$data));
    }
    
    //添加用户
    public function add(){
    	$code=1;
        if(!IS_POST){
            $code=0;
            $msg="请使用post请求！";
        }else{
        	$account = I('account');
            $model = D('User');
        	$rs = $model->checkUser(I('account'));;
        	if(!$rs){
        		$code=0;
        		$msg='用户已存在！';
        	}
            if(!I('post.password')){
                $code=0;
                $msg='密码不能为空';
            }
            $_POST['create_time']=time();
            $_POST['password']=md5(md5($_POST['password']));
            $_POST['real_name']=$_POST['name'];
            //处理生日
            if($_POST['birth']){
                $arr=explode('-', $_POST['birth']);
                $_POST['birthyear']=$arr['0'];
                $_POST['birthmonth']=$arr['1'];
                $_POST['birthday']=$arr['2'];
            }
            //处理标签
            if($_POST['label']&&$_POST['label_id']){
                $_POST['label']=','.implode(',', $_POST['label']).',';
                $_POST['label_id']=implode(',', $_POST['label_id']);
            }
            // 接收表单并且使用登录的规则验证表单
            if($code){
                if($model->create(I('post.'),1)){
                	if($model->add()){
                		$msg='添加成功!';
                	}else{
                		$code=0;
                		$msg=$model->getError();
                	}
                }else{
                    $code=0;
                    $msg=$model->getError();
                }
            }
        }
    	//返回json数据
    	echo json_encode(array('code'=>$code,'msg'=>$msg));
    }

    //删除用户
    public function delete(){
        $id=I('user_id');
        if(!$id){
            echo json_encode(array('code'=>0,'msg'=>'缺少用户id！'));
            exit;
        }
        $model=D('User');
        if($model->delete($id) !== FALSE){
        	$code=1;
        	$msg='删除成功！';
        }else{
        	$code=0;
        	$msg=$model->getError();
        }
        echo json_encode(array('code'=>$code,'msg'=>$msg));
    }

    //修改用户
    public function save(){
        $code=1;
        if(!IS_POST){
            $code=0;
            $msg="请使用post请求！";
        }else{
        	$id=I('id');
        	if(!$id){
        		echo json_encode(array('code'=>0,'msg'=>'缺少用户id！'));
        		exit;
        	}
        	$_POST['id']=$id;
            $_POST['real_name']=$_POST['name'];
            //如果密码为空则不修改密码
            if(!I('post.password')){
                unset($_POST['password']);
            }else{
                $_POST['password']=md5(md5($_POST['password']));
            }
            //处理生日
            if($_POST['birth']){
                $arr=explode('-', $_POST['birth']);
                $_POST['birthyear']=$arr['0'];
                $_POST['birthmonth']=$arr['1'];
                $_POST['birthday']=$arr['2'];
            }
            //处理标签
            if($_POST['label']&&$_POST['label_id']){
                $_POST['label']=','.implode(',', $_POST['label']).',';
                $_POST['label_id']=implode(',', $_POST['label_id']);
            }
            $model = D('User');
            // 接收表单并且使用登录的规则验证表单
            if($code){
                if($model->create(I('post.'),1)){
                    if($model->save() !== FALSE ){
                        $msg='修改成功！';
                    }else{
                        $code=0;
                        $msg=$model->getError();
                    }        
                }else{
                    //表单验证失败
                    $code=0;
                    $msg=$model->getError();
                }
            }
        }
        //返回json数据
        echo json_encode(array('code'=>$code,'msg'=>$msg));
    }

    //返回单个用户信息
    public function getOne(){
        $id = I('user_id');
        if(!$id){
            echo json_encode(array('code'=>0,'msg'=>'缺少用户id！'));
            exit;
        }
        $model = D('User');
        $data=$model->field('password,openid,user_token',true)->where("id=$id")->find();
        if($data){
            //处理标签
            $data['label_id']=explode(',', $data['label_id']);
            $code=1;
            $msg='查询成功！';
        }else{
            $code=0;
            $msg='没有数据！';
        }
        echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$data));
    }

    //添加标签
    public function addTag(){
        $code=1;
        if(!IS_POST){
            $code=0;
            $msg="请使用post请求！";
        }else{
            if(!I('post.tag_name')){
                $code=0;
                $msg="缺少标签名称！";
            }
            $_POST['type']=1;
            // 接收表单并且使用登录的规则验证表单
            if($code){
                $model=D('Tag');
                if($model->create(I('post.'),1)){
                    if($model->add()){
                        $msg='添加成功!';
                    }else{
                        $code=0;
                        $msg=$model->getError();
                    }
                }else{
                    $code=0;
                    $msg=$model->getError();
                }
            }
        }
        //返回json数据
        echo json_encode(array('code'=>$code,'msg'=>$msg));
    }

    //查询所有标签
    public function tagLst(){
        $model=D('Tag');
        $data=$model->where('type=1')->select();
        if($data){
            $code=1;
            $msg='成功';
        }else{
            $code=1;
            $msg='没有数据';
        }
        //返回json数据
        echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$data));
    }
}