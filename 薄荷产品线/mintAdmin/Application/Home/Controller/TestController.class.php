<?php
namespace Home\Controller;
use \Think\Controller;
use \Tool\SendMsg;
use \Tool\Qiniu\Auth;
use \Tool\Qiniu\Storage\UploadManager;
//use \Qiniu\Auth;
//use \Qiniu\Storage\UploadManager;

class TestController extends Controller {
    public function send(){
        $sendObj=new SendMsg();
        $res=$sendObj->send('18813155434','厉害呢我的哥！','SMS_33705826');
        var_dump($res);
    }

    //测试二维码生成
    public function getQrCode(){
    	Vendor('phpqrcode.phpqrcode');
		//定义纠错级别
		$errorLevel = "L";
		//定义生成图片宽度和高度;默认为3
		$size = "4";
		//定义生成内容
		/*$content="微信公众平台：思维与逻辑;公众号:siweiyuluoji";
		//调用QRcode类的静态方法png生成二维码图片//
		QRcode::png($content, false, $errorLevel, $size);*/
		//生成网址类型
		$url="http://mint.zhenweitech.cn/mint/login.html?user_id=123";
		$filename='./up/qr_code_img/weima.png';
		$QRcode=new \QRcode();
		$res=$QRcode->png($url, $filename, $errorLevel, $size);
		//QRcode::png($url, $filename, $errorLevel, $size);
		var_dump($res);
    }
    
    public function QrCode(){
   		$file_name = C('ROOT_CODE_PATH').'app.png';
		if(!file_exists($file_name)){
			Vendor('phpqrcode.phpqrcode');
			//定义纠错级别
			$errorLevel = "M";
			//定义生成图片宽度和高度;默认为3
			$size = "3";
			//生成网址类型
			$url=C('DOMAIN_NAME').'/mintAdmin/index.php/Home/Index/weixinBasePatientList';
			$QRcode=new \QRcode();
			$QRcode->png($url, $file_name, $errorLevel, $size);
			$logo=C('ROOT_IMG_PATH').'code.png';
			
			$QR = imagecreatefromstring(file_get_contents($file_name));
			$logo = imagecreatefromstring(file_get_contents($logo));
			$QR_width = imagesx($QR);//二维码图片宽度
			$QR_height = imagesy($QR);//二维码图片高度
			$logo_width = imagesx($logo);//logo图片宽度
			$logo_height = imagesy($logo);//logo图片高度
			$logo_qr_width = $QR_width / 5;
			$scale = $logo_width/$logo_qr_width;
			$logo_qr_height = $logo_height/$scale;
			$from_width = ($QR_width - $logo_qr_width) / 2;
			//重新组合图片并调整大小
			imagecopyresampled($QR, $logo, $from_width, $from_width, 0, 0, $logo_qr_width,$logo_qr_height, $logo_width, $logo_height);
			imagepng($QR, $file_name);
		}
    }
    
    public function newAdd(){
    	$userModel=D('User');
    	$_POST['patient_phone'] = 13371732523;
    	$res=$userModel->field('id,real_name,phone')->where("account='".$_POST['patient_phone']."'")->find();
    	if($res['id']){
    		//该用户存在
    		$user = $userModel->verifyLogin($_POST['patient_phone']);
    		print_r($user);exit;
    	}
    }
    
    public function newAdd2(){
    	session('userId', '');
		session('userName', '');
		session('identityId', '');
		$_SESSION['userId'] = '';
		$_SESSION['userName'] = '';
		$_SESSION['identityId'] = '';
    }
    
    public function uploadQiNiu(){
		//import('Qiniu.functions');
		import('Tool.Qiniu.functions');
		
		// 用于签名的公钥和私钥
		$accessKey = 'KjtuZDbqRnhxluxGGp3WqFAJHNiboxhM7IHoeCno';
		$secretKey = 'Hjyg3BkEnzjTbtPR-2zQkGj9zVAtGgMqZJOZB61A';
		
		// 初始化签权对象
		$auth = new Auth($accessKey, $secretKey);
		
		// 空间名  https://developer.qiniu.io/kodo/manual/concepts
		$bucket = 'bucket-name';
		// 生成上传Token
		$token = $auth->uploadToken($bucket);
		echo $token;exit;
		// 构建 UploadManager 对象
		$uploadMgr = new UploadManager();
		// 上传文件到七牛
		$filePath = './php-logo.png';
		$key = 'php-logo.png';
		list($ret, $err) = $uploadMgr->putFile($token, $key, $filePath);
		echo "\n====> putFile result: \n";
		if ($err !== null) {
			var_dump($err);
		} else {
			var_dump($ret);
		}
    }
    
    public function upload(){
		//include_once 'Tool/AliyunCore/Config.php';
		//require 'path_to_sdk/vendor/autoload.php';
		/*import('Tool.QiNiu.autoload',APP_PATH,'.php');
		
		// 用于签名的公钥和私钥
		$accessKey = 'KjtuZDbqRnhxluxGGp3WqFAJHNiboxhM7IHoeCno';
		$secretKey = 'Hjyg3BkEnzjTbtPR-2zQkGj9zVAtGgMqZJOZB61A';
		
		// 初始化签权对象
		$auth = new \Auth($accessKey, $secretKey);
		
		// 空间名  https://developer.qiniu.io/kodo/manual/concepts
		$bucket = 'bucket-name';
		// 生成上传Token
		$token = $auth->uploadToken($bucket);
		// 构建 UploadManager 对象
		$uploadMgr = new UploadManager();*/

    	if(!$_FILES){
    		echo json_encode(array('code'=>0,'msg'=>'请选择上传图片！'));
    		exit;
    	}
    	$setting=C('UPLOAD_SITEIMG_QINIU');
    	$Upload = new \Think\Upload($setting);
    	$info = $Upload->upload($_FILES);
    	
    	if(!$info){
    		echo json_encode(array('code'=>0,'msg'=>$Upload->getError()));
    	}else{
    		//释放上传类对象
    		unset($upload);
    		print_r($info['file']);
    	}
    	exit;
    	echo 1;
    }
    
	private function createScope(){
        $scopeData["scope"]="bucket-name";
        $scopeData["deadline"]=time()+3600;
        return json_encode($scopeData);
    }
    
    private function base64_urlSafeEncode($data){
        $find = array('+', '/');
        $replace = array('-', '_');
        return str_replace($find, $replace, base64_encode($data));
    }
    
    private function encodedPutPolicy(){
        return $this->base64_urlSafeEncode($this->createScope());
    }
    
    private function encodedSign(){
        $hmac = hash_hmac('sha1', $this->encodedPutPolicy(), 'Hjyg3BkEnzjTbtPR-2zQkGj9zVAtGgMqZJOZB61A', true);
        return $this->base64_urlSafeEncode($hmac);
    }
    
    public function uptokens(){
        //hidejson();
        header("Content-type: text/json; charset=utf-8"); 
        $tokenData["success"]=true;
        $tokenData["code"]=200;
        $tokenData["msg"]="操作成功";
        $tokenData["obj"]=null;
        $tokenData["map"]["expire"]="3600";
        $tokenData["map"]["token"] = 'KjtuZDbqRnhxluxGGp3WqFAJHNiboxhM7IHoeCno' . ':' . $this->encodedSign() . ':' . $this->encodedPutPolicy();
        $tokenData["list"]=null;
        echo json_encode($tokenData);
        exit();
    }
	
	public function selTime(){
		$appointmentModel=D('Appointment');
		$data=$appointmentModel->order('visit_time asc')->select();
		foreach ($data as $key => $value) {
			//echo 'ID：'.$value['id'].'，时间戳：'.$value['visit_time'].'，日期：，时间：'.date('Y-m-d H:i',$value['visit_time']).'<br/>';
			if($value['visit_time']<1477702800){
				$res['end_time']=$value['visit_time']+30*60;
				$res['time_long']=30;
			}else{
				$res['end_time']=$value['visit_time']+15*60;
				$res['time_long']=15;
			}
			$res['start_time']=$value['visit_time'];
			//if(!$value['visit_date']){
				$res['visit_date']=strtotime(date('Y-m-d',$value['visit_time']));
			//}
			$result=$appointmentModel->where('id='.$value['id'])->save($res);
		}
	}

	//更新老数据
	public function aa(){
		$billModel=D('Bill');
		$res=$billModel->where('bill_discount=1.00')->select();
		foreach ($res as $key => $value) {
			$billModel->actual_money=(float)$value['pay_money'];
			/*var_dump($value['pay_money']);
			var_dump($billModel);*/
			$billModel->where('id='.$value['id'])->save();
		}
	}

	//更新老数据
	public function bb(){
		$billModel=D('BillProject');
		$res=$billModel->where('project_discount=1.00')->select();
		foreach ($res as $key => $value) {
			$billModel->actual_price=(float)$value['price'];
			$billModel->where('id='.$value['id'])->save();
		}
	}
}