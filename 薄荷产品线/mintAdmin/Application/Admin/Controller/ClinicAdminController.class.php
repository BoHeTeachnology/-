<?php
namespace Admin\Controller;
use Think\Controller;

class ClinicAdminController extends Controller {

    /**
	 * 登录
	 * baikeliang
	 */
	public function login(){
		$code=1;
		if(!IS_POST){
			$code=0;
			$msg="请使用post请求！";
		}else{
			//验证参数是否完整
			if(!I('post.account')){
				$code=0;
				$msg='账号不能为空！';
			}
			if(!I('post.password')){
				$code=0;
				$msg='密码不能为空！';
			}
			// 接收表单并且使用登录的规则验证表单
			if($code){
				$model = D('Clinic');
				if($model->create()){
					if($model->login()){
						$msg='登录成功！';
					}else{
						//登录验证失败
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

    /**
	 * 退出
	 * baikeliang
	 */
	public function logOut(){
		// 清空session
		session('clinicId', null);
		session('clinicName', null);
		//返回json数据
		$code=1;
		$msg='退出成功！';
		echo json_encode(array('code'=>$code,'msg'=>$msg));
	}
	
    /**
	 * 获取诊所信息
	 * baikeliang
	 */
	public function getClinicInfo(){
		$code=0;
		//判断用户是否登录
		if(!session('clinicId')){
			$msg='没有登录！';
			echo json_encode(array('code'=>$code,'msg'=>$msg));
			exit;
		}
		$info['id'] = session('clinicId');
		$model=D('Clinic');
		$data=$model->field('id,clinic_brand,clinic_name')->where($info)->find();
		echo json_encode(array('code'=>1,'msg'=>'获取诊所信息成功！','data'=>$data));
		exit;
	}
    
    /**
     * 修改密码
     * baikeliang
     */
    public function changePwd(){
        $id = session('clinicId');
        if(!$id){
            echo json_encode(array('code'=>0,'msg'=>'诊所未登录！'));
            exit;
        }
        if(!IS_POST){
        	echo json_encode(array('code'=>0,'msg'=>'请使用post请求！'));
            exit;
        }
        $old_pwd=I('old_pwd');
        $new_pwd=I('new_pwd');
        $com_pwd=I('com_pwd');
        if(!$old_pwd){
           echo json_encode(array('code'=>0,'msg'=>'旧密码不能为空！')); 
           die;
        }
        if(!$new_pwd){
           echo json_encode(array('code'=>0,'msg'=>'新密码不能为空！')); 
           die;
        }
        if(!$com_pwd){
           echo json_encode(array('code'=>0,'msg'=>'确认密码不能为空！')); 
           die;
        }
        if($new_pwd!=$com_pwd){
           echo json_encode(array('code'=>0,'msg'=>'两次密码不一致！')); 
           die;
        }
		$model=D('Clinic');
        $info=$model->find($id);
        if($info['password']==md5(md5($old_pwd))){
           	if($old_pwd==$new_pwd){
            	echo json_encode(array('code'=>1,'msg'=>'修改密码成功！'));
            }else{
	            //修改密码
	            $data['id']=$id;
	            $data['password']=md5(md5($new_pwd));
	            if($model->save($data)){
	                echo json_encode(array('code'=>1,'msg'=>'修改密码成功！'));
	            }else{
	                echo json_encode(array('code'=>0,'msg'=>'修改密码失败！'));
	            }
           	}
        }else{
            echo json_encode(array('code'=>0,'msg'=>'旧密码错误！'));
        }
        exit;
    }
    
	/**
     * 添加意见反馈
     * baikeliang
     */
	public function addSuggestion(){
		if(!IS_POST){
			$code=0;
			$msg="请使用post请求！";
		}else{
			$id = session('clinicId');
	        if(!$id){
	            echo json_encode(array('code'=>0,'msg'=>'诊所未登录！'));
	            exit;
	        }
			$content=I('post.content');
			if(!$content){
				echo json_encode(array('code'=>0,'msg'=>'缺少反馈内容！'));
				exit;
			}
			$type = I('post.type')?I('post.type'):2;
			// 接收表单并且使用登录的规则验证表单
			$model = D('Suggestion');
			$_POST['create_time']=time();
			$_POST['type']=$type;
			$_POST['clinic_id']=$id;
			if($model->create()){
				if($model->add()){
					//添加成功
					$code=1;
					$msg='反馈成功！';
				}else{
					//登录验证失败
					$code=0;
					$msg='反馈失败!';
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

    /**
	 * 修改诊所信息
	 * baikeliang
	 */
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

    /**
	 * 获取单个诊所信息
	 * baikeliang
	 */
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

    /**
	 * 获取诊所空余椅位信息
	 * baikeliang
	 */
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

    /**
	 * 修改诊所空余椅位信息
	 * baikeliang
	 */
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
			if($model->where($where)->setField('chair_nums',$chair_nums)!==false){
				$code=1;
				$msg='修改成功！';
			}else{
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
		$where['status'] = array('NEQ',4);
		$id=$where['a.clinic_id']=I('clinic_id')?I('clinic_id'):session('clinicId');
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
        $map1['a.clinic_id'] = $id;
        $doctor_data=$doctor_model->alias('a')->field('a.doctor_id,b.name,b.photo,b.position')->join('left join mint_user as b on a.doctor_id=b.id')->where($map1)->group('a.doctor_id')->select();
        foreach($doctor_data as $k2 => $v2){
            $doctor_data[$k2]['count']=0;
        }
        //查询账目
        $bill_model=D('Bill');
        $map['clinic_id'] = $id;
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
        }else{
            $code=1;
            $msg='没有数据！';
        }
            //给医生数组排序
            usort($doctor_data, function($a, $b) {
	            $al = $a['count'];
	            $bl = $b['count'];
	            if ($al == $bl)
	                return 0;
	            return ($al > $bl) ? -1 : 1;
	        });

        echo json_encode(array('code'=>$code,'msg'=>$msg,'total_money'=>$total_money,'arrival_money'=>$arrival_money,'count'=>(int)$count,'data'=>$data,'service_data'=>$service_data,'doctor_data'=>$doctor_data));
	}
}