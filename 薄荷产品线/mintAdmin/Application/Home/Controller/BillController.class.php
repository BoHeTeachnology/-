<?php
namespace Home\Controller;
use Home\Controller;
use Tool\Weixin;

class BillController extends BaseController {

	//账单列表
	public function index(){
		$BillModel=D('Bill');
		//获取搜索条件
		if(I('patient_id')){
        	$where['a.patient_id']=array('EQ',I('patient_id'));
        }
		if(I('doctor_id')){
        	$where['a.doctor_id']=array('EQ',I('doctor_id'));
        }
        /*$status = I('status');
		if(isset($status)){
        	$where['a.status']=array('EQ',I('status'));
        }*/
		//获取当前页和每页显示数量
        $page=I('post.p')?I('post.p'):1;
        $p_len=I('post.p_len')?I('post.p_len'):10;
        $start=($page-1)*$p_len;
        //查询数据
        $count=$BillModel->alias('a')->field('a.*')->join('left join mint_user as b on a.patient_id=b.id')->join('left join mint_user as c on a.doctor_id=c.id')->join('left join mint_clinic as d on a.clinic_id=d.id')->where($where)->count();
        $data=$BillModel->alias('a')->field('a.*,b.real_name as patient_name,c.name as doctor_name,d.clinic_name')->join('left join mint_user as b on a.patient_id=b.id')->join('left join mint_user as c on a.doctor_id=c.id')->join('left join mint_clinic as d on a.clinic_id=d.id')->where($where)->limit($start.','.$p_len)->order('a.status,a.pay_time desc,a.id desc')->select();
		if($data){
        	foreach ($data as $key => $value) {
        		//处理时间
        		$data[$key]['visit_time']=date('Y-m-d',$value['visit_time']);
        	}
            $code=1;
            $msg='查询成功！';
        }else{
            $code=1;
            $msg='没有数据！';
        }

        echo json_encode(array('code'=>$code,'msg'=>$msg,'count'=>(int)$count,'data'=>$data));
	}

	//获取医生下的病人
	public function getPatient(){
		$BillModel=D('Bill');
		//获取搜索条件
        if(I('doctor_id')){
        	$where['a.doctor_id']=array('EQ',I('doctor_id'));
        }
        if(I('patient_name')){
        	$where['b.real_name']=array('LIKE','%'.urldecode(I('patient_name')).'%');
        }
        //获取当前页和每页显示数量
        $page=I('post.p')?I('post.p'):1;
        $p_len=I('post.p_len')?I('post.p_len'):10;
        $start=($page-1)*$p_len;
        //查询数据
        $count=$BillModel->alias('a')->field('a.patient_id')->join('left join mint_user as b on a.patient_id=b.id')->where($where)->group('patient_id')->select();
   		$count=count($count);
        $data=$BillModel->alias('a')->field('a.patient_id,b.real_name as patient_name')->join('left join mint_user as b on a.patient_id=b.id')->where($where)->group('patient_id')->limit($start.','.$p_len)->order('a.id desc')->select();
        if($data){
            $code=1;
            $msg='查询成功！';
        }else{
            $code=1;
            $msg='没有数据！';
        }

        echo json_encode(array('code'=>$code,'msg'=>$msg,'count'=>(int)$count,'data'=>$data));
	}

	//添加账单
	public function add(){
		if(!IS_POST){
			$code=0;
			$msg="请使用post请求！";
		}else{
			$appointment_id=$_POST['appointment_id'];
			if(!$appointment_id){
				echo json_encode(array('code'=>0,'msg'=>'缺少预约id'));
				die;
			}
			// 接收表单并且使用登录的规则验证表单
			$model = D('Bill');
			$visit_time = $_POST['visit_time'];
			$_POST['visit_time']=strtotime($visit_time);
			$_POST['create_time']=time();
			$_POST['bill_number']=$model->getCode8();
			$obj_data=$_POST['obj_data'];
			//获取项目信息、验证价格并计算总价
			if(is_array($obj_data)){
				$obj_data=$model->objInfo($obj_data);
				if(is_array($obj_data)){
					//计算实际支付的总金额
					$actual_money=(int)(round($obj_data[2]*$_POST['bill_discount'],5));//不能用需要保留的精度来计算
					if(abs($_POST['pay_money']-$obj_data[1])>0.001||$_POST['actual_money']!=$actual_money){
						echo json_encode(array('code'=>0,'msg'=>'计算总价错误'));
						die;
					}
				}else{
					echo json_encode(array('code'=>0,'msg'=>'计算价格错误'));
					die;
				}
			}else{
				echo json_encode(array('code'=>0,'msg'=>'项目信息缺失'));
				die;
			}
			if($model->create()){
				if($id=$model->add()){
					//添加成功
					if(is_array($obj_data[0])){
						$billProjectModel=D('BillProject');
						//把项目信息插入账单项目表
						foreach ($obj_data[0] as $key => $value) {
							$value['bill_id']=$id;
							$value['create_time']=time();
							$billProjectModel->add($value);
						}
					}
					//改变预约状态为已完成
					$appointmentModel=D('Appointment');
					$appointmentModel->status=2;
					$appointmentModel->where("id=$appointment_id")->save();
					$code=1;
					$msg='添加成功！';
					
					//发送微信模版消息
					$patient_id=I('patient_id');
					$usermodel = D('User');
					$data=$usermodel->field('openid')->where("id=".$patient_id)->find();
					if($data['openid']){
						//$app_data=$appointmentModel->field('a.id,a.reserve_number,a.patient_id,a.doctor_id,b.openid as p_openid,c.openid as d_openid,c.name,d.service_name,e.clinic_name')->alias('a')->join('left join '.C('DB_PREFIX').'user as b on a.patient_id=b.id')->join('left join '.C('DB_PREFIX').'user as c on a.doctor_id=c.id')->join('left join '.C('DB_PREFIX').'service as d on a.service_id=d.id')->join('left join '.C('DB_PREFIX').'clinic as e on a.clinic_id=e.id')->where($map)->find();
						
						$openid = $data['openid'];
						$template_id = C('WX_Bill');
						$url = C('DOMAIN_NAME')."/mintAdmin/index.php/Home/Index/weixinBase/type/bill_info/id/".$id;
						$message = '"first": {
			                       "value":"您的账单已经生成：",
			                       "color":"#173177"
			                   },
			                   "keyword1":{
			                       "value":"'.$_POST['bill_number'].'",
			                       "color":"#173177"
			                   },
			                   "keyword2": {
			                       "value":"'.$_POST['actual_money'].'元",
			                       "color":"#173177"
			                   },
			                   "keyword3": {
			                       "value":"'.$visit_time.'",
			                       "color":"#173177"
			                   },
			                   "keyword4": {
			                       "value":"'.$_POST['doctor_name'].'",
			                       "color":"#173177"
			                   },
			                   "keyword5": {
			                       "value":"'.$_POST['clinic_name'].'",
			                       "color":"#173177"
			                   },
			                   "remark":{
			                       "value":"感谢您使用薄荷牙医的服务，谢谢！",
			                       "color":"#173177"
			                   }';
						$weixin=new Weixin();
						$data=$weixin->sendTemplateMsg($openid,$template_id,$url,$message);
						\Think\Log::write('病人账单生成微信模板消息记录：'.json_encode($data),'INFO');
					}
				}else{
					//添加失败
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

	//获取单个账单
	public function getOne(){
		if(!$id=I('bill_id')){
			echo json_encode(array('code'=>0,'msg'=>'缺少账单id'));
			exit;
		}
		$model = D('Bill');
		$data=$model->alias('a')->field('a.*,b.real_name as patient_name,b.account as patient_phone,c.name as doctor_name,c.account as doctor_phone,d.clinic_name,d.clinic_address')->join('left join mint_user as b on a.patient_id=b.id')->join('left join mint_user as c on a.doctor_id=c.id')->join('left join mint_clinic as d on a.clinic_id=d.id')->where("a.id=$id")->find();
		if($data){
			$data['visit_time']=date('Y年m月d日 H:i',$data['visit_time']);
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

	//账单明细
	public function billDetail(){
		if(!$id=I('bill_id')){
			echo json_encode(array('code'=>0,'msg'=>'缺少账单id'));
			exit;
		}
        //查询账单总折扣和实际支付金额
        $billModel=D('Bill');
        $res=$billModel->field('id,bill_discount,actual_money,pay_money')->find($id);
		if($res){
			$model = D('BillProject');
			$data=$model->field('*')->where("bill_id=$id")->select();
			if($data){
				foreach ($data as $key => $value) {
					$data[$key]['count_price']=$value['price']*$value['number'];
					$data[$key]['count_actual_price']=$value['actual_price']*$value['number'];
		        }
				$res['bill_detail']=$data;
				$code=1;
				$msg='成功！';
			}else{
				$code=1;
				$msg='无明细';
			}		
		}else{
			$code=0;
			$msg='失败!';
		}

		//返回json数据
		echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$res));
	}

	//获取分类下的项目信息
	public function getCatPro(){
		if(!$cat_id=I('cat_id')){
			echo json_encode(array('code'=>0,'msg'=>'缺少分类id'));
			die;
		}
		$objModel=D('Project');
		$data=$objModel->where("cat_id=$cat_id")->order('`order` asc')->select();
		if($data){
            $code=1;
            $msg='查询成功！';
        }else{
            $code=1;
            $msg='没有数据！';
        }

		//返回json数据
		echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$data));
	}

	//获取所有项目分类
	public function getCatLst(){
		$catModel=D('Category');
		$where['belong']=array('EQ',1);
		$where['is_use']=array('EQ',1);
		$data=$catModel->where($where)->order('`order`')->select();
		if($data){
            $code=1;
            $msg='查询成功！';
        }else{
            $code=1;
            $msg='没有数据！';
        }

		//返回json数据
		echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$data));
	}

	/**
	 * 病人确认账单
	 * baikeliang
	 */
	public function patientConfirm(){
		if(!$id=I('bill_id')){
			echo json_encode(array('code'=>0,'msg'=>'缺少账单id！'));
			exit;
		}
		$BillModel=D('Bill');
		$where['id']=array('EQ',$id);
        $data=$BillModel->field('is_confirm')->where($where)->find();
        if($data){
        	if($data['is_confirm']==0){
        		$map['id']=$id;
	            $map['is_confirm']=1;
	            $rs = $BillModel->save($map);
	            if($rs){
	        		$code=1;
	        		$msg='账单确认成功！';
	            }else{
	        		$code=0;
	        		$msg='账单确认失败！';
	            }
        	}else{
        		$code=0;
        		$msg='账单状态有问题！';
        	}
        }else{
            $code=0;
            $msg='没有数据！';
        }
        echo json_encode(array('code'=>$code,'msg'=>$msg));
	}

	/**
	 * 获取账单数量
	 * baikeliang
	 */
	
	public function getBillNum(){
		$BillModel=D('Bill');
		//获取搜索条件
		if(I('patient_id')){
        	$where['patient_id']=array('EQ',I('patient_id'));
        }
		if(I('doctor_id')){
        	$where['doctor_id']=array('EQ',I('doctor_id'));
        }
        $status = I('status');
		if(isset($status)){
        	$where['status']=array('EQ',I('status'));
        }
        //查询数据
        $code=1;
        $msg='查询成功！';
        $count=$BillModel->where($where)->count();
        echo json_encode(array('code'=>$code,'msg'=>$msg,'count'=>(int)$count));
	}
}