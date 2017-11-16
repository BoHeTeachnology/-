<?php
namespace Admin\Controller;
use Admin\Controller;
use Tool\Weixin;

class RecordController extends BaseController {

	//病例列表
	public function index(){
		$RecordModel=D('Record');
		//获取搜索条件
		if(I('account')){
        	//$where['b.account']=array('LIKE','%'.I('account').'%');
        	$where['b.account|b.phone|c.account']=array('LIKE','%'.I('account').'%');
        }
		if(I('user_name')){
        	$where['b.real_name']=array('LIKE','%'.urldecode(I('user_name')).'%');
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
        if(I('record_number')){
        	$where['a.record_number']=array('LIKE','%'.urldecode(I('record_number')).'%');
        }
        if(I('visit_time')){
        	$where['a.visit_time']=array('EQ',strtotime(I('visit_time')));
        }
        $is_send = I('is_send');
        if($is_send==='0'||$is_send==='1'){
        	$where['a.is_send']=array('EQ',$is_send);
        }
        $start=I('start');
        $end=I('end');
        if($start&&$end){
            //传了时间
            $end=strtotime($end);
            $start=strtotime($start);
            $where['a.visit_time']=array('BETWEEN',"$start,$end");
        }
		//获取当前页和每页显示数量
        $page=I('post.p')?I('post.p'):1;
        $p_len=I('post.p_len')?I('post.p_len'):10;
        $start=($page-1)*$p_len;
        //查询数据
        $count=$RecordModel->alias('a')->field('a.id')->join('left join mint_user as b on a.patient_id=b.id')->join('left join mint_user as c on a.doctor_id=c.id')->join('left join mint_clinic as d on a.clinic_id=d.id')->where($where)->count();
        $data=$RecordModel->alias('a')->field('a.*,b.real_name as patient_name,b.account,b.phone as patient_phone,c.name as doctor_name,c.account as doctor_account,d.clinic_name')->join('left join mint_user as b on a.patient_id=b.id')->join('left join mint_user as c on a.doctor_id=c.id')->join('left join mint_clinic as d on a.clinic_id=d.id')->where($where)->limit($start.','.$p_len)->order('id desc')->select();
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
    
    /**
     * 查询用户档案更新记录
     * baikeliang
     * 2016-12-16
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

    /**
     * 查询用户档案详情
     * baikeliang
     * 2016-12-16
     */
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
            echo '{"code": 1,"msg": "查询成功！","id": '.$res['id'].',"data": ['.htmlspecialchars_decode($res['content']).']}';
            //echo json_encode(array('code'=>1,'data'=>htmlspecialchars_decode($res['content']),'msg'=>'成功'));
        }else{
            //echo json_encode(array('code'=>1,'data'=>'','msg'=>'没有数据'));
            echo json_encode(array('code'=>0,'msg'=>'没有数据！'));
        }
    }
    
    /**
     * 查询用户是否已经有筛查报告
     * baikeliang
     * 2016-12-12
     */
    public function checkRecord(){
        $patient_id=I('patient_id');
        if(!$patient_id){
            echo json_encode(array('code'=>0,'msg'=>'缺少用户id！'));
            exit;
        }
		$RecordModel=D('Record');
        $where['patient_id']=array('EQ',$patient_id);
        $res=$RecordModel->where($where)->find();
        if($res){
        	echo json_encode(array('code'=>1,'msg'=>'该用户已经有初诊筛查报告！'));
        }else{
            echo json_encode(array('code'=>0,'msg'=>'该用户没有初诊筛查报告！'));
        }
    }

	//添加病例
	public function add(){
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
					//添加附件
					if($_POST['file_data']){
						$res=$model->addFile($id,$_POST['file_data']);
					}
					//添加成功
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
		echo json_encode(array('code'=>$code,'msg'=>$msg,'record_id'=>$id));
	}

	//修改病例
	public function edit(){
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

	//删除病例
	public function delete(){
		if(!$id=I('record_id')){
			echo json_encode(array('code'=>0,'msg'=>'缺少病例id'));
			exit;
		}
		$model = D('Record');
		if($model->delete($id)!==false){
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

	/**
	 * 发送初筛报告微信通知
	 * baikeliang
	 * 2016-12-8
	 */
	public function sendWeixinMsg(){
		if(!IS_POST){
			$code=0;
			$msg="请使用post请求！";
		}else{
			$keyids=I('record_ids');
			if(!$keyids){
				echo json_encode(array('code'=>0,'msg'=>'请选择初筛报告！'));
				exit;
			}
			if(is_array($keyids)){
				$keyids = implode(',',$keyids);
			}
			$RecordModel=D('Record');
			$where['a.is_send']=array('EQ',0);
			$where['a.id']=array('IN',$keyids);
			$data=$RecordModel->alias('a')->field('a.id,b.id as uid,b.openid,b.is_own')->join('left join mint_user as b on a.patient_id=b.id')->where($where)->select();
			if($data){
				$success = $fail = 0;
				$weixin=new Weixin();
				$template_id = C('WX_Report');
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
						 $url = C('DOMAIN_NAME')."/mintAdmin/index.php/Home/Index/weixinBase/type/record_info/id/".$value['id'];
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
						 $rs=$weixin->sendTemplateMsg($openid,$template_id,$url,$message);
						 \Think\Log::write('初筛报告微信模板消息记录：'.$rs,'INFO');
						 $rs = json_decode($rs);
						 if($rs->errcode&&$rs->errmsg!='ok'){
						 	$fail++;
						 	$code=0;
						 	$msg='微信模板消息发送失败！';
						 }else{
						 	$success++;
						 	$RecordModel->where('id='.$value['id'])->setField('is_send','1');
						 	$code=1;
						 	$msg='发送成功！';
						 }
					 }else{
					 	$fail++;
					 	$code=0;
					 	$msg='该用户没有绑定微信！';
					 }
				}
				/*if($success){
					$code=1;
					$msg='发送成功！';
				}else{
					$code=0;
					$msg='发送失败！';
				}*/
			}else{
				$code=0;
				$msg='该初筛报告已发送！';
			}
		}
		//返回json数据
		echo json_encode(array('code'=>$code,'msg'=>$msg));
	}

	//病人、医生列表
	public function userLst(){
		$identity_id=I('identity_id')?I('identity_id'):2;
		$userModel=D('User');
		$data=$userModel->field('id,name,account')->where('identity_id='.$identity_id)->select();
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

	//诊所列表
	public function clinicLst(){
		$clinicModel=D('Clinic');
		$data=$clinicModel->field('id,clinic_name')->select();
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

	//获取单个病例
	public function getOne(){
		if(!$id=I('record_id')){
			echo json_encode(array('code'=>0,'msg'=>'缺少病例id'));
			exit;
		}
		$model = D('Record');
		$data=$model->alias('a')->field('a.*,b.real_name as patient_name,b.account,b.phone as patient_phone,c.name as doctor_name,c.account as doctor_phone,d.clinic_name,a.label_id,a.label')->join('left join mint_user as b on a.patient_id=b.id')->join('left join mint_user as c on a.doctor_id=c.id')->join('left join mint_clinic as d on a.clinic_id=d.id')->where("a.id=$id")->find();
		//查找附件
		$fileModel=D('File');
		$file_data=$fileModel->field('file_name,file_path')->where("record_id=$id")->select();
		if($data){
			$data['visit_time']=date('Y-m-d',$data['visit_time']);
			//处理标签
            $data['label_id']=explode(',', $data['label_id']);
            $data['label']=substr($data['label'], 1,-1);
            $data['file_data']=$file_data;
            if($data['toothpic_id']){
            	$archivesModel=D('Archives');
            	$where['id']=array('EQ',$data['toothpic_id']);
            	$res=$archivesModel->where($where)->order('id asc')->find();
            	if($res){
            		$data['date']=date('Y-m-d',$res['create_time']);
            	}else{
            		$data['date']='';
            	}
            }else{
            	$data['date']='';
            }
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
            $_POST['type']=2;
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
        $data=$model->where('type=2')->select();
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