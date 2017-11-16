<?php
namespace Home\Controller;
use Home\Controller;

class RecordController extends BaseController {

	//病例列表
	public function index(){
		$RecordModel=D('Record');
		//获取搜索条件
		if(I('patient_id')){
        	$where['a.patient_id']=array('EQ',I('patient_id'));
        }else{
    		echo json_encode(array('code'=>0,'msg'=>'缺少病人id参数！'));
    		exit;
    	}
        $type=I('type')?I('type'):1;
        $where['a.type']=array('EQ',$type);
        $where['a.is_send']=array('EQ',1);
		//获取当前页和每页显示数量
        $page=I('post.p')?I('post.p'):1;
        $p_len=I('post.p_len')?I('post.p_len'):10;
        $start=($page-1)*$p_len;
        //查询数据
        $count=$RecordModel->alias('a')->field('a.*')->join('left join mint_user as b on a.patient_id=b.id')->join('left join mint_user as c on a.doctor_id=c.id')->join('left join mint_clinic as d on a.clinic_id=d.id')->where($where)->count();
        $data=$RecordModel->alias('a')->field('a.*,b.real_name as patient_name,c.name as doctor_name,d.clinic_name')->join('left join mint_user as b on a.patient_id=b.id')->join('left join mint_user as c on a.doctor_id=c.id')->join('left join mint_clinic as d on a.clinic_id=d.id')->where($where)->limit($start.','.$p_len)->order('a.visit_time desc,a.id desc')->select();
        if($data){
        	foreach ($data as $key => $value) {
        		//处理时间
        		$data[$key]['visit_time']=date('Y-m-d',$value['visit_time']);
        		$data[$key]['label']=explode(',', substr($value['label'], 1,-1));
        	}
            $code=1;
            $msg='查询成功！';
        }else{
            $code=1;
            $msg='没有数据！';
        }

        echo json_encode(array('code'=>$code,'msg'=>$msg,'count'=>(int)$count,'data'=>$data));
	}

    //获取自己和未独立前有病例的关系成员的账号的用户列表
    public function getRelationUser(){
        $id=session('userId');
        //获取当前页和每页显示数量
        $page=I('post.p')?I('post.p'):1;
        $p_len=I('post.p_len')?I('post.p_len'):10;
        $start=($page-1)*$p_len;
        //查找该用户下的关系成员
        $recordModel=D('Record');
        $relationModel=D('Relation');
        $res=$relationModel->field('GROUP_CONCAT(child_id) as child_id')->where('parent_id='.$id)->find();
        if($res['child_id']){
            //有关系成员
            $arr=explode(',', $res['child_id']);
            $userModel=D('User');
            $where['id']=array('IN',$arr);
            $user_arr=$userModel->field('id,up_time')->where($where)->select();
            //查找子账号是否有未独立前的病例
            //拼接sql
            $str='';
            foreach ($user_arr as $key => $value) {
                $str .= "patient_id=".$value['id']." && create_time < ".$value['up_time'].' or ';
            }
            //去掉最后的or
            $str=substr($str,0,strlen($str)-3);
            $sql="select * from mint_record where is_send = 1 and ".$str;
            //echo $sql;exit;
            $result=$recordModel->query($sql);
        }
        //var_dump($result);
        //exit;
        if($result&&$res['child_id']){
            //有子账户且有未独立前的病例
            $is_record=0;
            //找出符合情况的子账号
            $array=array();
            foreach ($result as $key => $value) {
                if(!in_array($value['patient_id'], $array)){
                    $array[]=$value['patient_id'];
                }
            }
            $array[]=$id;
            //查询出这些用户的信息列表
            $map['a.id']=array('IN',$array);
            $data=$userModel->field('a.id,a.phone,a.real_name,a.photo,b.relation')->alias('a')->join(' left join (select * from mint_relation where child_id != '.$id.') as b on a.id=b.child_id')->where($map)->select();
            if($data){
                $code=1;
                $msg='查询成功！';
            }else{
                $code=1;
                $msg='没有数据！';
            }
        }else{
            //没有子账号或者没有未独立前前的病例，返回自己的病例列表
            $is_record=1;
            //查询数据
            $count=$recordModel->alias('a')->field('a.*')->join('left join mint_user as b on a.patient_id=b.id')->join('left join mint_user as c on a.doctor_id=c.id')->join('left join mint_clinic as d on a.clinic_id=d.id')->where('a.is_send = 1 and a.patient_id='.$id)->count();
            $data=$recordModel->alias('a')->field('a.*,b.real_name as patient_name,c.name as doctor_name,d.clinic_name')->join('left join mint_user as b on a.patient_id=b.id')->join('left join mint_user as c on a.doctor_id=c.id')->join('left join mint_clinic as d on a.clinic_id=d.id')->where('a.is_send = 1 and a.patient_id='.$id)->limit($start.','.$p_len)->order('id desc')->select();
            if($data){
                foreach ($data as $key => $value) {
                    //处理时间
                    $data[$key]['visit_time']=date('Y-m-d',$value['visit_time']);
                    $data[$key]['label']=explode(',', substr($value['label'], 1,-1));
                }
                $code=1;
                $msg='查询成功！';
            }else{
                $code=1;
                $msg='没有数据！';
            }
        }

        echo json_encode(array('code'=>$code,'msg'=>$msg,'count'=>(int)$count,'data'=>$data,'is_record'=>$is_record));
    }

    /**
     * 查询医生下的初筛病人列表
     * baikeliang
     * 2016-12-8
     */
	public function getPatient(){
		//$RecordModel=D('Record');
		$AppointmentModel=D('Appointment');
		//获取搜索条件
        if(I('doctor_id')){
        	$where['a.doctor_id']=array('EQ',I('doctor_id'));
        }else{
        	echo json_encode(array('code'=>0,'msg'=>'缺少医生id参数！'));
        	exit;
        }
        if(I('patient_name')){
        	$where['b.real_name|b.phone']=array('LIKE','%'.urldecode(I('patient_name')).'%');
        }
        //$where['a.is_send']=array('EQ',1);
        $where['a.status']=array('IN','1,2');
        //获取当前页和每页显示数量
        $page=I('post.p')?I('post.p'):1;
        $p_len=I('post.p_len')?I('post.p_len'):10;
        $start=($page-1)*$p_len;
        //查询数据
        //$count=$RecordModel->alias('a')->field('a.patient_id')->join('left join mint_user as b on a.patient_id=b.id')->where($where)->group('patient_id')->select();
        //$count=count($count);
        //$data=$RecordModel->alias('a')->field('a.patient_id,b.real_name as patient_name,b.phone as patient_phone')->join('left join mint_user as b on a.patient_id=b.id')->where($where)->group('a.patient_id')->limit($start.','.$p_len)->order('a.id desc')->select();
        $count=$AppointmentModel->alias('a')->join('left join mint_user as b on a.patient_id=b.id')->where($where)->group('a.patient_id')->count();
        $data=$AppointmentModel->field('a.patient_id,b.real_name as patient_name,b.phone as patient_phone')->alias('a')->join('left join mint_user as b on a.patient_id=b.id')->where($where)->group('a.patient_id')->limit($start.','.$p_len)->order('a.status asc,a.visit_time asc,a.id desc')->select();
        if($data){
            $code=1;
            $msg='查询成功！';
        }else{
            $code=1;
            $msg='没有数据！';
        }

        echo json_encode(array('code'=>$code,'msg'=>$msg,'count'=>(int)$count,'data'=>$data));
	}

    /**
     * 查询医生下的病历病人列表
     * baikeliang
     * 2017-3-6
     */
	public function getCasePatient(){
		$CaseModel=D('Case');
		//获取搜索条件
        if(I('doctor_id')){
        	$where['a.doctor_id']=array('EQ',I('doctor_id'));
        }else{
        	echo json_encode(array('code'=>0,'msg'=>'缺少医生id参数！'));
        	exit;
        }
        if(I('patient_name')){
        	$where['b.real_name|b.phone']=array('LIKE','%'.urldecode(I('patient_name')).'%');
        }
        $where['a.is_send']=array('EQ',1);
        //获取当前页和每页显示数量
        $page=I('post.p')?I('post.p'):1;
        $p_len=I('post.p_len')?I('post.p_len'):10;
        $start=($page-1)*$p_len;
        //查询数据
        $count=$CaseModel->alias('a')->field('a.patient_id')->join('left join mint_user as b on a.patient_id=b.id')->where($where)->group('patient_id')->count();
        $data=$CaseModel->alias('a')->field('a.patient_id,b.real_name as patient_name,b.phone as patient_phone')->join('left join mint_user as b on a.patient_id=b.id')->where($where)->group('a.patient_id')->limit($start.','.$p_len)->order('a.id desc')->select();
        if($data){
            $code=1;
            $msg='查询成功！';
        }else{
            $code=1;
            $msg='没有数据！';
        }

        echo json_encode(array('code'=>$code,'msg'=>$msg,'count'=>(int)$count,'data'=>$data));
	}

	//获取单个病例
	public function getOne(){
		if(!$id=I('record_id')){
			echo json_encode(array('code'=>0,'msg'=>'缺少病例id'));
			exit;
		}
		$model = D('Record');
		$data=$model->alias('a')->field('a.*,b.real_name as patient_name,b.account as patient_phone,c.name as doctor_name,c.account as doctor_phone,d.clinic_name')->join('left join mint_user as b on a.patient_id=b.id')->join('left join mint_user as c on a.doctor_id=c.id')->join('left join mint_clinic as d on a.clinic_id=d.id')->where("a.id=$id")->find();
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
    
    /**
     * 查询用户最早的牙位图记录
     * baikeliang
     * 2016-12-8
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
        exit;
    }
    
    /**
     * 查询用户的牙位图记录
     * baikeliang
     * 2016-12-8
     */
    public function getTooth(){
        $toothpic_id=I('toothpic_id');
        if(!$toothpic_id){
            echo json_encode(array('code'=>0,'msg'=>'缺少牙位图id！'));
            exit;
        }
        $archivesModel=D('Archives');
        $where['id']=array('EQ',$toothpic_id);
        $res=$archivesModel->where($where)->order('id asc')->find();
        if($res){
        	$date=date('Y-m-d',$res['create_time']);
            echo '{"code": 1,"msg": "查询成功！","id": '.$res['id'].',"date": "'.$date.'","data": ['.htmlspecialchars_decode($res['content']).']}';
            //echo json_encode(array('code'=>1,'data'=>$res['content'],'msg'=>'成功'));
        }else{
            echo json_encode(array('code'=>0,'msg'=>'没有数据！','data'=>'您还未填写牙位图数据！'));
        }
        exit;
    }

    //********************************************新版病例****************************************************
    //患者端病例列表
    public function newIndex(){
        //找出当前用户和其子账户的用户id
        $relationModel=D('Relation');
        $id=session('userId');
        $ids=$relationModel->field('GROUP_CONCAT(child_id) as ids')->where('parent_id='.$id)->find();
        if($ids['ids']){
            $ids=$id.','.$ids['ids'];
        }else{
            $ids=$id;
        }
        //查询病例
        $page=I('post.p')?I('post.p'):1;
        $p_len=I('post.p_len')?I('post.p_len'):10;
        $start=($page-1)*$p_len;
        $caseModel=D('Case');
        $count=$caseModel->alias('a')->join('left join mint_relation as b on a.patient_id=b.child_id')->join('left join mint_user as c on a.patient_id=c.id')->join('left join mint_casecat as d on a.casecat_id=d.id')->where('a.patient_id in ('.$ids.') and a.is_send = 1')->count();
        $data=$caseModel->field('a.id,a.type,a.visit_time,b.relation,c.real_name as patient_name,d.cat_name')->alias('a')->join('left join mint_relation as b on a.patient_id=b.child_id')->join('left join mint_user as c on a.patient_id=c.id')->join('left join mint_casecat as d on a.casecat_id=d.id')->where('a.patient_id in ('.$ids.') and a.is_send = 1')->limit($start.','.$p_len)->order('a.visit_time desc')->select();
        $RecordModel=D('Record');
        $record_count1=$RecordModel->alias('a')->join('left join mint_user as b on a.patient_id=b.id')->join('left join mint_user as c on a.doctor_id=c.id')->join('left join mint_clinic as d on a.clinic_id=d.id')->where('a.patient_id in ('.$ids.') and a.is_send = 1 and a.type = 1')->count();
        $record_count2=$RecordModel->alias('a')->join('left join mint_user as b on a.patient_id=b.id')->join('left join mint_user as c on a.doctor_id=c.id')->join('left join mint_clinic as d on a.clinic_id=d.id')->where('a.patient_id in ('.$ids.') and a.is_send = 1 and a.type = 2')->count();
        if($data){
            foreach ($data as $key => $value) {
                $data[$key]['visit_time']=date('Y年m月d日',$value['visit_time']);
            }
            $code=1;
            $msg='成功！';
        }else{
            //无数据
            $code=1;
            $msg='无数据!';
        }
        //返回json数据
        echo json_encode(array('code'=>$code,'msg'=>$msg,'count'=>$count,'data'=>$data,'record_count1'=>$record_count1,'record_count2'=>$record_count2));
    }

    //返回单个病例详情
    public function newGetOne(){
        if(!$id=I('case_id')){
            echo json_encode(array('code'=>0,'msg'=>'缺少病例id'));
            exit;
        }
        $model = D('Case');
        $data=$model->alias('a')->field('a.*,b.real_name as patient_name,b.account,b.phone as patient_phone,c.name as doctor_name,c.account as doctor_phone,d.clinic_name,e.cat_name')->join('left join mint_user as b on a.patient_id=b.id')->join('left join mint_user as c on a.doctor_id=c.id')->join('left join mint_clinic as d on a.clinic_id=d.id')->join('left join mint_casecat as e on a.casecat_id=e.id')->where("a.id=$id")->find();
        if($data){
            //处理病例内容
            $data['content']=json_decode(htmlspecialchars_decode($data['content']),true);
            $data['visit_time']=date('Y-m-d',$data['visit_time']);
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
    
    /**
     * 医生端查询病人的病历列表
     * baikeliang
     * 2016-12-8
     */
    public function getPatientCase(){
    	if(I('patient_id')){
    		$where['a.patient_id']=array('EQ',I('patient_id'));
    	}else{
    		echo json_encode(array('code'=>0,'msg'=>'缺少病人id参数！'));
    		exit;
    	}
        $where['a.is_send']=array('EQ',1);
        //查询病例
        $page=I('post.p')?I('post.p'):1;
        $p_len=I('post.p_len')?I('post.p_len'):10;
        $start=($page-1)*$p_len;
        $caseModel=D('Case');
        $count=$caseModel->field('a.id')->alias('a')->join('left join mint_user as b on a.patient_id=b.id')->join('left join mint_casecat as c on a.casecat_id=c.id')->where($where)->count();
        $data=$caseModel->field('a.id,a.type,a.visit_time,b.real_name as patient_name,c.cat_name')->alias('a')->join('left join mint_user as b on a.patient_id=b.id')->join('left join mint_casecat as c on a.casecat_id=c.id')->where($where)->limit($start.','.$p_len)->order('a.visit_time desc')->select();
        $RecordModel=D('Record');
        $record_count1=$RecordModel->alias('a')->join('left join mint_user as b on a.patient_id=b.id')->join('left join mint_user as c on a.doctor_id=c.id')->join('left join mint_clinic as d on a.clinic_id=d.id')->where('a.patient_id = '.I('patient_id').' and a.is_send = 1 and a.type = 1')->count();
        $record_count2=$RecordModel->alias('a')->join('left join mint_user as b on a.patient_id=b.id')->join('left join mint_user as c on a.doctor_id=c.id')->join('left join mint_clinic as d on a.clinic_id=d.id')->where('a.patient_id = '.I('patient_id').' and a.is_send = 1 and a.type = 2')->count();
        
        if($data){
            foreach ($data as $key => $value) {
                $data[$key]['visit_time']=date('Y年m月d日',$value['visit_time']);
            }
            $code=1;
            $msg='成功！';
        }else{
            //无数据
            $code=1;
            $msg='无数据!';
        }
        //返回json数据
        echo json_encode(array('code'=>$code,'msg'=>$msg,'count'=>$count,'data'=>$data,'record_count1'=>$record_count1,'record_count2'=>$record_count2));
    }

    //患者端初筛报告列表
    public function screeningIndex(){
        $relationModel=D('Relation');
        $RecordModel=D('Record');
        //获取搜索条件
        $id=session('userId');
        $ids=$relationModel->field('GROUP_CONCAT(child_id) as ids')->where('parent_id='.$id)->find();
        if($ids['ids']){
            $ids=$id.','.$ids['ids'];
        }else{
            $ids=$id;
        }
        $type=I('type')?I('type'):1;
        $where['a.patient_id']=array('IN',$ids);
        $where['a.type']=array('EQ',$type);
        $where['a.is_send']=array('EQ',1);
        //获取当前页和每页显示数量
        $page=I('post.p')?I('post.p'):1;
        $p_len=I('post.p_len')?I('post.p_len'):10;
        $start=($page-1)*$p_len;
        //查询数据
        $count=$RecordModel->alias('a')->join('left join mint_user as b on a.patient_id=b.id')->join('left join mint_user as c on a.doctor_id=c.id')->join('left join mint_clinic as d on a.clinic_id=d.id')->where($where)->count();
        $data=$RecordModel->alias('a')->field('a.*,b.real_name as patient_name,c.name as doctor_name,d.clinic_name,e.relation')->join('left join mint_user as b on a.patient_id=b.id')->join('left join mint_user as c on a.doctor_id=c.id')->join('left join mint_clinic as d on a.clinic_id=d.id')->join('left join mint_relation as e on a.patient_id=e.child_id')->where($where)->limit($start.','.$p_len)->order('a.visit_time desc,a.id desc')->select();
        if($data){
            foreach ($data as $key => $value) {
                //处理时间
                $data[$key]['visit_time']=date('Y-m-d',$value['visit_time']);
                $data[$key]['label']=explode(',', substr($value['label'], 1,-1));
            }
            $code=1;
            $msg='查询成功！';
        }else{
            $code=1;
            $msg='没有数据！';
        }

        echo json_encode(array('code'=>$code,'msg'=>$msg,'count'=>(int)$count,'data'=>$data));
    }

    //查询既往史
    public function queryHistory(){
        $user_id=I('user_id');
        if(!$user_id){
            echo json_encode(array('code'=>0,'msg'=>'缺少用户id！'));
            exit;
        }
        $archivesModel=D('Archives');
        $where['user_id']=array('EQ',$user_id);
        $where['type']=array('EQ',1);
        $res=$archivesModel->where($where)->order('create_time desc')->find();
        if($res){
            echo '{"code": 1,"msg": "查询成功！","data":'.htmlspecialchars_decode($res['content']).'}';
            //echo json_encode(array('code'=>1,'data'=>htmlspecialchars_decode($res['content']),'msg'=>'成功'));
        }else{
            //echo json_encode(array('code'=>1,'data'=>'','msg'=>'没有数据'));
            echo json_encode(array('code'=>0,'msg'=>'没有数据！'));
        }
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

    //返回病历分类信息
    public function getCatLst(){
        //获取服务项目基本信息
        $model = D('Casecat');
        $data=$model->select();
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