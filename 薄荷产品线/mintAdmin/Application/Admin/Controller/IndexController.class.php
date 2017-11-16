<?php
namespace Admin\Controller;
use Think\Controller;
use Tool\Weixin;
//use Tool\PHPExcel;

class IndexController extends Controller {
	/*public function __construct(){
		// 先调用父类的构造函数
		parent::__construct();
		$code=0;
		//判断用户是否登录
		if(!session('userId')){
			$msg='没有登录！';
			echo json_encode(array('code'=>$code,'msg'=>$msg));
			exit;
		}
	}*/
	
	//获取用户信息
	public function getUserInfo(){
		$code=0;
		//判断用户是否登录
		if(!session('userId')){
			$msg='没有登录！';
			echo json_encode(array('code'=>$code,'msg'=>$msg));
			exit;
		}
		$info['id'] = session('userId');
		$model=M('User');
		$data=$model->where($info)->find();
		//获取用户权限
		if($data['account']=='admin'){
			$appmodel=M('App');
			$pris=$appmodel->field('id,app_name,app_uri,app_url,parent_id')->order('sort')->select();
		}else{
			$where['a.id'] = $info['id'];
			$usermodel=M('User');
			$pris=$usermodel->field('c.id,c.app_name,c.app_uri,c.app_url,c.parent_id')->alias('a')->join(C('DB_PREFIX').'role_app b on a.role_id=b.role_id')->join(C('DB_PREFIX').'app c on b.app_id=c.id')->where($where)->order('c.sort')->select();
		}
		//组合返回数组
		foreach ($pris as $kye => $value){
			if($value['parent_id']==0){
				$value['children']=array();
				foreach ($pris as $k => $v){
					if($value['id']==$v['parent_id']){
						$value['children'][]=$v;
					}
				}
				$data1[]=$value;
			}
		}
		echo json_encode(array('code'=>1,'msg'=>'获取用户信息成功！','data'=>$data,'app'=>$data1));
		exit;
	}
	
    //上传头像
    public function upPhoto(){
    	if(!$_FILES['photo']){
    		echo json_encode(array('code'=>0,'msg'=>'请选择上传图片！'));
    		exit;
    	}
        $config = array(    
        'maxSize'    =>    2*1024*1024,
        'rootPath'   =>    C('ROOT_IMG_PATH'),
        'savePath'   =>    date('Ymd').'/',    
        'saveName'   =>    array('uniqid',''),    
        'exts'       =>    array('jpg', 'gif', 'png', 'jpeg'),    
        'autoSub'    =>    false,    
        );
        $upload = new \Think\Upload($config);// 实例化上传类
        $info = $upload->uploadOne($_FILES['photo']);
        if(!$info){
            echo json_encode(array('code'=>0,'msg'=>$upload->getError()));
        }else{
            //释放上传类对象
            unset($upload);
            //拼接图片服务器路径
            $img=C('VIEW_IMG_PATH').$info['savepath'].$info['savename'];
            echo json_encode(array('code'=>1,'msg'=>'上传成功！','photo_path'=>$img));
        }
        exit;
    }

    //base64上传头像
    public function imgBase64Up(){
        //判断是否是图片、获得文件名后缀
        if(!$str=I('post.img')){
            echo json_encode(array('code'=>0,'msg'=>'缺少参数img！'));
            die;
        }
        $str1=explode(',',$str);
        $str2=explode(';',$str1[0]);
        $str3=explode('/',$str2[0]);
        $arr=array('data:image/png','data:image/jpg','data:image/jpeg','data:image/bmp');
        if(!in_array($str2[0], $arr)){
            $code=0;
            $msg='图片格式不正确！';
        }else{
            $file_name=uniqid('photo_');
            $sub_path=date('Ymd');
            $file_path=C('ROOT_IMG_PATH').$sub_path.'/';
            if(!is_dir($file_path))
                mkdir($file_path);
            $res=file_put_contents($file_path.$file_name.'.'.$str3[1], base64_decode($str1[1]));
            if($res!==false){
                $img=C('VIEW_IMG_PATH').$sub_path.'/'.$file_name.'.'.$str3[1];
                $code=1;
                $msg='上传成功！';
            }else{
                $code=0;
                $msg='上传失败！';
            }
        }
        echo json_encode(array('code'=>$code,'msg'=>$msg,'photo_path'=>$img));
        exit;
    }

    //角色用户列表
    public function userList(){
		$code=0;
		//判断用户是否登录
		if(!session('userId')){
			$msg='没有登录！';
			echo json_encode(array('code'=>$code,'msg'=>$msg));
			exit;
		}
    	if(!$id=I('role_id')){
    		echo json_encode(array('code'=>0,'msg'=>'缺少角色id！'));
    		exit;
    	}
        $usermodel=D('User');
        $data=$usermodel->field('id,account,name')->where('role_id='.$id)->select();
        if($data){
            $code=1;
            $msg='查询成功！';
        }else{
            $code=1;
            $msg='没有数据！';
        }
        echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$data));
        exit;
    }
    
    //上传文件
    public function upFile(){
    	if(!$_FILES['file']){
    		echo json_encode(array('code'=>0,'msg'=>'请选择上传文件！'));
    		exit;
    	}
        $config = array(
        'maxSize'    =>    15*1024*1024,
        'rootPath'   =>    C('ROOT_FILE_PATH'),
        'savePath'   =>    date('Ymd').'/',
        'saveName'   =>    array('uniqid',''),
        'exts'       =>    array('pdf','doc','docx','ppt','pptx','xls','xlsx','txt','jpeg','jpg','gif','png'),
        'autoSub'    =>    false,
        );
        $upload = new \Think\Upload($config);// 实例化上传类
        $info = $upload->uploadOne($_FILES['file']);
        
        if(!$info){
            echo json_encode(array('code'=>0,'msg'=>$upload->getError()));
        }else{
            //释放上传类对象
            unset($upload);
            //拼接图片服务器路径
            $file_path=C('VIEW_FILE_PATH').$info['savepath'].$info['savename'];
            echo json_encode(array('code'=>1,'msg'=>'上传成功！','file_path'=>$file_path));
        }
    }

    //获取顶级菜单分类列表
    public function getOneApp(){
		$code=0;
		//判断用户是否登录
		if(!session('userId')){
			$msg='没有登录！';
			echo json_encode(array('code'=>$code,'msg'=>$msg));
			exit;
		}
        $model=D('App');
        $data=$model->field('id,app_name')->where('parent_id=0')->select();
        if($data){
        	$code=1;
        	 $msg='查询成功！';
        }else{
        	$code=1;
        	$msg='没有数据！';
        }
        echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$data));
    }

	//病人、医生列表
	public function userLst(){
		//判断用户是否登录
		if(!session('userId')){
			$code = 0;
			$msg='没有登录！';
			echo json_encode(array('code'=>$code,'msg'=>$msg));
			exit;
		}
		$identity_id=I('identity_id')?I('identity_id'):1;
		$where['identity_id']=array('EQ',$identity_id);
		if(I('account')){
			$where['real_name|account|phone']=array('LIKE','%'.urldecode(I('account')).'%');
		}
		$userModel=D('User');
		if($identity_id==2){
			$data=$userModel->field('id,name,account')->where($where)->order('id desc')->select();
		}else{
			$data=$userModel->field('id,real_name as name,account,phone')->where($where)->order('id desc')->select();
		}
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
		//判断用户是否登录
		if(!session('userId')){
			$code=0;
			$msg='没有登录！';
			echo json_encode(array('code'=>$code,'msg'=>$msg));
			exit;
		}
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

	//企业列表
	public function companyLst(){
		//判断用户是否登录
		if(!session('userId')){
			$code=0;
			$msg='没有登录！';
			echo json_encode(array('code'=>$code,'msg'=>$msg));
			exit;
		}
		$companyModel=D('Company');
		$data=$companyModel->field('id,company_name,company_code')->select();
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
		//判断用户是否登录
		if(!session('userId')){
			$msg='没有登录！';
			echo json_encode(array('code'=>$code,'msg'=>$msg));
			exit;
		}
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
            $_POST['type']=I('type')?I('type'):1;
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
        $type=I('type')?I('type'):1;
        $data=$model->where('type='.$type)->select();
        if($data){
            $code=1;
            $msg='成功';
        }else{
            $code=0;
            $msg='没有数据';
        }
        //返回json数据
        echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$data));
    }

    /**
     * 折扣列表
     * baikeliang
     * 2017-3-22
     */
    public function discountLst(){
		//判断用户是否登录
		if(!session('userId')){
			echo json_encode(array('code'=>0,'msg'=>'没有登录！'));
			exit;
		}
        $model=D('Discount');
        $data=$model->field('id,discount,is_use,sort,create_time')->order('sort')->select();   
        if($data){
        	$code=1;
        	$msg='成功';
        }else{
			$code=0;
			$msg='没有数据';
        }
        //返回json数据
		echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$data));
    }

    //发微信消息
    public function sendWeixinMsgTime(){
		$ip = getIP();
		if($ip!='127.0.0.1'&&$ip!='182.254.213.207'&&$ip!='123.56.227.160'){
			\Think\Log::write('定时发送微信模板消息记录失败：'.$ip,'INFO');
			echo "你的ip不对哟！";
			exit;
		}
		\Think\Log::write('定时发送微信模板消息记录成功：'.$ip,'INFO');
    	$app_model=D('Appointment');
    	//$map['a.visit_date'] = array('eq',strtotime("2016-08-25"));
    	$map['a.visit_date'] = array('eq',strtotime("tomorrow"));
    	$map['a.status'] = array('eq',1);
    	$app_data=$app_model->field('a.id,a.reserve_number,a.visit_time,a.patient_id,a.doctor_id,b.openid as p_openid,c.openid as d_openid,c.name,d.service_name,e.clinic_name')->alias('a')->join('left join '.C('DB_PREFIX').'user as b on a.patient_id=b.id')->join('left join '.C('DB_PREFIX').'user as c on a.doctor_id=c.id')->join('left join '.C('DB_PREFIX').'service as d on a.service_id=d.id')->join('left join '.C('DB_PREFIX').'clinic as e on a.clinic_id=e.id')->where($map)->select();
    	foreach ($app_data as $key=>$value){
    		$time=date('Y年m月d日 H:i',$value['visit_time']);
    		if($value['p_openid']){
    			$openid = $value['p_openid'];
	    		$template_id = C('WX_App_Remind');
	    		$url = "";
	    		$message = '"first": {
	                       "value":"薄荷牙医提醒您有一个预约：",
	                       "color":"#173177"
	                   },
	                   "keyword1":{
	                       "value":"'.$value['reserve_number'].'",
	                       "color":"#173177"
	                   },
	                   "keyword2": {
	                       "value":"'.$value['service_name'].'",
	                       "color":"#173177"
	                   },
	                   "keyword3": {
	                       "value":"'.$time.'",
	                       "color":"#173177"
	                   },
	                   "keyword4": {
	                       "value":"'.$value['name'].'",
	                       "color":"#173177"
	                   },
	                   "keyword5": {
	                       "value":"'.$value['clinic_name'].'",
	                       "color":"#173177"
	                   },
	                   "remark":{
	                       "value":"请您按时就诊，如果有事未能就诊，请及时通知薄荷牙医，谢谢！",
	                       "color":"#173177"
	                   }';
	    		$weixin=new Weixin();
    			$data=$weixin->sendTemplateMsg($openid,$template_id,$url,$message);
    			\Think\Log::write('病人前一天微信模板消息记录：'.json_encode($data),'INFO');
    		}
    		if($value['d_openid']){
    			$openid = $value['d_openid'];
	    		$template_id = C('WX_App_Remind');
	    		$url = "";
	    		$message = '"first": {
	                       "value":"薄荷牙医提醒您有一个预约：",
	                       "color":"#173177"
	                   },
	                   "keyword1":{
	                       "value":"'.$value['reserve_number'].'",
	                       "color":"#173177"
	                   },
	                   "keyword2": {
	                       "value":"'.$value['service_name'].'",
	                       "color":"#173177"
	                   },
	                   "keyword3": {
	                       "value":"'.$time.'",
	                       "color":"#173177"
	                   },
	                   "keyword4": {
	                       "value":"'.$value['name'].'",
	                       "color":"#173177"
	                   },
	                   "keyword5": {
	                       "value":"'.$value['clinic_name'].'",
	                       "color":"#173177"
	                   },
	                   "remark":{
	                       "value":"请您按时就诊，如果有事未能就诊，请及时通知薄荷牙医，谢谢！",
	                       "color":"#173177"
	                   }';
	    		$weixin=new Weixin();
    			$data=$weixin->sendTemplateMsg($openid,$template_id,$url,$message);
    			\Think\Log::write('医生前一天微信模板消息记录：'.json_encode($data),'INFO');
    		}
    	}
    }
    
    /**
     * 晚上8点给病人发送提醒
     * baikeliang
     */
    public function sendPatientRemind2(){
    	$ip = getIP();
    	if($ip!='127.0.0.1'&&$ip!='182.254.213.207'&&$ip!='123.56.227.160'){
    		echo "你的ip不对哟！";
    		exit;
    	}
    	$app_model=D('Appointment');
    	//预约就诊前2天
    	$map['a.visit_date'] = array('eq',strtotime(date("Y-m-d",strtotime("+2 day"))));
    	$map['a.status'] = array('eq',1);
    	$app_data=$app_model->field('a.id,a.is_self,a.reserve_number,a.service_id,a.visit_time,a.patient_id,a.doctor_id,b.openid as p_openid,b.phone as p_phone,c.openid as d_openid,c.name,d.service_name,e.clinic_name,e.clinic_address,e.bus_line,e.told_word,e.real_name')->alias('a')->join('left join '.C('DB_PREFIX').'user as b on a.patient_id=b.id')->join('left join '.C('DB_PREFIX').'user as c on a.doctor_id=c.id')->join('left join '.C('DB_PREFIX').'service as d on a.service_id=d.id')->join('left join '.C('DB_PREFIX').'clinic as e on a.clinic_id=e.id')->join('left join '.C('DB_PREFIX').'user as f on a.visit_id=f.id')->where($map)->select();
    	//echo $app_model->_sql();exit;
    	foreach ($app_data as $key=>$value){
    		$time=date('Y年m月d日 H:i',$value['visit_time']);
    		/*if($value['p_openid']){
    			$openid = $value['p_openid'];
    			$template_id = C('WX_App_Remind');
    			$url = "";
    			$message = '"first": {
	                       "value":"薄荷牙医提醒您：",
	                       "color":"#173177"
	                   },
	                   "keyword1":{
	                       "value":"'.$value['reserve_number'].'",
	                       "color":"#173177"
	                   },
	                   "keyword2": {
	                       "value":"'.$value['service_name'].'",
	                       "color":"#173177"
	                   },
	                   "keyword3": {
	                       "value":"'.$time.'",
	                       "color":"#173177"
	                   },
	                   "keyword4": {
	                       "value":"'.$value['name'].'",
	                       "color":"#173177"
	                   },
	                   "keyword5": {
	                       "value":"'.$value['clinic_name'].'",
	                       "color":"#173177"
	                   },
	                   "remark":{
	                       "value":"预约地址：'.$value['clinic_address'].'\n'.$value['told_word'].'",
	                       "color":"#173177"
	                   }';
    			$weixin=new Weixin();
    			$data=$weixin->sendTemplateMsg($openid,$template_id,$url,$message);
    			\Think\Log::write('病人就诊前两天微信模板提醒消息记录：'.json_encode($data),'INFO');
    		}*/
    		if($value['p_phone']){
    			$phone=$value['p_phone'];
    			//$content = '温馨提醒：您已预约'.$value['service_name'].'项目，请于'.$time.'到'.$value['clinic_name'].'（'.$value['clinic_address'].'）就诊。'.$value['bus_line'].$value['told_word'];
    			if($value['is_self']==2){
    				$content = '温馨提醒：您已为'.$value['real_name'].'预约'.$value['service_name'].'项目，请于'.$time.'到'.$value['clinic_name'].'（'.$value['clinic_address'].'）就诊。'.$value['bus_line'].$value['told_word'];
    			}else{
    				if($value['service_id']==11){
    					$content = '温馨提醒：您已预约'.$value['name'].'医生，请于'.$time.'到'.$value['clinic_name'].'（'.$value['clinic_address'].'）就诊。'.$value['bus_line'].$value['told_word'];
    				}else{
    					$content = '温馨提醒：您已预约'.$value['service_name'].'项目，请于'.$time.'到'.$value['clinic_name'].'（'.$value['clinic_address'].'）就诊。'.$value['bus_line'].$value['told_word'];
    				}
    			}
    			$res=sendMsg($phone,$content);
    			//解析处理XML
    			$mxl=simplexml_load_string($res);
    			$error_code=(string)$mxl->ErrorNum;
    			if($error_code==='0'){
    				\Think\Log::write('病人就诊前两天短信提醒成功消息记录：'.(string)$mxl,'INFO');
    			}else{
    				\Think\Log::write('病人就诊前两天短信提醒失败消息记录：'.(string)$mxl,'INFO');
    			}
    		}
    	}
    	//预约就诊前1天
    	$map['a.visit_date'] = array('eq',strtotime(date("Y-m-d",strtotime("+1 day"))));
    	$map['a.status'] = array('eq',1);
    	$app_data=$app_model->field('a.id,a.is_self,a.reserve_number,a.service_id,a.visit_time,a.patient_id,a.doctor_id,b.openid as p_openid,b.phone as p_phone,c.openid as d_openid,c.name,d.service_name,e.clinic_name,e.clinic_address,e.bus_line,e.told_word')->alias('a')->join('left join '.C('DB_PREFIX').'user as b on a.patient_id=b.id')->join('left join '.C('DB_PREFIX').'user as c on a.doctor_id=c.id')->join('left join '.C('DB_PREFIX').'service as d on a.service_id=d.id')->join('left join '.C('DB_PREFIX').'clinic as e on a.clinic_id=e.id')->where($map)->select();
    	//echo $app_model->_sql();exit;
    	foreach ($app_data as $key=>$value){
    		$time=date('Y年m月d日 H:i',$value['visit_time']);
    		if($value['p_openid']){
    			$openid = $value['p_openid'];
    			$template_id = C('WX_App_Remind');
    			$url = "";
    			$message = '"first": {
	                       "value":"薄荷牙医提醒您：",
	                       "color":"#173177"
	                   },
	                   "keyword1":{
	                       "value":"'.$value['reserve_number'].'",
	                       "color":"#173177"
	                   },
	                   "keyword2": {
	                       "value":"'.$value['service_name'].'",
	                       "color":"#173177"
	                   },
	                   "keyword3": {
	                       "value":"'.$time.'",
	                       "color":"#173177"
	                   },
	                   "keyword4": {
	                       "value":"'.$value['name'].'",
	                       "color":"#173177"
	                   },
	                   "keyword5": {
	                       "value":"'.$value['clinic_name'].'",
	                       "color":"#173177"
	                   },
	                   "remark":{
	                       "value":"预约地址：'.$value['clinic_address'].'\n'.$value['told_word'].'",
	                       "color":"#173177"
	                   }';
    			$weixin=new Weixin();
    			$data=$weixin->sendTemplateMsg($openid,$template_id,$url,$message);
    			\Think\Log::write('病人就诊前一天微信模板提醒消息记录：'.json_encode($data),'INFO');
    		}
    		if($value['p_phone']){
    			$phone=$value['p_phone'];
    			if($value['is_self']==2){
    				$content = '温馨提醒：您已为'.$value['real_name'].'预约'.$value['service_name'].'项目，请于'.$time.'到'.$value['clinic_name'].'（'.$value['clinic_address'].'）就诊。'.$value['bus_line'].$value['told_word'];
    			}else{
    				if($value['service_id']==11){
    					$content = '温馨提醒：您已预约'.$value['name'].'医生，请于'.$time.'到'.$value['clinic_name'].'（'.$value['clinic_address'].'）就诊。'.$value['bus_line'].$value['told_word'];
    				}else{
    					$content = '温馨提醒：您已预约'.$value['service_name'].'项目，请于'.$time.'到'.$value['clinic_name'].'（'.$value['clinic_address'].'）就诊。'.$value['bus_line'].$value['told_word'];
    				}
    			}
    			$res=sendMsg($phone,$content);
    			//解析处理XML
    			$mxl=simplexml_load_string($res);
    			$error_code=(string)$mxl->ErrorNum;
    			if($error_code==='0'){
    				\Think\Log::write('病人就诊前一天短信提醒成功消息记录：'.(string)$mxl,'INFO');
    			}else{
    				\Think\Log::write('病人就诊前一天短信提醒失败消息记录：'.(string)$mxl,'INFO');
    			}
    		}
    	}
    }
    
    /**
     * 预约就诊前1天晚上8点给病人发送提醒
     * baikeliang
     */
    public function sendPatientRemind1(){
    	$ip = getIP();
    	if($ip!='127.0.0.1'&&$ip!='182.254.213.207'&&$ip!='123.56.227.160'){
    		echo "你的ip不对哟！";
    		exit;
    	}
    	$app_model=D('Appointment');
    	//$map['a.visit_date'] = array('eq',strtotime(date("Y-m-d",strtotime("+2 day"))));
    	$map['a.visit_date'] = array('eq',strtotime(date("Y-m-d",strtotime("+1 day"))));
    	$map['a.status'] = array('eq',1);
    	$app_data=$app_model->field('a.id,a.reserve_number,a.visit_time,a.patient_id,a.doctor_id,b.openid as p_openid,b.phone as p_phone,c.openid as d_openid,c.name,d.service_name,e.clinic_name,e.clinic_address,e.bus_line,e.told_word')->alias('a')->join('left join '.C('DB_PREFIX').'user as b on a.patient_id=b.id')->join('left join '.C('DB_PREFIX').'user as c on a.doctor_id=c.id')->join('left join '.C('DB_PREFIX').'service as d on a.service_id=d.id')->join('left join '.C('DB_PREFIX').'clinic as e on a.clinic_id=e.id')->where($map)->select();
    	//echo $app_model->_sql();exit;
    	foreach ($app_data as $key=>$value){
    		$time=date('Y年m月d日 H:i',$value['visit_time']);
    		if($value['p_openid']){
    			$openid = $value['p_openid'];
    			$template_id = C('WX_App_Remind');
    			$url = "";
    			$message = '"first": {
	                       "value":"薄荷牙医提醒您：",
	                       "color":"#173177"
	                   },
	                   "keyword1":{
	                       "value":"'.$value['reserve_number'].'",
	                       "color":"#173177"
	                   },
	                   "keyword2": {
	                       "value":"'.$value['service_name'].'",
	                       "color":"#173177"
	                   },
	                   "keyword3": {
	                       "value":"'.$time.'",
	                       "color":"#173177"
	                   },
	                   "keyword4": {
	                       "value":"'.$value['name'].'",
	                       "color":"#173177"
	                   },
	                   "keyword5": {
	                       "value":"'.$value['clinic_name'].'",
	                       "color":"#173177"
	                   },
	                   "remark":{
	                       "value":"预约地址：'.$value['clinic_address'].'\n'.$value['told_word'].'",
	                       "color":"#173177"
	                   }';
    			$weixin=new Weixin();
    			$data=$weixin->sendTemplateMsg($openid,$template_id,$url,$message);
    			\Think\Log::write('病人就诊前一天微信模板提醒消息记录：'.json_encode($data),'INFO');
    		}
    		if($value['p_phone']){
    			$phone=$value['p_phone'];
    			$content = '温馨提醒：您已预约'.$value['service_name'].'项目，请于'.$time.'到'.$value['clinic_name'].'（'.$value['clinic_address'].'）就诊。'.$value['bus_line'].$value['told_word'];
    			$res=sendMsg($phone,$content);
    			//解析处理XML
    			$mxl=simplexml_load_string($res);
    			$error_code=(string)$mxl->ErrorNum;
    			if($error_code==='0'){
    				\Think\Log::write('病人就诊前一天短信提醒成功消息记录：'.(string)$mxl,'INFO');
    			}else{
    				\Think\Log::write('病人就诊前一天短信提醒失败消息记录：'.(string)$mxl,'INFO');
    			}
    		}
    	}
    }
    
    /**
     * 预约就诊前2小时给病人发送提醒
     * baikeliang
     */
    public function sendPatientRemind(){
    	$ip = getIP();
    	if($ip!='127.0.0.1'&&$ip!='182.254.213.207'&&$ip!='123.56.227.160'){
    		echo "你的ip不对哟！";
    		exit;
    	}
    	//echo strtotime(date("Y-m-d H:i",time()));exit;
    	$app_model=D('Appointment');
    	//$map['a.visit_time'] = array('eq',time()+60*60*2);
    	$map['a.visit_time'] = array('eq',strtotime(date("Y-m-d H:i",time()))+60*60*2);
    	$map['a.status'] = array('eq',1);
    	$app_data=$app_model->field('a.id,a.is_self,a.reserve_number,a.service_id,a.visit_time,a.patient_id,a.doctor_id,b.openid as p_openid,b.phone as p_phone,c.openid as d_openid,c.name,d.service_name,e.clinic_name,e.clinic_address,e.bus_line,e.told_word')->alias('a')->join('left join '.C('DB_PREFIX').'user as b on a.patient_id=b.id')->join('left join '.C('DB_PREFIX').'user as c on a.doctor_id=c.id')->join('left join '.C('DB_PREFIX').'service as d on a.service_id=d.id')->join('left join '.C('DB_PREFIX').'clinic as e on a.clinic_id=e.id')->where($map)->select();
    	//echo $app_model->_sql();exit;
    	foreach ($app_data as $key=>$value){
    		$time=date('Y年m月d日 H:i',$value['visit_time']);
    		/*if($value['p_openid']){
    			$openid = $value['p_openid'];
    			$template_id = C('WX_App_Remind');
    			$url = "";
    			$message = '"first": {
	                       "value":"薄荷牙医提醒您：",
	                       "color":"#173177"
	                   },
	                   "keyword1":{
	                       "value":"'.$value['reserve_number'].'",
	                       "color":"#173177"
	                   },
	                   "keyword2": {
	                       "value":"'.$value['service_name'].'",
	                       "color":"#173177"
	                   },
	                   "keyword3": {
	                       "value":"'.$time.'",
	                       "color":"#173177"
	                   },
	                   "keyword4": {
	                       "value":"'.$value['name'].'",
	                       "color":"#173177"
	                   },
	                   "keyword5": {
	                       "value":"'.$value['clinic_name'].'",
	                       "color":"#173177"
	                   },
	                   "remark":{
	                       "value":"预约地址：'.$value['clinic_address'].'\n'.$value['told_word'].'",
	                       "color":"#173177"
	                   }';
    			$weixin=new Weixin();
    			$data=$weixin->sendTemplateMsg($openid,$template_id,$url,$message);
    			\Think\Log::write('病人就诊前两小时微信模板提醒消息记录：'.json_encode($data),'INFO');
    		}*/
    		if($value['p_phone']){
    			$phone=$value['p_phone'];
    			//$content = '温馨提醒：您已预约'.$value['service_name'].'项目，请于'.$time.'到'.$value['clinic_name'].'（'.$value['clinic_address'].'）就诊。'.$value['bus_line'].$value['told_word'];
    			if($value['is_self']==2){
    				$content = '温馨提醒：您已为'.$value['real_name'].'预约'.$value['service_name'].'项目，请于'.$time.'到'.$value['clinic_name'].'（'.$value['clinic_address'].'）就诊。'.$value['bus_line'].$value['told_word'];
    			}else{
    				if($value['service_id']==11){
    					$content = '温馨提醒：您已预约'.$value['name'].'医生，请于'.$time.'到'.$value['clinic_name'].'（'.$value['clinic_address'].'）就诊。'.$value['bus_line'].$value['told_word'];
    				}else{
    					$content = '温馨提醒：您已预约'.$value['service_name'].'项目，请于'.$time.'到'.$value['clinic_name'].'（'.$value['clinic_address'].'）就诊。'.$value['bus_line'].$value['told_word'];
    				}
    			}
    			$res=sendMsg($phone,$content);
    			//解析处理XML
    			$mxl=simplexml_load_string($res);
    			$error_code=(string)$mxl->ErrorNum;
    			if($error_code==='0'){
    				\Think\Log::write('病人就诊前两小时短信提醒成功消息记录：'.(string)$mxl,'INFO');
    			}else{
    				\Think\Log::write('病人就诊前两小时短信提醒失败消息记录：'.(string)$mxl,'INFO');
    			}
    		}
    	}
    }
    
    /**
     * 预约就诊前1天早上9点给医生发送提醒
     * baikeliang
     */
    public function sendDoctorRemind1(){
    	$ip = getIP();
    	if($ip!='127.0.0.1'&&$ip!='182.254.213.207'&&$ip!='123.56.227.160'){
    		echo "你的ip不对哟！";
    		exit;
    	}
    	$app_model=D('Appointment');
    	$map['a.visit_date'] = array('eq',strtotime(date("Y-m-d",strtotime("+1 day"))));
    	$map['a.status'] = array('eq',1);
    	//$app_data=$Model->field('a.id,a.reserve_number,a.visit_time,a.patient_id,a.doctor_id,count(a.patient_id) as p_count,b.openid as p_openid,b.phone as p_phone,c.openid as d_openid,c.name,c.phone as d_phone,d.service_name,e.clinic_name,e.clinic_address,e.bus_line,e.told_word')->table($subQuery.' a')->join('left join '.C('DB_PREFIX').'user as b on a.patient_id=b.id')->join('left join '.C('DB_PREFIX').'user as c on a.doctor_id=c.id')->join('left join '.C('DB_PREFIX').'service as d on a.service_id=d.id')->join('left join '.C('DB_PREFIX').'clinic as e on a.clinic_id=e.id')->where($map)->select();
    	$app_data=$app_model->field('MIN(a.visit_time) AS visit_time,a.doctor_id,count(a.patient_id) as p_count,c.openid as d_openid,c.name,c.phone as d_phone,d.service_name,e.clinic_name,e.clinic_address,e.bus_line,e.told_word')->alias('a')->join('left join '.C('DB_PREFIX').'user as c on a.doctor_id=c.id')->join('left join '.C('DB_PREFIX').'service as d on a.service_id=d.id')->join('left join '.C('DB_PREFIX').'clinic as e on a.clinic_id=e.id')->where($map)->group('a.doctor_id')->select();
    	//echo $app_model->_sql();exit;
    	foreach ($app_data as $key=>$value){
    		$time=date('Y年m月d日 H:i',$value['visit_time']);
    		if($value['d_openid']){
    			$openid = $value['d_openid'];
    			$template_id = C('WX_App_D_Remind');
    			$url = C('DOMAIN_NAME')."/mintAdmin/index.php/Home/Index/weixinBase/type/doctor_order";
				$message = '"first": {
	                       "value":"尊敬的'.$value['name'].'医生，明天您的出诊安排如下：",
	                       "color":"#173177"
	                   },
	                   "keyword1":{
	                       "value":"'.$time.'",
	                       "color":"#173177"
	                   },
	                   "keyword2": {
	                       "value":"'.$value['p_count'].'",
	                       "color":"#173177"
	                   },
	                   "keyword3": {
	                       "value":"'.$value['clinic_name'].'",
	                       "color":"#173177"
	                   },
	                   "keyword4": {
	                       "value":"'.$value['clinic_address'].'",
	                       "color":"#173177"
	                   },
	                   "remark":{
	                       "value":"点击详情可查看预约详情",
	                       "color":"#173177"
	                   }';
    			$weixin=new Weixin();
    			$data=$weixin->sendTemplateMsg($openid,$template_id,$url,$message);
    			\Think\Log::write('医生出诊前一天微信模板提醒消息记录：'.json_encode($data),'INFO');
    		}
    		if($value['d_phone']){
    			$phone=$value['d_phone'];
    			$content = '尊敬的'.$value['name'].'医生，请您于'.$time.'到'.$value['clinic_name'].'（'.$value['clinic_address'].'）出诊。'.$value['bus_line'].'您当天有'.$value['p_count'].'名患者预约就诊，详细信息请到薄荷牙医公众号后台查看。';
    			$res=sendMsg($phone,$content);
    			//解析处理XML
    			$mxl=simplexml_load_string($res);
    			$error_code=(string)$mxl->ErrorNum;
    			if($error_code==='0'){
    				\Think\Log::write('医生出诊前一天短信提醒成功消息记录：'.(string)$mxl,'INFO');
    			}else{
    				\Think\Log::write('医生出诊前一天短信提醒失败消息记录：'.(string)$mxl,'INFO');
    			}
    		}
    	}
    }

    /**
     * 导出数据库备份
     * baikeliang
     * 2016-12-27
     */
    public function exportDatabase(){
    	header("Content-type:text/html;charset=utf-8");
    	$path = C('ROOT_MYSQL_PATH');
    	$model = M();
    	//查询所有表
    	$sql="show tables";
    	$result=$model->query($sql);
    	//print_r($result);exit;
    	//echo "运行中，请耐心等待...<br/>";
    	$info  = "-- ----------------------------\r\n";
    	$info .= "-- 日期：".date("Y-m-d H:i:s",time())."\r\n";
    	$info .= "--  MySQL - 5.1.73 : Database - ".C('DB_NAME')."\r\n";
    	$info .= "-- ----------------------------\r\n\r\n";
    	$info .= "CREATE DATABASE IF NOT EXISTS `".C('DB_NAME')."` DEFAULT CHARACTER SET utf8 ;\r\n\r\n";
    	$info .= "USE `".C('DB_NAME')."`;\r\n\r\n";
    	// 检查目录是否存在
    	if(is_dir($path)){
    		//echo '目录存在';
	    	// 检查目录是否可写
	    	if(is_writable($path)){
	    		//echo '目录可写';exit;
	    	}else{
	    		echo '目录不可写';exit;
	    		//chmod($path,0777);
	    	}
    	}else{
    		//echo '目录不存在';exit;
    		// 新建目录
	    	mkdir($path, 0777, true);
	    	//chmod($path,0777);
    	}
    	// 检查文件是否存在
    	$file_name = $path.C('DB_NAME').'-'.date("Y-m-d",time()).'.sql';
    	if(file_exists($file_name)){
    		echo "数据备份文件已存在！";
    		exit;
    	}
    	file_put_contents($file_name,$info,FILE_APPEND);
    	foreach ($result as $k=>$v) {
    		//查询表结构
    		$val = $v['tables_in_'.C('DB_NAME')];
    		$sql_table = "show create table ".$val;
    		$res = $model->query($sql_table);
  			//print_r($res);exit;
    		$info_table = "-- ----------------------------\r\n";
    		$info_table .= "-- Table structure for `".$val."`\r\n";
    		$info_table .= "-- ----------------------------\r\n\r\n";
    		$info_table .= "DROP TABLE IF EXISTS `".$val."`;\r\n\r\n";
    		$info_table .= $res[0]['create table'].";\r\n\r\n";
    		//查询表数据
    		$info_table .= "-- ----------------------------\r\n";
    		$info_table .= "-- Data for the table `".$val."`\r\n";
    		$info_table .= "-- ----------------------------\r\n\r\n";
    		file_put_contents($file_name,$info_table,FILE_APPEND);
    		$sql_data = "select * from ".$val;
    		$data = $model->query($sql_data);
    		//print_r($data);exit;
    		$count= count($data);
    		//print_r($count);exit;
    		if($count<1) continue;
    		foreach ($data as $key => $value){
    			$sqlStr = "INSERT INTO `".$val."` VALUES (";
    			foreach($value as $v_d){
    				$v_d = str_replace("'","\'",$v_d);
    				$sqlStr .= "'".$v_d."', ";
    			}
    			//去掉最后一个逗号和空格
    			$sqlStr = substr($sqlStr,0,strlen($sqlStr)-2);
    			$sqlStr .= ");\r\n";
    			file_put_contents($file_name,$sqlStr,FILE_APPEND);
    		}
    		$info = "\r\n";
    		file_put_contents($file_name,$info,FILE_APPEND);
    	}
    	echo "OK!";
    }
    
    /**
     * 导出excel
     * baikeliang
     * 2017-3-21
     */
    public function exportExcel(){
    	//include_once APP_PATH.'Tool/PHPExcel.php';
    	//import('Tool.PHPExcel',APP_PATH,'.php');
    	import('Tool.PHPExcel');
    	
    	$BillModel=D('Bill');
		//获取搜索条件
        if(I('patient_account')){
        	$where['a.patient_account']=array('LIKE','%'.urldecode(I('patient_account')).'%');
        }
		if(I('user_name')){
        	$where['b.real_name']=array('LIKE','%'.urldecode(I('user_name')).'%');
        }
		if(I('doctor_name')){
        	$where['c.doctor_name']=array('LIKE','%'.urldecode(I('doctor_name')).'%');
        }
        if(I('clinic_name')){
        	$where['d.name']=array('LIKE','%'.urldecode(I('clinic_name')).'%');
        }
        $start=I('start');
        $end=I('end');
        if($start&&$end){
            //传了时间
            $end=strtotime($end);
            $start=strtotime($start);
            $where['a.visit_time']=array('BETWEEN',"$start,$end");
        }
        //查询数据
        $data=$BillModel->alias('a')->field('a.id,a.bill_number,a.patient_account,a.patient_name,a.contact_tel,a.visit_time,a.doctor_name,a.project_name,d.clinic_name,a.pay_money,a.actual_money,a.status,a.pay_method,a.bill_discount')->join('left join mint_user as b on a.patient_id=b.id')->join('left join mint_user as c on a.doctor_id=c.id')->join('left join mint_clinic as d on a.clinic_id=d.id')->where($where)->order('a.id desc')->select();
        if($data){
        	$BillProjectModel=D('BillProject');
        	$bill_data=$BillProjectModel->field('bill_id,project_id,project_name,price,number,unit,project_discount,actual_price')->select();
        	foreach ($data as $key=>$value){
        		$str = '';
        		foreach ($bill_data as $k=>$v){
        			if($value['id']==$v['bill_id']){
        				$str .= $v['project_name'].($v['project_discount']*10).'折  ';
        			}
        		}
        		$data[$key]['bill_detail'] = $str;
        		$data[$key]['bill_discount'] = ($value['bill_discount']*10).'折  ';
        	}
	    	// Create new PHPExcel object
	    	$objPHPExcel = new \PHPExcel();
	    	// Set document properties
	    	$objPHPExcel->getProperties()->setCreator("BAI")
	    	->setLastModifiedBy("BAI")
	    	->setTitle("Office 2007 XLSX Test Document")
	    	->setSubject("Office 2007 XLSX Test Document")
	    	->setDescription("Test document for Office 2007 XLSX, generated using PHP classes.")
	    	->setKeywords("office 2007 openxml php")
	    	->setCategory("Test result file");
	    	//$objPHPExcel->getActiveSheet()->getStyle('A1')->getBorders()->setDiagonalDirection(\PHPExcel_Style_Borders::DIAGONAL_DOWN );
	    	//$objPHPExcel->getActiveSheet()->getStyle('A1')->getBorders()->getDiagonal()-> setBorderStyle(\PHPExcel_Style_Border::BORDER_THIN);
	    	//$objPHPExcel->setActiveSheetIndex(0)->setSuperScript()->setCellValue('A1', '时间');
	    	//$objPHPExcel->setActiveSheetIndex(0)->setSubScript()->setCellValue('A1', '指标');
	    	// Add some data
	    	$array = array('ID','账单号','客户账号','客户姓名','联系方式','就诊时间','就诊医生','就诊项目','诊所','原价','实际金额','支付状态','支付方式','折扣','折扣详情');
	    	$currentColumn='A';
	    	foreach ($array as $k=>$v){
	    		$objPHPExcel->setActiveSheetIndex(0)->setCellValue($currentColumn.'1', $v);
	    		$currentColumn++;
	    	}
	    	$currentRow=2;
	    	foreach ($data as $k=>$v){
	    		$currentColumn='A';
	    		foreach ($v as $key=>$value){
		    		if($key=='visit_time'){
		    			$objPHPExcel->setActiveSheetIndex(0)->setCellValue($currentColumn.$currentRow, date('Y-m-d',$value));
		    		}elseif($key=='status'){
		    			if($value==1){
		    				$objPHPExcel->setActiveSheetIndex(0)->setCellValue($currentColumn.$currentRow, '已支付');
		    			}else{
		    				$objPHPExcel->setActiveSheetIndex(0)->setCellValue($currentColumn.$currentRow, '未支付');
		    			}
		    		}elseif($key=='pay_money'||$key=='actual_money'){
		    			$objPHPExcel->getActiveSheet()->getStyle($currentColumn.$currentRow)->getNumberFormat()->setFormatCode(\PHPExcel_Style_NumberFormat::FORMAT_NUMBER_00);
	    				$objPHPExcel->setActiveSheetIndex(0)->setCellValue($currentColumn.$currentRow, $value);
		    		}else{
	    				$objPHPExcel->setActiveSheetIndex(0)->setCellValue($currentColumn.$currentRow, $value);
		    		}
		    		$currentColumn++;
	    		}
	    		$currentRow++;
	    	}
	    	// Rename worksheet
	    	$objPHPExcel->getActiveSheet()->setTitle('账单');
	    	// Set active sheet index to the first sheet, so Excel opens this as the first sheet
	    	$objPHPExcel->setActiveSheetIndex(0);
	    	// Redirect output to a client’s web browser (Excel5)
	    	header('Content-Type: application/vnd.ms-excel');
	    	header('Content-Disposition: attachment;filename="账单.xls"');
	    	header('Cache-Control: max-age=0');
	    	// If you're serving to IE 9, then the following may be needed
	    	header('Cache-Control: max-age=1');
	    	
	    	// If you're serving to IE over SSL, then the following may be needed
	    	header ('Expires: Mon, 26 Jul 1997 05:00:00 GMT'); // Date in the past
	    	header ('Last-Modified: '.gmdate('D, d M Y H:i:s').' GMT'); // always modified
	    	header ('Cache-Control: cache, must-revalidate'); // HTTP/1.1
	    	header ('Pragma: public'); // HTTP/1.0
	    	
	    	$objWriter = \PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel5');
	    	$objWriter->save('php://output');
	    	exit;
	    	//dump($objPHPExcel);
        }else{
            $code=1;
            $msg='没有数据！';
            
        }
    }
}