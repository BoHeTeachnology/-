<?php
namespace Admin\Controller;
use Admin\Controller;
class UserController extends BaseController {
    //用户列表
    public function index(){
        $usermodel=D('User');
        if(I('account')){
        	//$where['account']=array('LIKE','%'.I('account').'%');
        	$where['account|phone']=array('LIKE','%'.I('account').'%');
        }
        if(I('name')){
        	$where['name']=array('LIKE','%'.urldecode(I('name')).'%');
        }
        if(I('real_name')){
        	$where['real_name']=array('LIKE','%'.urldecode(I('real_name')).'%');
        }
        if(I('sex')){
        	$where['sex']=array('EQ',I('sex'));
        }
        if(I('phone')){
        	$where['phone']=array('LIKE','%'.I('phone').'%');
        }
        if(I('company_name')){
        	$where['company_name']=array('LIKE',urldecode(I('company_name')));
        }
        if(I('hospital')){
        	$where['hospital']=array('LIKE',urldecode(I('hospital')));
        }
        if(I('county')){
        	$where['county']=array('EQ',urldecode(I('county')));
        }
        if(I('identity_id')){
        	$where['identity_id']=array('EQ',I('identity_id'));
        }
        //获取当前页和每页显示数量
        $page=I('post.p')?I('post.p'):1;
        $p_len=I('post.p_len')?I('post.p_len'):10;
        $start=($page-1)*$p_len;
        
        $count=$usermodel->where($where)->count();
        $data=$usermodel->field('password,user_token',true)->where($where)->limit($start.','.$p_len)->order('id desc')->select();
		//$usercount=$usermodel->count();//总用户
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
        //返回json数据
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
    	$user_id=0;
        if(!IS_POST){
            $code=0;
            $msg="请使用post请求！";
        }else{
        	$account = I('account');
            $model = D('User');
        	$rs = $model->checkUser(I('account'));
        	if(!$rs){
        		$code=0;
        		$msg='用户已存在！';
        	}
            if(!I('post.password')){
                $code=0;
                $msg='密码不能为空';
            }
            $_POST['password']=md5(md5($_POST['password']));
            $_POST['mint_name']=$model->createBh();
            $_POST['create_time']=time();
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
                	$user_id = $model->add();
                	if($user_id){
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
    	echo json_encode(array('code'=>$code,'msg'=>$msg,'user_id'=>$user_id,'mint_name'=>$_POST['mint_name']));
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
            $model = D('User');
        	$res1=$model->checkMintName(I('mint_name'),$id);
        	if($res1){
        		echo json_encode(array('code'=>0,'msg'=>'该薄荷名已存在！'));
        		exit;
        	}
        	if(I('account')){
	        	$res2=$model->checkAccount(I('account'),$id);
	        	if($res2){
	        		echo json_encode(array('code'=>0,'msg'=>'该手机号已存在！'));
	        		exit;
	        	}
        	}
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
            $user_info=$model->where("id=".$id)->find();
            if($user_info['is_own'] == 0 && I('account')){
            	$_POST['is_own']=1;
            	$_POST['up_time']=time();
            	/*if(!I('post.password')){
            		$_POST['password']=md5(md5(123456));
            	}*/
            }
            // 接收表单并且使用登录的规则验证表单
            if($code){
                if($model->create(I('post.'),2)){
                    if($model->save() !== FALSE ){
                        $msg='修改成功！';
                        if($user_info['phone']!=I('post.phone')){
                        	$data['phone'] = I('post.phone');
                        	$model->where('phone='.$user_info['phone'].' and is_own = 0')->save($data);
                        }
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
            $RecordModel=D('Record');
            $where['patient_id']=array('EQ',$id);
            $res=$RecordModel->field('id')->where($where)->find();
            if($res){
            	$record = 1;
            	$record_id = $res['id'];
            }else{
            	$record = $record_id = 0;
            }
            $code=1;
            $msg='查询成功！';
        }else{
            $code=0;
            $msg='没有数据！';
        }
        echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$data,'record'=>$record,'record_id'=>$record_id));
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

    //添加用户档案
    public function editArchives(){
        $user_id=I('post.user_id');
        if(!$user_id){
            echo json_encode(array('code'=>0,'msg'=>'缺少用户id！'));
            exit;
        }
        $content=I('post.content');
        if(!$content){
            echo json_encode(array('code'=>0,'msg'=>'缺少json内容数据！'));
            exit;
        }
        $type=I('post.type');
        if(!$type){
            echo json_encode(array('code'=>0,'msg'=>'缺少档案类型！'));
            exit;
        }
        //$content=htmlspecialchars($content);
        $create_time=strtotime(date('Y-m-d'));
        //查询今天是否已经存在
        $archivesModel=D('Archives');
        if($type==4||$type==5){
            $where['user_id']=array('EQ',$user_id);
            $where['type']=array('EQ',$type);
            $res=$archivesModel->where($where)->find();
        }else{
            $where['user_id']=array('EQ',$user_id);
            $where['create_time']=array('EQ',$create_time);
            $where['type']=array('EQ',$type);
            $res=$archivesModel->where($where)->find();
        }
        if($res){
            //存在，修改数据
            $data['id']=$res['id'];
            $data['user_id']=$user_id;
            $data['content']=$content;
            $data['type']=$type;
            $data['create_time']=$create_time;
            if($archivesModel->save($data)!==false){
                $code=1;
                $msg='成功';
            }else{
                $code=0;
                $msg='失败';
            }
        }else{
            //不存在，添加数据
            $data['user_id']=$user_id;
            $data['content']=$content;
            $data['type']=$type;
            $data['create_time']=$create_time;
            if($archivesModel->add($data)){
                $code=1;
                $msg='成功';
            }else{
                $code=0;
                $msg='失败';
            }
        }

        //返回json数据
        echo json_encode(array('code'=>$code,'msg'=>$msg,'create_time'=>date('Y-m-d')));
    }

    //编辑用户档案
    public function editArchives2(){
        $user_id=I('post.user_id');
        if(!$user_id){
            echo json_encode(array('code'=>0,'msg'=>'缺少用户id！'));
            exit;
        }
        $content=I('post.content');
        if(!$content){
            echo json_encode(array('code'=>0,'msg'=>'缺少json内容数据！'));
            exit;
        }
        $type=I('post.type');
        if(!$type){
            echo json_encode(array('code'=>0,'msg'=>'缺少档案类型！'));
            exit;
        }
        $create_time=I('post.create_time');
        if(!$create_time){
            echo json_encode(array('code'=>0,'msg'=>'缺少日期！'));
            exit;
        }
        $create_time=strtotime($create_time);
        //查询今天是否已经存在
        $archivesModel=D('Archives');
        //存在，修改数据
        $where['user_id']=array('EQ',$user_id);
        $where['create_time']=array('EQ',$create_time);
        $where['type']=array('EQ',$type);
        $data['content']=$content;
        if($archivesModel->where($where)->save($data)!==false){
            $code=1;
            $msg='成功';
        }else{
            $code=0;
            $msg='失败';
        }

        //返回json数据
        echo json_encode(array('code'=>$code,'msg'=>$msg));
    }

    //查询用户档案
    public function sltArchives(){
        $user_id=I('user_id');
        if(!$user_id){
            echo json_encode(array('code'=>0,'msg'=>'缺少用户id！'));
            exit;
        }
        $create_time=I('create_time');
        if(!$create_time){
            echo json_encode(array('code'=>0,'msg'=>'缺少日期！'));
            exit;
        }
        $type=I('type');
        if(!$type){
            echo json_encode(array('code'=>0,'msg'=>'缺少档案类型！'));
            exit;
        }
        $create_time=strtotime($create_time);
        $archivesModel=D('Archives');
        $where['user_id']=array('EQ',$user_id);
        $where['create_time']=array('EQ',$create_time);
        $where['type']=array('EQ',$type);
        $res=$archivesModel->where($where)->find();
        if($res){
            echo htmlspecialchars_decode($res['content']);
            //echo json_encode(array('code'=>1,'data'=>htmlspecialchars_decode($res['content']),'msg'=>'成功'));
        }else{
            //echo json_encode(array('code'=>1,'data'=>'','msg'=>'没有数据'));
            echo '{}';
        }
    }
    
    /**
     * 查询用户档案更新记录
     * baikeliang
     * 2016-10-17
     */
    public function sltDateRecords(){
        $user_id=I('user_id');
        if(!$user_id){
            echo json_encode(array('code'=>0,'msg'=>'缺少用户id！'));
            exit;
        }
        $type=I('type');
        if(!$type){
            echo json_encode(array('code'=>0,'msg'=>'缺少档案类型！'));
            exit;
        }
        $archivesModel=D('Archives');
        $where['user_id']=array('EQ',$user_id);
        $where['type']=array('EQ',$type);
        $data=$archivesModel->field('create_time')->where($where)->group('create_time')->order('create_time desc,id desc')->select();
        if($data){
            $code=1;
            $msg='成功';
            foreach ($data as $key => $value) {
            	//处理时间
            	$data[$key]['create_time']=date('Y-m-d',$value['create_time']);
            }
        }else{
            $code=1;
            $msg='没有数据';
        }
        //返回json数据
        echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$data));
    }

    //关系成员列表
    public function indexRelationUser(){
        $parent_id=I('parent_id');
        if(!$parent_id){
            echo json_encode(array('code'=>0,'msg'=>'缺少住账号id！'));
            exit;
        }
        $usermodel=D('User');
        //获取当前页和每页显示数量
        $page=I('post.p')?I('post.p'):1;
        $p_len=I('post.p_len')?I('post.p_len'):10;
        $start=($page-1)*$p_len;
        $where['b.parent_id']=array('EQ',$parent_id);
        $count=$usermodel->alias('a')->join('mint_relation as b on a.id=b.parent_id')->where($where)->count();
        $data=$usermodel->field('a.id,a.real_name,a.phone,a.birthyear,a.birthmonth,a.birthday,b.relation')->alias('a')->join('mint_relation as b on a.id=b.child_id')->where($where)->limit($start.','.$p_len)->order('a.id desc')->select();
        $usercount=$usermodel->count();//总用户
        if($data){
            foreach ($data as $key => $value) {
                //处理生日
                $data[$key]['birth']=$value['birthyear'].'-'.$value['birthmonth'].'-'.$value['birthday'];
            }
            $code=1;
            $msg='查询成功！';
        }else{
            $code=1;
            $msg='没有数据！';
        }
        echo json_encode(array('code'=>$code,'msg'=>$msg,'count'=>(int)$count,'data'=>$data));

    }

    //添加关系成员
    public function addRelationUser(){
        $code=1;
        if(!IS_POST){
            $code=0;
            $msg="请使用post请求！";
        }else{
            $model = D('User');
            $relationModel=D('Relation');
            $relcacheModel=D('Relcache');
            
            $map['real_name']=array('EQ',$_POST['real_name']);
            $map['phone']=array('EQ',$_POST['phone']);
            $u_data=$model->field('id')->where($map)->find();
            if($u_data){
            	$map1['child_id']=array('EQ',$u_data['id']);
            	$map1['parent_id']=array('EQ',$_POST['parent_id']);
            		
            	$data['parent_id']=$_POST['parent_id'];
            	$data['child_id']=$u_data['id'];
            	$data['relation']=$_POST['relation'];
            	$data['create_time']=time();
            	//恢复关系
            	$relation_data=$relationModel->field('id')->where($map1)->find();
            	if(!$relation_data){
            		$res1=$relationModel->add($data);
            	}
            	$relcache_data=$relcacheModel->field('id')->where($map1)->find();
            	if(!$relcache_data){
            		$res2=$relcacheModel->add($data);
            	}
            }else{
	            $_POST['mint_name']=$model->createBh();
	            $_POST['name']=$_POST['real_name'];
	            $_POST['create_time']=time();
	            $_POST['is_own']=0;
	            //处理生日
	            if($_POST['birth']){
	                $arr=explode('-', $_POST['birth']);
	                $_POST['birthyear']=$arr['0'];
	                $_POST['birthmonth']=$arr['1'];
	                $_POST['birthday']=$arr['2'];
	            }
	            $_POST['password']=md5(md5('123456'));
	            // 接收表单并且使用登录的规则验证表单
	            if($code){
	                if($model->create(I('post.'),1)){
	                    $user_id = $model->add();
	                    if($user_id){
	                        //添加关系
	                        $data['parent_id']=$_POST['parent_id'];
	                        $data['child_id']=$user_id;
	                        $data['relation']=$_POST['relation'];
	                        $data['create_time']=$_POST['create_time'];
	                        $res1=$relationModel->add($data);
	                        $res2=$relcacheModel->add($data);
	                        if($res1&&$res2){
	                            $msg='添加成功!';
	                        }else{
	                            $code=0;
	                            $msg='添加关系失败';
	                        }
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
        }
        //返回json数据
        echo json_encode(array('code'=>$code,'msg'=>$msg,'user_id'=>$user_id));
    }

    //修改关系成员
    public function saveRelationUser(){
        $code=1;
        if(!IS_POST){
            $code=0;
            $msg="请使用post请求！";
        }else{
            if(!$_POST['id']){
                echo json_encode(array('code'=>0,'msg'=>'缺少关系成员id！'));
                exit;
            }
            //处理姓名
            $_POST['name']=$_POST['real_name'];
            //处理生日
            if($_POST['birth']){
                $arr=explode('-', $_POST['birth']);
                $_POST['birthyear']=$arr['0'];
                $_POST['birthmonth']=$arr['1'];
                $_POST['birthday']=$arr['2'];
            }
            $model = D('User');
            // 接收表单并且使用登录的规则验证表单
            if($code){
                if($model->create(I('post.'),1)){
                    if($model->save() !== FALSE ){
                        $msg='修改成功！';
                        //修改关系
                        $relationModel=D('Relation');
                        $relcacheModel=D('Relcache');
                        $data['relation']=$_POST['relation'];
                        $res1=$relationModel->where('child_id='.$_POST['id'])->save($data);
                        $res2=$relcacheModel->where('child_id='.$_POST['id'])->save($data);
                        if($res1!==false && $res2!==false){
                            $msg='添加成功!';
                        }else{
                            $code=0;
                            $msg='添加关系失败';
                        }
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

    //删除关系成员
    public function deleteRelationUser(){
        $id=I('id');
        if(!$id){
            echo json_encode(array('code'=>0,'msg'=>'缺少关系成员id！'));
            exit;
        }
        $relationModel=D('Relation');
        $relcacheModel=D('Relcache');
        if($relationModel->where('child_id='.$id)->delete()!==FALSE && $relcacheModel->where('child_id='.$id)->delete()!==FALSE){
            $code=1;
            $msg='删除成功!';
        }else{
            $code=0;
            $msg='删除失败!';
        }
        echo json_encode(array('code'=>$code,'msg'=>$msg));
    }

    //获取单个关系成员信息
    public function getRelationUserOne(){
        $id=I('id');
        if(!$id){
            echo json_encode(array('code'=>0,'msg'=>'缺少关系成员id！'));
            exit;
        }
        $userModel=D('User');
        $relationModel=D('Relation');
        $res=$userModel->field('real_name,phone,birthyear,birthmonth,birthday')->find($id);
        $res1=$relationModel->where('child_id='.$id)->find();
        if($res&&$res1){
            $data['id']=$res['id'];
            $data['real_name']=$res['real_name'];
            $data['phone']=$res['phone'];
            $data['birth']=$res['birthyear'].'-'.$res['birthmonth'].'-'.$res['birthday'];
            $data['relation']=$res1['relation'];
            $code=1;
            $msg='成功';
        }else{
            $data='';
            $code=0;
            $msg='失败';
        }
        
        echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$data));
    }

    //获取关系成员主账号信息
    public function getRelationUserParent(){
        $id=I('id');
        if(!$id){
            echo json_encode(array('code'=>0,'msg'=>'缺少关系成员id！'));
            exit;
        }
        //查询关系成员信息，判断是否为独立账号
        $userModel=D('User');
        $res=$userModel->find($id);
        if($res['is_own']){
            //是独立账户
            $data='';
        }else{
            //是子账户
            $relationModel=D('Relation');
            $res1=$relationModel->where('child_id='.$id)->find();
            $data=$userModel->field('id,real_name,phone')->find($res1['parent_id']);
            if($data&&$res1){
                $data['relation']=$res1['relation'];
            }else{
                $data='';
            }
        }

        echo json_encode(array('code'=>1,'msg'=>'成功','data'=>$data));
    }
    
    /**
     * 查询用户最早的牙位图记录
     * baikeliang
     * 2016-12-6
     */
    public function getEarliestTooth(){
        $user_id=I('user_id');
        if(!$user_id){
            echo json_encode(array('code'=>0,'msg'=>'缺少用户id！'));
            exit;
        }
        $type=I('type')?I('type'):3;
        if(!$type){
            echo json_encode(array('code'=>0,'msg'=>'缺少类型！'));
            exit;
        }
        $archivesModel=D('Archives');
        $where['user_id']=array('EQ',$user_id);
        $where['type']=array('EQ',$type);
        $res=$archivesModel->where($where)->order('id asc')->find();
        if($res){
        	$date=date('Y-m-d',$res['create_time']);
            echo '{"code": 1,"msg": "查询成功！","id": '.$res['id'].',"date": "'.$date.'","data": ['.htmlspecialchars_decode($res['content']).']}';
            //echo json_encode(array('code'=>1,'data'=>$res['content'],'msg'=>'成功'));
        }else{
            echo json_encode(array('code'=>0,'msg'=>'没有数据！','id'=>'','date'=>'','data'=>'您还未填写牙位图数据！'));
        }
    }

	//添加筛查报告
	public function addRecord(){
		if(!IS_POST){
			$code=0;
			$msg="请使用post请求！";
		}else{
			// 接收表单并且使用登录的规则验证表单
			$model = D('Record');
			$_POST['visit_time']=strtotime($_POST['visit_time']);
			$_POST['create_time']=time();
			$_POST['record_number']=$model->getCode8();
			//处理标签
            if($_POST['label']&&$_POST['label_id']){
                $_POST['label']=','.implode(',', $_POST['label']).',';
                $_POST['label_id']=implode(',', $_POST['label_id']);
            }
			if($model->create()){
				if($id=$model->add()){
					//添加成功
					//添加附件
					if($_POST['file_data']){
						$res=$model->addFile($id,$_POST['file_data']);
					}
					$code=1;
					$msg='添加成功！';
					//发送微信模版消息
					/*$usermodel = D('User');
					$data=$usermodel->field('openid')->where("id=".$_POST['patient_id'])->find();
					if($data['openid']){
						$openid = $data['openid'];
						$template_id = C('WX_Report');
						$url = C('DOMAIN_NAME')."/mintAdmin/index.php/Home/Index/weixinBase/type/record_info/id/".$id;
						$message = '"first": {
				                       "value":"您好，您的口腔检查报告已经制作完成！",
				                       "color":"#173177"
				                   },
				                   "keyword1":{
				                       "value":"'.date('Y.m.d').'",
				                       "color":"#173177"
				                   },
				                   "keyword2": {
				                       "value":"点击【详情】可查看报告的详细内容！",
				                       "color":"#173177"
				                   },
				                   "remark":{
				                       "value":"",
				                       "color":"#173177"
				                   }';
						$weixin=new Weixin();
						$rs=$weixin->sendTemplateMsg($openid,$template_id,$url,$message);
					}*/
				}else{
					//登录验证失败
					$code=0;
					$msg='添加失败!';
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

	//修改筛查报告
	public function editRecord(){
		if(!IS_POST){
			$code=0;
			$msg="请使用post请求！";
		}else{
			if(!$id=I('post.id')){
				echo json_encode(array('code'=>0,'msg'=>'缺少病例id'));
				exit;
			}
			$_POST['visit_time']=strtotime($_POST['visit_time']);
			//处理标签
            if($_POST['label']&&$_POST['label_id']){
                $_POST['label']=','.implode(',', $_POST['label']).',';
                $_POST['label_id']=implode(',', $_POST['label_id']);
            }
			// 接收表单并且使用登录的规则验证表单
			$model = D('Record');
			$fileModel=M('File');
			if($model->create()){
				if($model->save()!==false){
					//修改附件
					if($_POST['file_data']){
						//先删除原始附件
						$fileModel->where("record_id=$id")->delete();
						$model->addFile($id,$_POST['file_data']);
					}else{
						//删除原始附件
						$fileModel->where("record_id=$id")->delete();
					}
					$code=1;
					$msg='修改成功！';
				}else{
					//登录验证失败
					$code=0;
					$msg='修改失败!';
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

	//删除筛查报告
	public function deleteRecord(){
		if(!$id=I('record_id')){
			echo json_encode(array('code'=>0,'msg'=>'缺少病例id！'));
			exit;
		}
		$model = D('Record');
		if($model->delete($id)!==false){
			$code=1;
			$msg='删除成功！';
		}else{
			//登录验证失败
			$code=0;
			$msg='删除失败！';
		}
		//返回json数据
		echo json_encode(array('code'=>$code,'msg'=>$msg));
	}

	//获取单个筛查报告
	public function getOneRecord(){
		if(!$id=I('record_id')){
			echo json_encode(array('code'=>0,'msg'=>'缺少病例id'));
			exit;
		}
		$model = D('Record');
		$data=$model->alias('a')->field('a.*,b.name as patient_name,b.account as patient_phone,c.name as doctor_name,c.account as doctor_phone,d.clinic_name,a.label_id,a.label')->join('left join mint_user as b on a.patient_id=b.id')->join('left join mint_user as c on a.doctor_id=c.id')->join('left join mint_clinic as d on a.clinic_id=d.id')->where("a.id=$id")->find();
		//查找附件
		$fileModel=D('File');
		$file_data=$fileModel->field('file_name,file_path')->where("record_id=$id")->select();
		if($data){
			$data['visit_time']=date('Y-m-d',$data['visit_time']);
			//处理标签
            $data['label_id']=explode(',', $data['label_id']);
            $data['label']=substr($data['label'], 1,-1);
            $data['file_data']=$file_data;
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