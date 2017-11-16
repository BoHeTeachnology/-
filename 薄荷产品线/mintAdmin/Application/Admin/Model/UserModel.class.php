<?php
namespace Admin\Model;
use Think\Model;
 
 //用户模型类
class UserModel extends Model{

    protected $_validate = array(
        array('mint_name', 'require', '薄荷号不能为空！', 1, 'regex',2),
    );
	
	//登录验证
	public function login(){
		// 先根据用户名查询数据库
		$username = I('post.account');
		$password = I('post.password');
		$user=$this->where(array(
			'account' => array('eq', $username)
		))->find();
		if($user){
			//账号未启用
			if($user['is_use']!=1){
				$this->error = '该账号已被禁用！';
				return FALSE;
			}
			//普通用户不能登录后台
			if($user['role_id']==1){
				$this->error = '该账号没有登录权限！';
				return FALSE;
			}
			if($user['password'] == md5(md5($password))){
				// 如果登录成功就把会员的ID，会员的名称存到SESSION中
				session('userId', $user['id']);
				session('userName', $user['account']);
				return TRUE;
			}else{
				$this->error = '密码不正确！';
				return FALSE;
			}
		}else{
			$this->error = '账号不存在！';
			return FALSE;
		}
	}

	//判断用户名是否存在
    public function checkUser($account){
        $where['account']=$account;
        $count=$this->where($where)->count();
        if($count>0){
        	return false;
        }else{
            return true;
        }     
    }

    //随机生成不重复的六位邀请码
    public function getCode6(){
    	$code=rand(100000,999999);
    	//查询数据库该邀请码是否存在
    	$res=$this->where("invite_code='$code'")->select();
    	if($res){
    		$this->getCode6();
    	}else{
    		return $code;
    	}
    }

    //添加服务项目
    public function addService($id,$service_ids){
    	$dtsvModel=D('DoctorService');
        //循环添加新的服务项目
        foreach ($service_ids as $key => $value) {
            $data['doctor_id']=$id;
            $data['service_id']=$value;
            $data['create_time']=time();
            $dtsvModel->add($data);
        }
    }

    //编辑服务项目
    public function editService($id,$service_ids){
    	$dtsvModel=D('DoctorService');
    	//开启事物
    	$dtsvModel->startTrans();
    	//删除原有服务项目
        $dtsvModel->where('doctor_id='.$id)->delete();
        //循环添加新的服务项目
		$success = $fail = 0;
        foreach ($service_ids as $key => $value) {
            $data['doctor_id']=$id;
            $data['service_id']=$value;
            $data['create_time']=time();
            if($dtsvModel->add($data)){
            	$success++;
            }else{
            	$fail++;
            	break;
            }
        }
        //根据结果提交事物或者回滚事物
        if($fail){
        	$dtsvModel->rollback();
        	return false;
        }else{
        	$dtsvModel->commit();
        	return true;
        }
    }

    //医生单个月出诊日期及诊所添加
    public function visitDateAdd($doctor_id,$clinic_id,$visit_data){
            $model=D('Dttime');
            //循环添加数据
            //开启事物
            $model->startTrans();
            foreach ($visit_data as $key => $value) {
                $data['visit_date']=$value['visit_date'];
                $data['clinic_id']=$clinic_id;
                $data['doctor_id']=$doctor_id;
                $data['type']=$value['type']?$value['type']:1;
                $data['create_time']=time();
                if($value['start_time']){
                    $data['start_time']=$value['start_time'];
                }
                if($value['end_time']){
                    $data['end_time']=$value['end_time'];
                }
                if($model->add($data)){
                    $code=1;
                    $msg='添加成功';
                }else{
                    $code=0;
                    $msg='添加失败';
                    break;
                }
            }
            //根据结果提交事物或者回滚事物
            if($code){
                $model->commit();
            }else{
                $model->rollback();
            }
    }

    //医生出诊日期及诊所添加
    public function addVisitDate($doctor_id,$visit_data){
            $model=D('Dttime');
            //开启事物
            $model->startTrans();
			$success = $fail = 0;
            foreach ($visit_data as $key => $value) {
                $data['doctor_id']=$doctor_id;
                $data['clinic_id']=$value['clinic_id'];
                $data['visit_date']=$value['visit_date'];
                $data['start_time']=$value['start_time'];
                $data['end_time']=$value['end_time'];
                $data['time_span']=$value['time_span']?$value['time_span']:1;
                $data['type']=$value['type']?$value['type']:1;
                $data['create_time']=time();
                if($model->add($data)){
					$success++;
                }else{
					$fail++;
                    break;
                }
            }
            //根据结果提交事物或者回滚事物
            if($fail){
                $model->rollback();
            	return false;
            }else{
                $model->commit();
                return true;
            }
    }

    //医生出诊日期及诊所编辑
    public function editVisitDate($doctor_id,$visit_data,$month){
            $model=D('Dttime');
            //开启事物
            $model->startTrans();
            //先删除原有出诊时间
            foreach ($month as $key => $value) {
            	$where['doctor_id']=array('EQ',$doctor_id);
            	$where['visit_date']=array('LIKE',$value.'%');
            	$model->where($where)->delete();
            }
			$success = $fail = 0;
            foreach ($visit_data as $key => $value) {
                $data['doctor_id']=$doctor_id;
                $data['clinic_id']=$value['clinic_id'];
                $data['visit_date']=$value['visit_date'];
                $data['start_time']=$value['start_time'];
                $data['end_time']=$value['end_time'];
                $data['time_span']=$value['time_span']?$value['time_span']:1;
                $data['type']=$value['type']?$value['type']:1;
                $data['create_time']=time();
                if($model->add($data)){
					$success++;
                }else{
					$fail++;
                    break;
                }
            }
            //根据结果提交事物或者回滚事物
            if($fail){
                $model->rollback();
            	return false;
            }else{
                $model->commit();
                return true;
            }
    }

    //生成薄荷号
    public function createBh($length = 6){
        $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        $str = "bh";
        for ($i = 0; $i < $length; $i++) {
          $str .= substr($chars, mt_rand(0, strlen($chars) - 1), 1);
        }
        //查询数据库该邀请码是否存在
        $res=$this->where("mint_name='$str'")->select();
        if($res){
            $this->createBh();
        }else{
            return $str;
        }
    }

	//判断薄荷名是否存在
    public function checkMintName($mint_name,$uid=0){
    	if($uid){
    		$where['id']=array('neq', $uid);
    	}
        $where['mint_name']=array('eq', $mint_name);
        $count=$this->where($where)->count();
        if($count>0){
        	return true;
        }else{
            return false;
        }     
    }

	//判断登录手机号是否存在
    public function checkAccount($account,$uid=0){
    	if($uid){
    		$where['id']=array('neq', $uid);
    	}
    	$where['account']=$account;
        $count=$this->where($where)->count();
        if($count>0){
        	return true;
        }else{
            return false;
        }     
    }

    //生成医生二维码,并插入数据库
    public function getQrCode($id){
        Vendor('phpqrcode.phpqrcode');
        //定义纠错级别
        $errorLevel = "L";
        //定义生成图片宽度和高度;默认为3
        $size = "11";
        //生成网址类型
        $url=C('DOMAIN_NAME').'/doctorasist/?id='.$id;
        $str=md5($id.'bhmd5erweima');
        $filename='./up/qr_code_img/'.$str.'.png';
        $QRcode=new \QRcode();
        $res=$QRcode->png($url, $filename, $errorLevel, $size);
        if(false!==$this->where("id=".$id)->setField('tow_code','/mintAdmin'.substr($filename,1))){
            return true;
        }else{
            return false;
        }
    }
}