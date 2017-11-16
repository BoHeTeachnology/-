<?php
namespace Admin\Controller;
use Admin\Controller;
class DoctorController extends BaseController {
    //医生列表
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
        $data=$usermodel->field('password,openid,user_token',true)->where($where)->limit($start.','.$p_len)->order('id desc')->select();
        $usercount=$usermodel->count();//总用户
        if($data){
            foreach ($data as $key => $value) {
                //处理出诊时间
                $data[$key]['work_time']=explode(',', $value['work_time']);
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
    
    //添加医生
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
            $_POST['mint_name']=$model->createBh();
            $_POST['password']=md5(md5($_POST['password']));
            $_POST['real_name']=$_POST['name'];
            //生成六位不重复的随机码
            $_POST['invite_code']=$model->getCode6();
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
            //处理出诊时间
            if($_POST['work_time']){
                $_POST['work_time']=implode(',', $_POST['work_time']);
            }
            // 接收表单并且使用登录的规则验证表单
            if($code){
                if($model->create(I('post.'),1)){
                	if($id=$model->add()){
                        //添加服务项目
                        if($service_ids=I('post.service_ids')){
                            $model->addService($id,$service_ids);
                        }
                        //添加出诊设置
                        $visit_data=I('post.visit_data');
                        /*$clinic_id=I('post.clinic_id');
                        if($visit_data&&$clinic_id){
                            $model->visitDateAdd($id,$clinic_id,$visit_data);
                        }*/
                        if($visit_data){
                        	$model->addVisitDate($id,$visit_data);
                        }
                        //添加二维码
                        $qr_code=$model->getQrCode($id);
                        if($qr_code){
                            $msg='添加成功!';
                        }else{
                            $msg='二维码添加失败!';
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
    	//返回json数据
    	echo json_encode(array('code'=>$code,'msg'=>$msg));
    }

    //删除医生
    public function delete(){
        $id=I('user_id');
        if(!$id){
            echo json_encode(array('code'=>0,'msg'=>'缺少用户id！'));
            exit;
        }
        $model=D('User');
        if($model->delete($id) !== FALSE){
            //清空医生的坐诊时间
            $dttimeModel=D('Dttime');
            $where['doctor_id']=array('EQ',$id);
            $dttimeModel->where($where)->delete();
            //清空医生服务项目
            $dtsvModel=D('DoctorService');
            $dtsvModel->where($where)->delete();
        	$code=1;
        	$msg='删除成功！';
        }else{
        	$code=0;
        	$msg=$model->getError();
        }
        echo json_encode(array('code'=>$code,'msg'=>$msg));
    }

    //修改医生
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
            $model = D('User');
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
            //处理出诊时间
            if($_POST['work_time']){
                $_POST['work_time']=implode(',', $_POST['work_time']);
            }
            //添加二维码
            if(!$_POST['tow_code']){
                $qr_code=$model->getQrCode($id);
                if(!$qr_code){
                    $code=0;
                    $msg='二维码添加失败!';
                }else{
                	unset($_POST['tow_code']);
                }
            }
            // 接收表单并且使用登录的规则验证表单
            if($code){
                if($model->create(I('post.'),1)){
                    if($model->save() !== FALSE ){
                        //修改服务项目
                        if($service_ids=I('post.service_ids')){
                            $rs1=$model->editService($id,$service_ids);
                            if(!$rs1){
                            	$code=0;
                            	$msg='修改服务项目失败！';
                            	echo json_encode(array('code'=>$code,'msg'=>$msg));
                            	exit;
                            }
                        }
                        //修改出诊时间设置
                        $visit_data=I('post.visit_data');
                        $month=I('post.month');
                        if($month&&$visit_data){
                        	$rs2=$model->editVisitDate($id,$visit_data,$month);
                        	if(!$rs2){
                        		$code=0;
                        		$msg='修改出诊时间失败！';
                        		echo json_encode(array('code'=>$code,'msg'=>$msg));
                        		exit;
                        	}
                        }
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

    //返回单个医生信息
    public function getOne(){
        $id = I('id');
        if(!$id){
            echo json_encode(array('code'=>0,'msg'=>'缺少医生id！'));
            exit;
        }
        $model = D('User');
        $data=$model->alias('a')->field('a.account,a.invite_code,a.id,a.photo,a.name,a.phone,a.sex,a.position,a.hospital,a.context,a.field,a.label,a.label_id,a.job_age,a.birthyear,a.birthmonth,a.birthday,a.is_show,a.meiqia,a.assistant_id,a.tow_code,b.real_name as assistant')->join('left join mint_user as b on a.assistant_id=b.id')->where("a.id=$id")->find();
        //查询该医生的服务项目
        $dtsvModel=D('DoctorService');
        $service_data=$dtsvModel->field('group_concat(b.service_name) as service_name,group_concat(b.id) as service_id')->alias('a')->join('left join mint_service as b on a.service_id=b.id')->where('a.doctor_id='.$id)->select();
        if($data){
            //处理标签
            $data['label_id']=explode(',', $data['label_id']);
            $data['label']=substr($data['label'], 1,-1);
            $data['label_arr']=explode(',', $data['label']);
            $data['service_name_arr']=explode(',', $service_data[0]['service_name']);
            $data['service_id_arr']=explode(',', $service_data[0]['service_id']);
            $data['birth']=$data['birthyear'].'-'.$data['birthmonth'].'-'.$data['birthday'];
            $data['age']=date('Y')-$data['birthyear'];
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

    //查询所有服务项目
    public function serviceLst(){
        $model=D('Service');
        $data=$model->select();
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

    //查询所有诊所
    public function clinicLst(){
        $model=D('Clinic');
        $data=$model->field('id,clinic_name')->select();
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

    //医生单个月出诊时间及诊所查询
    public function visitDateQuery(){
        $month=I('visit_date');
        if(!$month){
            echo json_encode(array('code'=>0,'msg'=>'缺少年月！'));
            exit; 
        }
        //判断下个月的最后一天是几号
        $this_month=date('n');
        if($this_month+2>12){
            $tow_month=($this_month+2)%12;
            $this_year=date('Y')+1;
        }else{
            $tow_month=$this_month+2;
            $this_year=date('Y');
        }
        $tow_date=$this_year.'-'.$tow_month.'-01';
        $time=strtotime($tow_date);
        $next_time=$time-24*60*60;
        $nex_date=date('Y-m-d',$next_time);
        //判断今天是否是本月25号以前
        $this_date=date('j');
        if(strtotime($month)<=time()){
            $is_befor=0;
        }else{
            if($this_date<25){
                $is_befor=1;
            }else{
                $is_befor=0;
            }
        }
        //查询数据
        $doctor_id=I('doctor_id')?I('doctor_id'):session('userId');
        $where['a.visit_date']=array('LIKE','%'.$month.'%');
        $where['a.doctor_id']=array('EQ',$doctor_id);
        $model=D('Dttime');
        $data=$model->field('a.*,b.clinic_name')->alias('a')->join('left join mint_clinic as b on a.clinic_id=b.id')->where($where)->select();
        if($data){
            $code=1;
            $msg='成功';
        }else{
            $code=1;
            $msg='没有数据';
        }
        //返回json数据
        echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$data,'is_befor'=>$is_befor,'nex_date'=>$nex_date));
    }

    //返回当天的预约详情
    public function getDayVisit(){
        $visit_date=I('visit_date');
        if(!$visit_date){
            echo json_encode(array('code'=>0,'msg'=>'缺少年月日'));
            exit; 
        }
        $doctor_id=I('doctor_id');
        if(!$doctor_id){
            echo json_encode(array('code'=>0,'msg'=>'缺少医生id'));
            exit; 
        }
        $where['a.visit_date']=array('EQ',strtotime($visit_date));
        $where['a.doctor_id']=array('EQ',$doctor_id);
        $model=D('Appointment');
        $data=$model->field('a.patient_name,a.contact_tel,a.project_name,a.visit_time,b.sex,b.birthyear')->alias('a')->join('left join mint_user as b on a.patient_id=b.id')->where($where)->select();
        if($data){
            foreach ($data as $key => $value) {
                $data[$key]['visit_time']=date('Y-m-d H:i',$value['visit_time']);
                $data[$key]['age']=date('Y')-$value['birthyear'];
            }
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