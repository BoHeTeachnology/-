<?php
namespace Admin\Controller;
use Admin\Controller;
use Tool\Weixin;

class CaseController extends BaseController {

	//病例列表
	public function index(){
		$caseModel=D('Case');
		//获取搜索条件
		if(I('account')){
        	//$where['b.account']=array('LIKE','%'.I('account').'%');
        	$where['b.account|b.phone']=array('LIKE','%'.I('account').'%');
        }
		if(I('patient_name')){
        	$where['b.real_name']=array('LIKE','%'.urldecode(I('patient_name')).'%');
        }
        if(I('doctor_id')){
        	$where['c.id']=array('EQ',I('doctor_id'));
        }
        if(I('doctor_name')){
        	$where['c.name']=array('LIKE','%'.urldecode(I('doctor_name')).'%');
        }
        if(I('clinic_id')){
        	$where['d.id']=array('EQ',I('clinic_id'));
        }
        if(I('clinic_name')){
        	$where['d.clinic_name']=array('LIKE','%'.urldecode(I('clinic_name')).'%');
        }
        if(I('case_number')){
        	$where['a.case_number']=array('LIKE','%'.urldecode(I('case_number')).'%');
        }
        if(I('visit_time')){
        	$where['a.visit_time']=array('EQ',strtotime(I('visit_time')));
        }
        $is_send = I('is_send');
        if($is_send==='0'||$is_send==='1'){
        	$where['a.is_send']=array('EQ',$is_send);
        }
        if($casecat_id=I('casecat_id')){
        	//查询该分类下的所有子分类ID
        	$casecatModel=D('Casecat');
        	$result=$casecatModel->select();
        	$res=$casecatModel->childCatIdLst($casecat_id,$result);
        	//追加上该分类
        	if(is_array($res)){
        		$res[]=$casecat_id;
        		$where['casecat_id']=array('IN',$res);
        	}
        }
        $where['a.is_del']=1;
        $start=I('start');
        $end=I('end');
        if($start&&$end){
            //传了时间
            $end=strtotime($end);
            $start=strtotime($start);
            $where['a.visit_time']=array('BETWEEN',"$start,$end");
        }
		//获取当前页和每页显示数量
        $page=I('p')?I('p'):1;
        $p_len=I('p_len')?I('p_len'):10;
        $start=($page-1)*$p_len;
        //查询数据
        $count=$caseModel->alias('a')->field('a.id')->join('left join mint_user as b on a.patient_id=b.id')->join('left join mint_user as c on a.doctor_id=c.id')->join('left join mint_clinic as d on a.clinic_id=d.id')->join('left join mint_casecat as e on a.casecat_id=e.id')->where($where)->count();
        $data=$caseModel->alias('a')->field('a.id,a.type,a.case_number,a.visit_time,a.is_send,a.patient_id,b.real_name as patient_name,b.account,b.phone as patient_phone,c.name as doctor_name,c.account as doctor_account,d.clinic_name,e.cat_name')->join('left join mint_user as b on a.patient_id=b.id')->join('left join mint_user as c on a.doctor_id=c.id')->join('left join mint_clinic as d on a.clinic_id=d.id')->join('left join mint_casecat as e on a.casecat_id=e.id')->where($where)->limit($start.','.$p_len)->order('id desc')->select();
        //echo $caseModel->_sql();die;
        if($data){
        	foreach ($data as $key => $value) {
        		//处理时间
        		$data[$key]['visit_time']=date('Y-m-d',$value['visit_time']);
        		if(!$value['clinic_name']){
        			$data[$key]['clinic_name']='';
        		}
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
            echo json_encode(array('code'=>1,'msg'=>'没有数据！'));
        }
    }

    //添加病例
    public function add(){
		if(!IS_POST){
			$code=0;
			$msg="请使用post请求！";
		}else{
			$str=file_get_contents('php://input');
			$arr=json_decode($str,true);
			foreach ($arr as $key => $value) {
				$_POST[$key]=$value;
			}
			if($_POST['content']){
				$_POST['content']=json_encode($_POST['content']);
			}
			if($_POST['visit_time']){
				$_POST['visit_time']=strtotime($_POST['visit_time']);
			}
			$model = D('Case');
			$_POST['case_number']=$model->getCode8();
			$_POST['create_time']=time();
			// 接收表单并且验证表单
			if($model->create()){
				if($id=$model->add()){
					$code=1;
					$msg='添加成功！';
				}else{
					$id='';
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
		echo json_encode(array('code'=>$code,'msg'=>$msg,'case_id'=>$id));
	}

	//修改病例
	public function edit(){
		if(!IS_POST){
			$code=0;
			$msg="请使用post请求！";
		}else{
			$str=file_get_contents('php://input');
			$arr=json_decode($str,true);
			foreach ($arr as $key => $value) {
				$_POST[$key]=$value;
			}
			if($_POST['content']){
				$_POST['content']=json_encode($_POST['content']);
			}
			if($_POST['visit_time']){
				$_POST['visit_time']=strtotime($_POST['visit_time']);
			}
			if(!$id=I('post.id')){
				echo json_encode(array('code'=>0,'msg'=>'缺少病例id'));
				exit;
			}
			// 接收表单并且验证表单
			$model = D('Case');
			if($model->create()){
				if($model->save()!==false){
					$code=1;
					$msg='修改成功！';
				}else{
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

	//删除病例
	public function delete(){
		if(!$id=I('case_id')){
			echo json_encode(array('code'=>0,'msg'=>'缺少病例id'));
			exit;
		}
		$model = D('Case');
		$model->is_del=2;
		if($model->where("id=$id")->save()!==false){
			$code=1;
			$msg='删除成功！';
		}else{
			//登录验证失败
			$code=0;
			$msg='删除失败!';
		}

		//返回json数据
		echo json_encode(array('code'=>$code,'msg'=>$msg));
	}

	//获取单个病例
	public function getOne(){
		if(!$id=I('case_id')){
			echo json_encode(array('code'=>0,'msg'=>'缺少病例id'));
			exit;
		}
		$model = D('Case');
		$data=$model->alias('a')->field('a.*,b.real_name as patient_name,b.account,b.photo,b.phone as patient_phone,b.is_own,c.name as doctor_name,c.account as doctor_phone,d.clinic_name')->join('left join mint_user as b on a.patient_id=b.id')->join('left join mint_user as c on a.doctor_id=c.id')->join('left join mint_clinic as d on a.clinic_id=d.id')->where("a.id=$id")->find();
		//判断是否是子账号
        if($data['is_own']=='0'){
        	//是子账户
        	$userModel=D('User');
            $relationModel=D('Relation');
            $res1=$relationModel->where('child_id='.$data['patient_id'])->find();
            $res=$userModel->field('id,real_name,account,phone,photo')->find($res1['parent_id']);
            if($res&&$res1){
                $res['relation']=$res1['relation'];
            }else{
            	$res='';
            }
        }
		if($data){
			//处理病例内容
			$data['content']=json_decode(htmlspecialchars_decode($data['content']),true);
			$data['visit_time']=date('Y-m-d H:i',$data['visit_time']);
			$data['parent_account']=$res?$res:'';
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

	//单个用户的病例时间列表
	public function timeLst(){
		$user_id=I('user_id');
        if(!$user_id){
            echo json_encode(array('code'=>0,'msg'=>'缺少用户id！'));
            exit;
        }
        $caseModel=D('Case');
        $data=$caseModel->field('id,visit_time')->where('patient_id='.$user_id.' and is_del=1')->select();
        if($data){
        	foreach ($data as $key => $value) {
        		//处理时间
        		$data[$key]['visit_time']=date('Y-m-d H:i',$value['visit_time']);
        	}
        	$code=1;
        	$msg='成功';
        }else{
        	$code=1;
        	$msg='该用户没有病例';
        }

        //返回json数据
		echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$data));
	}

	/**
	 * 发送病历微信通知
	 * baikeliang
	 * 2017-3-3
	 */
	public function sendWeixinMsg(){
		$keyids=I('case_ids');
		if(!$keyids){
			echo json_encode(array('code'=>0,'msg'=>'请选择病历！'));
			exit;
		}
		if(is_array($keyids)){
			$keyids = implode(',',$keyids);
		}
		$caseModel=D('Case');
		$where['a.is_send']=array('EQ',0);
		$where['a.id']=array('IN',$keyids);
		$data=$caseModel->alias('a')->field('a.id,a.visit_time,b.id as uid,b.openid,b.is_own,c.clinic_name')->join('left join '.C('DB_PREFIX').'user as b on a.patient_id=b.id')->join('left join '.C('DB_PREFIX').'clinic as c on a.clinic_id=c.id')->where($where)->select();
		if($data){
			$success = $fail = 0;
			$weixin=new Weixin();
			$template_id = C('WX_Case');
			foreach ($data as $key => $value) {
				//发送微信模版消息
				$openid = '';
				if($value['is_own']==0){
					$relationModel=D('Relation');
					$map['child_id']=$value['uid'];
					$res=$relationModel->alias('a')->field('b.openid')->join('left join mint_user as b on a.parent_id=b.id')->where($map)->find();
					if($res){
						$openid = $res['openid'];
					}
				}else{
					$openid = $value['openid'];
				}
				if($openid){
					$url = C('DOMAIN_NAME')."/mintAdmin/index.php/Home/Index/weixinBase/type/case_info/id/".$value['id'];
					$message = '"first": {
					 		"value":"您好，您的口腔病历报告已上传！",
							"color":"#173177"
						 },
						 "keyword1":{
						 "value":"'.date('Y.m.d',$value['visit_time']).'",
						 "color":"#173177"
						 },
						 "keyword2":{
						 "value":"'.$value['clinic_name'].'",
						 "color":"#173177"
						 },
						 "keyword3": {
						 "value":"薄荷牙医",
						 "color":"#173177"
						 },
						 "remark":{
						 "value":"点击【详情】可查看您的口腔病历报告详情！",
						 "color":"#173177"
						 }';
					$rs=$weixin->sendTemplateMsg($openid,$template_id,$url,$message);
					\Think\Log::write('病历报告微信模板消息记录：'.$rs,'INFO');
					$rs = json_decode($rs);
					if($rs->errcode&&$rs->errmsg!='ok'){
						$fail++;
						$code=0;
						$msg='微信模板消息发送失败！';
					}else{
						$success++;
						$caseModel->where('id='.$value['id'])->setField('is_send','1');
						$code=1;
						$msg='发送成功！';
					}
				}else{
					$fail++;
					$code=0;
					$msg='该用户没有绑定微信！';
				}
			}
		}else{
			$code=0;
			$msg='该病例已发送！';
		}
		//返回json数据
		echo json_encode(array('code'=>$code,'msg'=>$msg));
	}
}