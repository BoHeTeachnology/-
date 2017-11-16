<?php
namespace Admin\Controller;
use Admin\Controller;

class ClinicController extends BaseController {

	//诊所列表
	public function index(){
		$clinicModel=D('Clinic');
		//获取搜索条件
		if(I('id')){
        	$where['id']=array('EQ',I('id'));
        }
		if(I('clinic_brand')){
        	$where['clinic_brand']=array('LIKE','%'.urldecode(I('clinic_brand')).'%');
        }
		//获取当前页和每页显示数量
        $page=I('post.p')?I('post.p'):1;
        $p_len=I('post.p_len')?I('post.p_len'):10;
        $start=($page-1)*$p_len;
        //查询数据
        $count=$clinicModel->where($where)->count();
        $data=$clinicModel->where($where)->limit($start.','.$p_len)->order('sort,id desc')->select();
        if($data){
            $code=1;
            $msg='查询成功！';
        }else{
            $code=1;
            $msg='没有数据！';
        }

        echo json_encode(array('code'=>$code,'msg'=>$msg,'count'=>(int)$count,'data'=>$data));
	}

	//添加诊所
	public function add(){
		if(!IS_POST){
			$code=0;
			$msg="请使用post请求！";
		}else{
			// 接收表单并且使用登录的规则验证表单
			$model = D('Clinic');
			if(!$_POST['account']){
				echo json_encode(array('code'=>0,'msg'=>'缺少诊所账号！'));
				exit;
			}
			if($_POST['password']){
				$_POST['password']=md5(md5($_POST['password']));
			}else{
				echo json_encode(array('code'=>0,'msg'=>'缺少诊所密码！'));
				exit;
			}
			$_POST['create_time']=time();
			if($model->create()){
				if($model->add()){
					//添加成功
					$code=1;
					$msg='添加成功！';
				}else{
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

	//修改诊所
	public function edit(){
		if(!IS_POST){
			$code=0;
			$msg="请使用post请求！";
		}else{
			if(!I('post.id')){
				echo json_encode(array('code'=>0,'msg'=>'缺少诊所id'));
				exit;
			}
			if($_POST['password']){
				$_POST['password']=md5(md5($_POST['password']));
			}else{
				unset($_POST['password']);
			}
			// 接收表单并且使用登录的规则验证表单
			$model = D('Clinic');
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

	//删除诊所
	public function delete(){
		if(!$id=I('clinic_id')){
			echo json_encode(array('code'=>0,'msg'=>'缺少诊所id'));
			exit;
		}
		$model = D('Clinic');
		if($model->delete($id)!==false){
			$code=1;
			$msg='删除成功！';
		}else{
			$code=0;
			$msg='删除失败!';
		}

		//返回json数据
		echo json_encode(array('code'=>$code,'msg'=>$msg));
	}

	//获取单个诊所
	public function getOne(){
		if(!$id=I('clinic_id')){
			echo json_encode(array('code'=>0,'msg'=>'缺少诊所id'));
			exit;
		}
		$model = D('Clinic');
		$data=$model->find($id);
		if($data){
			$code=1;
			$msg='成功！';
		}else{
			$code=0;
			$msg='失败!';
		}

		//返回json数据
		echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$data));
	}

	//获取诊所空余椅位信息
	public function getFreeChair(){
		$id=$where['clinic_id']=I('clinic_id');
		if(!$id){
			echo json_encode(array('code'=>0,'msg'=>'缺少诊所id！'));
			exit;
		}
		$where['chair_date']=I('chair_date')?strtotime(I('chair_date')):strtotime("today");
		$model = D('Chairnum');
		$data=$model->where($where)->find();
		if($data){
			$code=1;
			$msg='成功！';
			$chair_nums = $data['chair_nums'];
		}else{
			$clinic_model = D('Clinic');
			$data=$clinic_model->find($id);
			if($data){
				$code=1;
				$msg='成功！';
				$chair_nums = $data['chair_nums'];
			}else{
				$code=0;
				$msg='失败!';
			}
		}

		//返回json数据
		echo json_encode(array('code'=>$code,'msg'=>$msg,'chair_nums'=>$chair_nums));
	}

	//修改诊所空余椅位信息
	public function modifyFreeChair(){
		$id=$where['clinic_id']=I('clinic_id');
		if(!$id){
			echo json_encode(array('code'=>0,'msg'=>'缺少诊所id！'));
			exit;
		}
		$chair_nums=I('chair_nums');
		if(!$chair_nums){
			echo json_encode(array('code'=>0,'msg'=>'缺少牙椅数量！'));
			exit;
		}
		$chair_date=I('chair_date');
		if(!$chair_date){
			echo json_encode(array('code'=>0,'msg'=>'缺少时间！'));
			exit;
		}
		$_POST['chair_date']=$where['chair_date']=strtotime($chair_date);
		$_POST['create_time']=time();
		
		$model = D('Chairnum');
		$data=$model->where($where)->find();
		if($data){
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
		}else{
			if($model->create()){
				if($model->add()){
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

	//设备信息列表
	public function equipmentList(){
		$id=$where['clinic_id']=I('clinic_id');
		if(!$id){
			echo json_encode(array('code'=>0,'msg'=>'缺少诊所id！'));
			exit;
		}
		$model=D('Equipment');
		//获取当前页和每页显示数量
        $page=I('post.p')?I('post.p'):1;
        $p_len=I('post.p_len')?I('post.p_len'):10;
        $start=($page-1)*$p_len;
        //查询数据
        $count=$model->where($where)->count();
        $data=$model->field('id,clinic_id,brand,country,life_year,equipment_nums,tel,equipment_pic')->where($where)->limit($start.','.$p_len)->order('id desc')->select();
        if($data){
            $code=1;
            $msg='查询成功！';
        }else{
            $code=1;
            $msg='没有数据！';
        }

        echo json_encode(array('code'=>$code,'msg'=>$msg,'count'=>(int)$count,'data'=>$data));
	}

	//添加设备信息
	public function addEquipment(){
		if(!IS_POST){
			$code=0;
			$msg="请使用post请求！";
		}else{
			// 接收表单并且使用登录的规则验证表单
			$model = D('Equipment');
			$_POST['create_time']=time();
			if($model->create()){
				if($model->add()){
					//添加成功
					$code=1;
					$msg='添加成功！';
				}else{
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

	//修改设备信息
	public function editEquipment(){
		if(!IS_POST){
			$code=0;
			$msg="请使用post请求！";
		}else{
			if(!I('post.id')){
				echo json_encode(array('code'=>0,'msg'=>'缺少设备信息id！'));
				exit;
			}
			// 接收表单并且使用登录的规则验证表单
			$model = D('Equipment');
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

	//删除设备信息
	public function deleteEquipment(){
		if(!$id=I('id')){
			echo json_encode(array('code'=>0,'msg'=>'缺少设备信息id！'));
			exit;
		}
		$model = D('Equipment');
		if($model->delete($id)!==false){
			$code=1;
			$msg='删除成功！';
		}else{
			$code=0;
			$msg='删除失败!';
		}

		//返回json数据
		echo json_encode(array('code'=>$code,'msg'=>$msg));
	}

	//获取单个设备信息
	public function getOneEquipment(){
		if(!$id=I('id')){
			echo json_encode(array('code'=>0,'msg'=>'缺少设备信息id！'));
			exit;
		}
		$model = D('Equipment');
		$data=$model->field('id,clinic_id,brand,country,life_year,equipment_nums,tel,equipment_pic')->find($id);
		if($data){
			$code=1;
			$msg='成功！';
		}else{
			$code=0;
			$msg='失败!';
		}

		//返回json数据
		echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$data));
	}

	//耗材信息列表
	public function materialList(){
		$id=$where['clinic_id']=I('clinic_id');
		if(!$id){
			echo json_encode(array('code'=>0,'msg'=>'缺少诊所id！'));
			exit;
		}
		$model=D('Material');
		//获取当前页和每页显示数量
        $page=I('post.p')?I('post.p'):1;
        $p_len=I('post.p_len')?I('post.p_len'):10;
        $start=($page-1)*$p_len;
        //查询数据
        $count=$model->where($where)->count();
        $data=$model->field('id,clinic_id,material_name,material_nums,material_unit,material_pic')->where($where)->limit($start.','.$p_len)->order('id desc')->select();
        if($data){
            $code=1;
            $msg='查询成功！';
        }else{
            $code=1;
            $msg='没有数据！';
        }

        echo json_encode(array('code'=>$code,'msg'=>$msg,'count'=>(int)$count,'data'=>$data));
	}

	//添加耗材信息
	public function addMaterial(){
		if(!IS_POST){
			$code=0;
			$msg="请使用post请求！";
		}else{
			// 接收表单并且使用登录的规则验证表单
			$model = D('Material');
			$_POST['create_time']=time();
			if($model->create()){
				if($model->add()){
					//添加成功
					$code=1;
					$msg='添加成功！';
				}else{
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

	//修改耗材信息
	public function editMaterial(){
		if(!IS_POST){
			$code=0;
			$msg="请使用post请求！";
		}else{
			if(!I('post.id')){
				echo json_encode(array('code'=>0,'msg'=>'缺少耗材信息id！'));
				exit;
			}
			// 接收表单并且使用登录的规则验证表单
			$model = D('Material');
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

	//删除耗材信息
	public function deleteMaterial(){
		if(!$id=I('id')){
			echo json_encode(array('code'=>0,'msg'=>'缺少耗材信息id！'));
			exit;
		}
		$model = D('Material');
		if($model->delete($id)!==false){
			$code=1;
			$msg='删除成功！';
		}else{
			$code=0;
			$msg='删除失败!';
		}

		//返回json数据
		echo json_encode(array('code'=>$code,'msg'=>$msg));
	}

	//获取单个耗材信息
	public function getOneMaterial(){
		if(!$id=I('id')){
			echo json_encode(array('code'=>0,'msg'=>'缺少耗材信息id！'));
			exit;
		}
		$model = D('Material');
		$data=$model->field('id,clinic_id,material_name,material_nums,material_unit,material_pic')->find($id);
		if($data){
			$code=1;
			$msg='成功！';
		}else{
			$code=0;
			$msg='失败!';
		}

		//返回json数据
		echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$data));
	}

	//获取单个诊所预约信息
	public function getClinicOrder(){
		$model=D('Appointment');
		$id=$where['a.clinic_id']=I('clinic_id');
		if(!$id){
			echo json_encode(array('code'=>0,'msg'=>'缺少诊所id！'));
			exit;
		}
		$visit_date=I('visit_date');
		if(!$visit_date){
			echo json_encode(array('code'=>0,'msg'=>'缺少时间！'));
			exit;
		}
		$where['a.visit_date']=strtotime($visit_date);
		//获取当前页和每页显示数量
        $page=I('post.p')?I('post.p'):1;
        $p_len=I('post.p_len')?I('post.p_len'):10;
        $start=($page-1)*$p_len;
        //查询数据
        $count=$model->alias('a')->where($where)->count();
        $all_data=$model->alias('a')->where($where)->select();
        $data=$model->alias('a')->field('a.*,b.name,b.phone')->join('left join mint_user as b on a.doctor_id=b.id')->where($where)->limit($start.','.$p_len)->order('a.id desc')->select();
        //查询服务项目
        $service_model=D('Service');
        $service_data=$service_model->field('id,service_name,logo_url')->select();
        foreach($service_data as $k1 => $v1){
          	$service_data[$k1]['count']=0;
        }
        //查询诊所医生
        $doctor_model=D('Dttime');
        $map1['a.clinic_id'] = I('clinic_id');
        $doctor_data=$doctor_model->alias('a')->field('a.doctor_id,b.name,b.photo')->join('left join mint_user as b on a.doctor_id=b.id')->where($map1)->group('a.doctor_id')->select();
        foreach($doctor_data as $k2 => $v2){
            $doctor_data[$k2]['count']=0;
        }
        //查询账目
        $bill_model=D('Bill');
        $map['visit_time'] = array('BETWEEN',strtotime($visit_date).",".(strtotime($visit_date)+24*60*60));
        $bill_data=$bill_model->field('status,sum(actual_money) as pay_money')->where($map)->group('status')->select();
        $total_money = $arrival_money = 0;
        foreach($bill_data as $k => $v){
        	$total_money = $total_money + $v['pay_money'];
        	if($v['status']==1){
        		$arrival_money = $v['pay_money'];
        	}
        }
        if($data){
            $code=1;
            $msg='查询成功！';
            foreach ($data as $key=>$value){
            	$data[$key]['time']=date('H:i',$value['visit_time']);
            	foreach ($service_data as $k3=>$v3){
            		if($value['service_id']==$v3['id']){
            			$data[$key]['service_name']=$v3['service_name'];
            		}
            	}
            }
            foreach ($all_data as $key=>$value){
            	foreach ($service_data as $k3=>$v3){
            		 if($value['service_id']==$v3['id']){
            		 	$service_data[$k3]['count']++;
            		 }
            	}
            	foreach ($doctor_data as $k4=>$v4){
            		 if($value['doctor_id']==$v4['doctor_id']){
            		 	$doctor_data[$k4]['count']++;
            		 }
            	}
            }
            //给医生数组排序
            usort($doctor_data, function($a, $b) {
	            $al = $a['count'];
	            $bl = $b['count'];
	            if ($al == $bl)
	                return 0;
	            return ($al > $bl) ? -1 : 1;
	        });
        }else{
            $code=1;
            $msg='没有数据！';
        }

        echo json_encode(array('code'=>$code,'msg'=>$msg,'total_money'=>$total_money,'arrival_money'=>$arrival_money,'count'=>(int)$count,'data'=>$data,'service_data'=>$service_data,'doctor_data'=>$doctor_data));
	}
	
	//获取诊所预约概况
	public function getClinicSurvey(){
		$clinicModel=D('Clinic');
		//获取搜索条件
		if(I('clinic_brand')){
        	$where['clinic_brand']=array('LIKE','%'.urldecode(I('clinic_brand')).'%');
        }
		//获取当前页和每页显示数量
		$page=I('post.p')?I('post.p'):1;
		$p_len=I('post.p_len')?I('post.p_len'):10;
		$start=($page-1)*$p_len;
		//查询数据
		$count=$clinicModel->where($where)->count();
		$data=$clinicModel->field('id,clinic_brand,clinic_name,chair_nums')->where($where)->limit($start.','.$p_len)->order('id desc')->select();
		//日期
		$visit_date=I('visit_date')?strtotime(I('visit_date')):strtotime("today");
		$date=array();
		for ($i=0;$i<7;$i++){
			$date[$i]['w'] = date('N',($visit_date+$i*24*60*60));
			$date[$i]['d'] = date('m月d日',($visit_date+$i*24*60*60));
			$date[$i]['day'] = date('Y-m-d',($visit_date+$i*24*60*60));
			$date[$i]['time'] = $visit_date+$i*24*60*60;
		}
		if($data){
			$code=1;
			$msg='查询成功！';
			//查询预约数
			$app_model=D('Appointment');
			$map['visit_date'] = array('BETWEEN',($visit_date-1).",".($visit_date+7*24*60*60+1));
			$app_data=$app_model->field('clinic_id,visit_date,COUNT(id) AS COUNT')->where($map)->group('clinic_id,visit_date')->select();
			//查询医生
			$doctor_model=D('Dttime');
			$s_date=I('visit_date')?I('visit_date'):date('Y-m-d',time());
			$e_date=I('visit_date')?date('Y-m-d',$visit_date+7*24*60*60):date('Y-m-d',time()+7*24*60*60+1);
			$map1['visit_date'] = array('BETWEEN',$s_date.",".$e_date);
			$doctor_data=$doctor_model->field('GROUP_CONCAT(doctor_id) as doctor_ids,visit_date,clinic_id')->where($map1)->group('clinic_id,visit_date')->select();
			foreach ($doctor_data as $k=>$v){
				$map2['doctor_id'] = array('in',$v['doctor_ids']);
				$map2['visit_date'] = array('eq',$v['visit_date']);
				//查询医生详情
				$doctor_info=$doctor_model->field('visit_date,start_time,end_time,time_span')->where($map2)->select();
				$doctor_count = 0;
				foreach ($doctor_info as $k1=>$v1){
					$start_time=strtotime($v1['visit_date'].' '.$v1['start_time']);
					$end_time=strtotime($v1['visit_date'].' '.$v1['end_time']);
					$doctor_count = $doctor_count+($end_time-$start_time)/$v1['time_span']/60+1;
				}
				$doctor_data[$k]['count'] = $doctor_count;
				$doctor_data[$k]['visit_date1'] = strtotime($v['visit_date']);
			}
			foreach ($app_data as $k2=>$v2){
				$app_data[$k2]['full']=0;
				foreach ($doctor_data as $k3=>$v3){
					if($v2['clinic_id']==$v3['clinic_id'] && $v2['visit_date']==$v3['visit_date1']){
						if($v2['count']<$v3['count']){
							$app_data[$k2]['full']=0;
						}else{
							$app_data[$k2]['full']=1;
						}
					}
				}
				$app_data[$k2]['visit_date1']=date('Y-m-d',$v2['visit_date']);
			}
			//查询椅位数
			$map2['chair_date'] = array('BETWEEN',($visit_date-1).",".($visit_date+7*24*60*60+1));
			$chair_model = D('Chairnum');
			$chair_data=$chair_model->field('clinic_id,chair_nums,chair_date')->where($map2)->select();
			//拼装数据
			foreach ($data as $key=>$value){
				$day_data=array();
				foreach ($date as $k4=>$v4){
					$day_data[$k4]['day']=$v4['day'];
					$day_data[$k4]['app_num']=0;
					$day_data[$k4]['chair_num']=$value['chair_nums'];
					$day_data[$k4]['full']=0;
					foreach ($app_data as $k5=>$v5){
						if($value['id']==$v5['clinic_id'] && $v4['time']==$v5['visit_date']){
							$day_data[$k4]['app_num']=$v5['count'];
							$day_data[$k4]['full']=$v5['full'];
						}
					}
					foreach ($chair_data as $k6=>$v6){
						if($value['id']==$v6['clinic_id'] && $v4['time']==$v5['chair_date']){
							$day_data[$k4]['chair_num']=$v6['chair_nums'];
						}
					}
				}
				$data[$key]['day_data'] = $day_data;
			}
		}else{
			$code=1;
			$msg='没有数据！';
		}
		//echo '<pre>';
		//print_r($data);exit;
		echo json_encode(array('code'=>$code,'msg'=>$msg,'count'=>(int)$count,'data'=>$data,'date'=>$date));
	}
}