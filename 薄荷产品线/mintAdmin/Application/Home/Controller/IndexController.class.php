<?php
namespace Home\Controller;
use Think\Controller;
use Tool\Weixin;
use Tool\Reply;
use Tool\SendMsg;
use Tool\AliyunSms\Sms\Request\V20160927 as Sms;

class IndexController extends Controller {

	/**
	 * 微信静默授权，获取用户信息，根据参数决定页面跳转地址
	 * baikeliang
	 */
	public function weixinBase(){
		$code = $_GET['code'];
		$type = $_GET['type'];
		if(!empty($code)){
			$weixin=new Weixin();
			$res=$weixin->getUserAccessToken($code);
			$user_info=$weixin->getUserInfo2($weixin->getAccessToken(),$res['openid']);
			/*if($user_info['subscribe']==0){
				\Think\Log::write('未关注用户进入薄荷口腔！','ERR');
				echo '您还没有关注薄荷口腔公众号，请先关注！';
				exit;
			}else{
				session('openid', $user_info['openid']);
				session('nickname', $user_info['nickname']);
				session('sex', $user_info['sex']);
				session('country', $user_info['country']);
				session('province', $user_info['province']);
				session('city', $user_info['city']);
				session('headimgurl', $user_info['headimgurl']);
			}*/
			session('openid', $user_info['openid']);
			if($user_info['subscribe']){
				session('nickname', $user_info['nickname']);
				session('sex', $user_info['sex']);
				session('country', $user_info['country']);
				session('province', $user_info['province']);
				session('city', $user_info['city']);
				session('headimgurl', $user_info['headimgurl']);
			}
			$model = D('User');
			$user = $model->openidLogin($user_info['openid']);
			if($user && $user['user_token']){
				if($type=='info'){
					//跳转到个人信息页面
					if($user['identity_id']==1){
						$url = C('DOMAIN_NAME').'/mintwx/html/mine.html';
					}elseif($user['identity_id']==2){
						$url = C('DOMAIN_NAME').'/mintwx/html/doctorCenter.html';
					}else{
						$url = C('DOMAIN_NAME').'/mintwx/html/mine.html';
					}
				}elseif($type=='order'){
					//跳转到预约页面
					$url = C('DOMAIN_NAME').'/mintwx/html/order/chooseproj.html';
				}elseif($type=='order_info'){
					$id = $_GET['id'];
					//跳转到预约详情页面
					$url = C('DOMAIN_NAME').'/mintwx/html/myOrderInfo.html?id='.$id;
				}elseif($type=='record_info'){
					$id = $_GET['id'];
					//跳转到病历详情页面
					$url = C('DOMAIN_NAME').'/mintwx/html/myCasedesc.html?id='.$id;
				}elseif($type=='visit'){
					$m_id = $_GET['m_id'];
					$app_id = $_GET['app_id'];
					//跳转到复诊详情页面
					$url = C('DOMAIN_NAME').'/mintwx/html/order/creturnVisit.html?m_id='.$m_id.'&app_id='.$app_id;
				}elseif($type=='bill_info'){
					$id = $_GET['id'];
					//跳转到账单详情页面
					$url = C('DOMAIN_NAME').'/mintwx/html/myBillContent.html?id='.$id;
				}elseif($type=='doctor_order'){
					//跳转到医生预约列表页面
					$url = C('DOMAIN_NAME').'/mintwx/html/doctormyOrder.html';
				}elseif($type=='record'){
					//跳转到病历列表页面
					$url = C('DOMAIN_NAME').'/mintwx/html/myCase.html';
				}elseif($type=='case_info'){
					$id = $_GET['id'];
					//跳转到病历详情页面
					$url = C('DOMAIN_NAME').'/mintwx/html/casedesc.html?type=user&id='.$id;
				}
			}else{
				//跳转到登录页面
				if($type=='info'){
					//跳转到个人信息页面
					$url = C('DOMAIN_NAME').'/mintwx/login.html?type=info';
				}elseif($type=='order'){
					//跳转到预约页面
					$url = C('DOMAIN_NAME').'/mintwx/login.html?type=order';
				}elseif($type=='order_info'){
					$id = $_GET['id'];
					//跳转到预约详情页面
					$url = C('DOMAIN_NAME').'/mintwx/login.html?type=order_info&id='.$id;
				}elseif($type=='record_info'){
					$id = $_GET['id'];
					//跳转到病历详情页面
					$url = C('DOMAIN_NAME').'/mintwx/login.html?type=record_info&id='.$id;
				}elseif($type=='visit'){
					$m_id = $_GET['m_id'];
					$app_id = $_GET['app_id'];
					//跳转到复诊详情页面
					$url = C('DOMAIN_NAME').'/mintwx/login.html?type='.$type.'&m_id='.$m_id.'&app_id='.$app_id;
				}elseif($type=='bill_info'){
					$id = $_GET['id'];
					//跳转到账单详情页面
					$url = C('DOMAIN_NAME').'/mintwx/login.html?type='.$type.'&id='.$id;
				}elseif($type=='doctor_order'){
					//跳转到医生预约列表页面
					$url = C('DOMAIN_NAME').'/mintwx/login.html?type='.$type;
				}elseif($type=='record'){
					//跳转到病历列表页面
					$url = C('DOMAIN_NAME').'/mintwx/login.html?type='.$type;
				}elseif($type=='case_info'){
					$id = $_GET['id'];
					//跳转到病历详情页面
					$url = C('DOMAIN_NAME').'/mintwx/login.html?type='.$type.'&id='.$id;
				}
			}
			header("Location: ".$url);
		}else{
			$url = urlencode('http://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']);
			$share_url='https://open.weixin.qq.com/connect/oauth2/authorize?appid='.C('WX_APPID').'&redirect_uri='.$url.'&response_type=code&scope=snsapi_base&state=1#wechat_redirect';
			echo "<script type='text/javascript'>";
			echo "window.location.href='$share_url'";
			echo "</script>";
		}
	}
	
	/**
	 * 微信用户授权，获取用户信息，根据参数决定页面跳转地址
	 * baikeliang
	 */
	public function weixinUserInfo(){
		$code = $_GET['code'];
		$type = $_GET['type'];
		if(!empty($code)){
			$weixin=new Weixin();
			$res=$weixin->getUserAccessToken($code);
			$user_info=$weixin->getUserInfo($res['access_token'],$res['openid']);
			session('openid', $user_info['openid']);
			session('nickname', $user_info['nickname']);
			session('sex', $user_info['sex']);
			session('country', $user_info['country']);
			session('province', $user_info['province']);
			session('city', $user_info['city']);
			session('headimgurl', $user_info['headimgurl']);
			$model = D('User');
			$user = $model->openidLogin($user_info['openid']);
			if($user && $user['user_token']){
				if($type=='info'){
					//跳转到个人信息页面
					if($user['identity_id']==1){
						$url = C('DOMAIN_NAME').'/mintwx/html/mine.html';
					}elseif($user['identity_id']==2){
						$url = C('DOMAIN_NAME').'/mintwx/html/doctorCenter.html';
					}else{
						$url = C('DOMAIN_NAME').'/mintwx/html/mine.html';
					}
				}elseif($type=='order'){
					//跳转到预约页面
					$url = C('DOMAIN_NAME').'/mintwx/html/order/chooseproj.html';
				}elseif($type=='order_info'){
					$id = $_GET['id'];
					//跳转到预约详情页面
					$url = C('DOMAIN_NAME').'/mintwx/html/myOrderInfo.html?id='.$id;
				}elseif($type=='record_info'){
					$id = $_GET['id'];
					//跳转到病历详情页面
					$url = C('DOMAIN_NAME').'/mintwx/html/myCasedesc.html?id='.$id;
				}elseif($type=='visit'){
					$m_id = $_GET['m_id'];
					$app_id = $_GET['app_id'];
					//跳转到复诊详情页面
					$url = C('DOMAIN_NAME').'/mintwx/html/order/creturnVisit.html?m_id='.$m_id.'&app_id='.$app_id;
				}elseif($type=='bill_info'){
					$id = $_GET['id'];
					//跳转到账单详情页面
					$url = C('DOMAIN_NAME').'/mintwx/html/myBillContent.html?id='.$id;
				}elseif($type=='doctor_order'){
					//跳转到医生预约列表页面
					$url = C('DOMAIN_NAME').'/mintwx/html/doctormyOrder.html';
				}elseif($type=='record'){
					//跳转到医生预约列表页面
					$url = C('DOMAIN_NAME').'/mintwx/html/myCase.html';
				}elseif($type=='case_info'){
					$id = $_GET['id'];
					//跳转到病历详情页面
					$url = C('DOMAIN_NAME').'/mintwx/html/casedesc.html?type=user&id='.$id;
				}
			}else{
				//跳转到登录页面
				if($type=='info'){
					//跳转到个人信息页面
					$url = C('DOMAIN_NAME').'/mintwx/login.html?type=info';
				}elseif($type=='order'){
					//跳转到预约页面
					$url = C('DOMAIN_NAME').'/mintwx/login.html?type=order';
				}elseif($type=='order_info'){
					$id = $_GET['id'];
					//跳转到预约详情页面
					$url = C('DOMAIN_NAME').'/mintwx/login.html?type=order_info&id='.$id;
				}elseif($type=='record_info'){
					$id = $_GET['id'];
					//跳转到病历详情页面
					$url = C('DOMAIN_NAME').'/mintwx/login.html?type=record_info&id='.$id;
				}elseif($type=='visit'){
					$m_id = $_GET['m_id'];
					$app_id = $_GET['app_id'];
					//跳转到复诊详情页面
					$url = C('DOMAIN_NAME').'/mintwx/login.html?type='.$type.'&m_id='.$m_id.'&app_id='.$app_id;
				}elseif($type=='bill_info'){
					$id = $_GET['id'];
					//跳转到账单详情页面
					$url = C('DOMAIN_NAME').'/mintwx/login.html?type='.$type.'&id='.$id;
				}elseif($type=='doctor_order'){
					//跳转到医生预约列表页面
					$url = C('DOMAIN_NAME').'/mintwx/login.html?type='.$type;
				}elseif($type=='record'){
					//跳转到病历列表页面
					$url = C('DOMAIN_NAME').'/mintwx/login.html?type='.$type;
				}elseif($type=='case_info'){
					$id = $_GET['id'];
					//跳转到病历详情页面
					$url = C('DOMAIN_NAME').'/mintwx/login.html?type='.$type.'&id='.$id;
				}
			}
			header("Location: ".$url);
		}else{
			$url = urlencode('http://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']);
			$share_url='https://open.weixin.qq.com/connect/oauth2/authorize?appid='.C('WX_APPID').'&redirect_uri='.$url.'&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect';
			echo "<script type='text/javascript'>";
			echo "window.location.href='$share_url'";
			echo "</script>";
		}
	}

	/**
	 * 微信静默授权，获取用户信息，跳转到医生个人信息
	 * baikeliang
	 * 2017-1-6
	 */
	public function weixinBaseDoctor(){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
		$code = $_GET['code'];
		$type = $_GET['type'];
		if(!empty($code)){
			$weixin=new Weixin();
			$res=$weixin->getUserAccessToken($code);
			$user_info=$weixin->getUserInfo2($weixin->getAccessToken(),$res['openid']);
			session('openid', $user_info['openid']);
			if($user_info['subscribe']){
				session('nickname', $user_info['nickname']);
				session('sex', $user_info['sex']);
				session('country', $user_info['country']);
				session('province', $user_info['province']);
				session('city', $user_info['city']);
				session('headimgurl', $user_info['headimgurl']);
			}
			$model = D('User');
			$user = $model->openidLogin($user_info['openid']);
			//跳转到医生个人信息页面
			$id = $_GET['id'];
			$url = C('DOMAIN_NAME').'/doctorasist/?id='.$id;
			header("Location: ".$url);
		}else{
			$url = urlencode('http://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']);
			$share_url='https://open.weixin.qq.com/connect/oauth2/authorize?appid='.C('WX_APPID').'&redirect_uri='.$url.'&response_type=code&scope=snsapi_base&state=1#wechat_redirect';
			echo "<script type='text/javascript'>";
			echo "window.location.href='$share_url'";
			echo "</script>";
		}
	}

	/**
	 * 微信静默授权，获取用户信息，跳转到病人预约列表信息
	 * baikeliang
	 * 2017-1-6
	 */
	public function weixinBasePatientList(){
		if(session('userId')){
			//跳转到病人预约列表信息页面
			$url = C('DOMAIN_NAME').'/mintwx/html/myOrder.html';
			header("Location: ".$url);
		}else{
			$code = $_GET['code'];
			$type = $_GET['type'];
			if(!empty($code)){
				$weixin=new Weixin();
				$res=$weixin->getUserAccessToken($code);
				$user_info=$weixin->getUserInfo2($weixin->getAccessToken(),$res['openid']);
				session('openid', $user_info['openid']);
				if($user_info['subscribe']){
					session('nickname', $user_info['nickname']);
					session('sex', $user_info['sex']);
					session('country', $user_info['country']);
					session('province', $user_info['province']);
					session('city', $user_info['city']);
					session('headimgurl', $user_info['headimgurl']);
				}
				$model = D('User');
				$user = $model->openidLogin($user_info['openid']);
				//跳转到病人预约列表信息页面
				$url = C('DOMAIN_NAME').'/mintwx/html/myOrder.html';
				header("Location: ".$url);
			}else{
				$url = urlencode('http://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']);
				$share_url='https://open.weixin.qq.com/connect/oauth2/authorize?appid='.C('WX_APPID').'&redirect_uri='.$url.'&response_type=code&scope=snsapi_base&state=1#wechat_redirect';
				echo "<script type='text/javascript'>";
				echo "window.location.href='$share_url'";
				echo "</script>";
			}
		}
	}
	
	//获取jssdk签名包
	public function getPackage(){
		$weixin=new Weixin();
		echo json_encode($weixin->getSignaturePackage());
	}
	
	//微信消息回复回调页面
	public function autoReply(){
		$reply=new Reply();
		//第一次验证需打开此代码
		//$reply->valid();
		$reply->responseMsg();
	}

    //发微信消息
    public function sendWeixinMsg(){
    	$openid = $_GET['openid'];
    	$weixin=new Weixin();
    	$res=$weixin->sendImgTextMessage($openid,'test','http://www.uelibrary.com/ue_lib/Home/index.php/Home/Index/photoActivity','http://www.uelibrary.com/UElibrary/App/Takephotos/images/1.jpg');
    	var_dump($res);
    	//$res=$weixin->sendImgTextMessageToAllMyFriends('一个IT码农引发的摄影大赛','印象中，提起IT男，就是宅男、沉闷、古板等等这些不好的词语。','http://www.uelibrary.com/ue_lib/Home/index.php/Home/Index/photoActivity','http://www.uelibrary.com/UElibrary/App/Takephotos/images/1.jpg');
    }
    
	//生成微信自定义菜单
	public function customMenu(){
		$weixin=new Weixin();
		$ac=$weixin->getAccessToken();
		$url='https://api.weixin.qq.com/cgi-bin/menu/create?access_token='.$ac;
		/*{	
	          "type":"view",
	          "name":"访问网站",
	          "url":"http://www.uelibrary.com"
	          "type":"media_id",
			               "name":"关于我们",
			               "media_id":"100000005"
	      },
		$data='{
			     "button":[
			      {
			           "name":"薄荷口腔",
			           "sub_button":[
			            {
			               "type":"view",
			               "name":"企业服务",
			               "url":"http://mp.weixin.qq.com/s?__biz=MzAwNDk4MjAxNA==&mid=100000007&idx=1&sn=e04fbb78d184dcbb3c007d1447ad9c36&scene=18#wechat_redirect"
			            },
						{
			               "type":"view",
			               "name":"医生团队",
			               "url":"http://test.uelibrary.com/mintwx/html/list.html"
			            },
						{
			               "type":"view",
			               "name":"关于我们",
			               "url":"http://mp.weixin.qq.com/s?__biz=MzAwNDk4MjAxNA==&mid=100000005&idx=1&sn=91722587cb08600e0f6f5e6c2fae7923#rd"
			            }
			            ]
			      },
			      {
			           "type":"view",
			           "name":"文章精选",
			           "url":"http://mp.weixin.qq.com/mp/homepage?__biz=MzAwNjEyNzc5Mw==&hid=2&sn=bf24f6f632da8a9c4d15e22dfd017f3e#wechat_redirect"
			      },
			      {
			           "type":"view",
			           "name":"用户中心",
			           "url":"http://test.uelibrary.com/mintAdmin/index.php/Home/Index/weixinUserInfo/type/info"
			      },
			      {
			           "type":"view",
			           "name":"我要预约",
			           "url":"'.C('DOMAIN_NAME').'/mintAdmin/index.php/Home/Index/weixinUserInfo/type/order"
			      }
			      ]
			   }';
		$data='{
			     "button":[
			      {
			           "type":"view",
			           "name":"我要预约",
			           "url":"'.C('DOMAIN_NAME').'/mintAdmin/index.php/Home/Index/weixinUserInfo/type/order"
			      },
			      {
			           "type":"view",
			           "name":"报名申请",
			           "url":"https://jinshuju.net/f/RxJymX"
			      },
			      {
			           "name":"薄荷服务",
			           "sub_button":[
			            {
			               "type":"view",
			               "name":"薄荷介绍",
			               "url":"http://mp.weixin.qq.com/s?__biz=MzAwNDk4MjAxNA==&mid=100000033&idx=1&sn=e49a7d819c87d83a2ea43224e4679e4a#rd"
			            },
						{
			               "type":"view",
			               "name":"医生团队",
			               "url":"'.C('DOMAIN_NAME').'/mintwx/html/list.html"
			            }
			            ]
			      },
			      {
			           "type":"view",
			           "name":"用户中心",
			           "url":"'.C('DOMAIN_NAME').'/mintAdmin/index.php/Home/Index/weixinUserInfo/type/info"
			      }
			      ]
			   }';*/
		$data='{
			"button":[
				{
					"type":"view",
			        "name":"我要预约",
			        "url":"'.C('DOMAIN_NAME').'/mintAdmin/index.php/Home/Index/weixinUserInfo/type/order"
			    },
				{
		           	"type":"view",
		           	"name":"用户中心",
		           	"url":"'.C('DOMAIN_NAME').'/mintAdmin/index.php/Home/Index/weixinUserInfo/type/info"
      			},
				{
					"name":"更多",
					"sub_button":[
						{
							"type":"click",
							"name":"薄荷百科",
							"key":"Mint_Encyclopedias"
						},
						{
							"type":"view",
							"name":"3.8活动",
							"url":"https://h5.youzan.com/v2/goods/2fz23cylglmyw"
						},
						{
			               	"type":"view",
			               	"name":"医生团队",
			               	"url":"'.C('DOMAIN_NAME').'/mintwx/html/list.html"
			            },
						{
							"type":"view",
							"name":"薄荷介绍",
							"url":"http://mp.weixin.qq.com/s?__biz=MzAwNDk4MjAxNA==&mid=100000033&idx=1&sn=e49a7d819c87d83a2ea43224e4679e4a#rd"
            			},
						{
			               	"type":"view",
			               	"name":"联系客服",
			               	"url":"https://static.meiqia.com/dist/standalone.html?eid=47693&groupid=ee0de96cec4b430a3ea8c2bab2e3743a"
            			}
            		]
			  	}
			]
		}';
		echo $weixin->http_post($url, $data,true);
	}

	//生成带参数的二维码
	public function createQR(){
		$weixin=new Weixin();
		$ac=$weixin->getAccessToken();
		$url='https://api.weixin.qq.com/cgi-bin/qrcode/create?access_token='.$ac;
		$type = $_GET['type'];
		$scene_id = $_GET['scene_id'];
		$scene_str = $_GET['scene_str'];
		if($type == 1){
			//生成临时二维码
			$data = '{"expire_seconds": 1800, "action_name": "QR_SCENE", "action_info": {"scene": {"scene_id": '.$scene_id.'}}}';
		}else{
			//生成永久二维码
			$data= '{"action_name": "QR_LIMIT_SCENE", "action_info": {"scene": {"scene_id": '.$scene_id.',"scene_str": '.$scene_str.'}}}';
		}
		echo $weixin->http_post($url, $data,true);
	}

    //获取验证码
    public function getVerify(){
    	$config =    array(    
    	'fontSize'    =>    40,    		// 验证码字体大小    
    	'length'      =>    3,     		// 验证码位数    
    	'useNoise'    =>    false, 		// 关闭验证码杂点
    	'useCurve'    => 	false, 		// 关闭混淆线
    	'useNoise'	  =>	false, 		// 关闭杂点
    	'fontttf'	  =>	'4.ttf', 	// 设置字体
    	);
    	$verifymodel= new \Think\Verify($config);
    	$verifymodel->entry();
    }

	//发送短信验证码
	public function sendMsg(){
		//header('Content-Type: text/html; charset=gb2312');
		if(!IS_POST){
			echo json_encode(array('code'=>0,'msg'=>'请使用post请求！'));
			die;
		}
		
		$phone=I('phone');
		if(!$phone){
			$str=file_get_contents('php://input');
			$arr=json_decode($str,true);
			foreach ($arr as $key => $value) {
				$_POST[$key]=$value;
			}
			$phone=I('phone');
		}
		if(!$phone){
			echo json_encode(array('code'=>0,'msg'=>'缺少手机号！'));
			die;
		}
		if(!isMobile($phone)){
			echo json_encode(array('code'=>0,'msg'=>'手机号格式不对！'));
			die;
		}
		/*if (!is_numeric($phone)){
			echo json_encode(array('code'=>0,'msg'=>'手机号不是数字！'));
			die;
		}elseif(strlen($phone) != 11){
			echo json_encode(array('code'=>0,'msg'=>'手机号长度不对！'));
			die;
		}
		$code=I('post.code');
		if(!$code){
			echo json_encode(array('code'=>0,'msg'=>'缺少图片验证码！'));
			die;
		}
		if (!checkVerify($code)){
			echo json_encode(array('code'=>0,'msg'=>'图片验证码不正确！'));
			die;
		}*/
		//$ip=get_client_ip();
		$ip=getIP();
		$verifyModel=D('Verify');
		//检查ip地址发送短信条数
		$map['ip']=array('EQ',$ip);
		$map['create_time']=array('GT',time()-60*60);
		$count=$verifyModel->where($map)->count();
		if($count>100){
			echo json_encode(array('code'=>0,'msg'=>'同一ip发送验证码次数过多！'));
			die;
		}
		
		$where['phone']=$phone;
		$r=$verifyModel->where($where)->order('id desc')->find();
		if($r){
			if($r['create_time']+60>time()){
				echo json_encode(array('code'=>0,'msg'=>'60s内只能发送一次验证码！'));
				die;
			}
		}
		$data['phone']=$phone;
		$data['ip']=$ip;
		//随机生成6位短信验证码
		$data['verify']=rand(100000,999999);
		$data['create_time']=time();
		//将验证码存入数据库
		if($verifyModel->add($data)){
			//发送验证码
			/*$content = '验证码：'.$data['verify'];
			$res=sendMsg($phone,$content);
			//解析处理XML
			$mxl=simplexml_load_string($res);
			$error_code=(string)$mxl->ErrorNum;
			if($error_code==='0'){
				echo json_encode(array('code'=>1,'msg'=>'发送成功！'));
			}else{
				echo json_encode(array('code'=>0,'msg'=>'发送失败！','error_code'=>$mxl->ErrorNum));
			}*/
			$content = '{"name":"'.$data['verify'].'"}';
        	$sendObj=new SendMsg();
        	$res=$sendObj->send($phone,$content,C('DX_TEMPLATECODE'));
        	\Think\Log::write('短信发送记录：'.$res,'INFO');
        	$rs = json_decode($res);
        	if($rs->RequestId){
        		echo json_encode(array('code'=>1,'msg'=>'发送成功！'));
        	}else{
        		echo json_encode(array('code'=>0,'msg'=>'发送失败！'));
        	}
		}else{
			echo json_encode(array('code'=>0,'msg'=>'发送失败，记录出现问题！'));
		}
		die;
	}

	//诊所列表
	public function clinicLst(){
		$clinicModel=D('Clinic');
        $where['is_show']=array('EQ',1);
		$data=$clinicModel->field('id,clinic_name')->where($where)->order('sort asc')->select();
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
     * 折扣列表
     * baikeliang
     * 2017-3-22
     */
    public function discountLst(){
        $model=D('Discount');
        $where['is_use']=array('EQ',1);
        $data=$model->field('id,discount,is_use,sort,create_time')->where($where)->order('sort')->select();
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

	//获取单个病例
	public function getRecordInfo(){
		if(!$id=I('record_id')){
			echo json_encode(array('code'=>0,'msg'=>'缺少病例id！'));
			exit;
		}
		$model = D('Record');
		$data=$model->field('id,tooth_body,tooth_pic,tooth_around,tooth_type,tooth_square,tooth_suggestion')->where("id=".$id)->find();
		if($data){
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
	 * 生成薄荷号
	 * baikeliang
	 * 2016-12-14
	 */
	public function modifyMintName(){
		$usermodel=D('User');
		$where['mint_name']=array('EQ','');
		$data=$usermodel->field('id')->where($where)->select();
		if($data){
			foreach ($data as $key => $value){
				$map['id']=$value['id'];
				$map['mint_name']=$usermodel->createMintName();
				$usermodel->save($map);
			}
		}
	}
	
	//静默授权获取微信信息
	public function testWeixinBase(){
		header('Content-Type: text/html; charset=utf-8');
		$code = $_GET['code'];
		if(!empty($code)){
			$weixin=new Weixin();
			$res=$weixin->getUserAccessToken($code);
			//print_r($res);
			$user_info=$weixin->getUserInfo2($weixin->getAccessToken(),$res['openid']);
			echo '<pre>';
			print_r($user_info);
			session('openid', $user_info['openid']);
			if($user_info['subscribe']){
				session('nickname', $user_info['nickname']);
				session('sex', $user_info['sex']);
				session('country', $user_info['country']);
				session('province', $user_info['province']);
				session('city', $user_info['city']);
				session('headimgurl', $user_info['headimgurl']);
			}
			echo '<br>';
			print_r($_SESSION);exit;
			/*if($user_info['subscribe']==0){
				echo '未关注用户进入薄荷口腔！';exit;
				\Think\Log::write('未关注用户进入薄荷口腔！','ERR');
			}else{
				session('openid', $user_info['openid']);
				session('nickname', $user_info['nickname']);
				session('headimgurl', $user_info['headimgurl']);
			}*/
		}else{
			$url = urlencode('http://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']);
			$share_url='https://open.weixin.qq.com/connect/oauth2/authorize?appid='.C('WX_APPID').'&redirect_uri='.$url.'&response_type=code&scope=snsapi_base&state=1#wechat_redirect';
			echo "<script type='text/javascript'>";
			echo "window.location.href='$share_url'";
			echo "</script>";
		}
	}
	
	//用户授权获取微信信息
	public function testWeixinUserInfo(){
		$code = $_GET['code'];
		if(!empty($code)){
			$weixin=new Weixin();
			$res=$weixin->getUserAccessToken($code);
			$user_info=$weixin->getUserInfo($res['access_token'],$res['openid']);
			print_r($user_info);exit;
		}else{
			$url = urlencode('http://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']);
			$share_url='https://open.weixin.qq.com/connect/oauth2/authorize?appid='.C('WX_APPID').'&redirect_uri='.$url.'&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect';
			echo "<script type='text/javascript'>";
			echo "window.location.href='$share_url'";
			echo "</script>";
		}
	}
	
	//获取ip
	public function testGetIp(){
		$ip=get_client_ip();
		//$ip=getIP();
		echo $ip;
	}
	
	//发送微信模板消息
	public function testSendMsg(){
		$openid = $_GET['openid'];
		$template_id = 'rPMCi3zo9NZL4MALTblBvvL9FmwvSn9B6VWGCUofNX4';
		$url = "http://www.baidu.com";
		$message = '"first": {
                       "value":"恭喜你预约成功！",
                       "color":"#173177"
                   },
                   "examuser":{
                       "value":"白克亮",
                       "color":"#173177"
                   },
                   "regdate": {
                       "value":"2016年9月22日",
                       "color":"#173177"
                   },
                   "address": {
                       "value":"北京",
                       "color":"#173177"
                   },
                   "hosptel": {
                       "value":"13371732523",
                       "color":"#173177"
                   },
                   "remark":{
                       "value":"白克亮 2016-10-14\n",
                       "color":"#173177"
                   }';
		
		$weixin=new Weixin();
		$data=$weixin->sendTemplateMsg($openid,$template_id,$url,$message);
		print_r($data);
		//返回json数据
		//echo json_encode($data);
	}

	//发送短信验证码
	public function testSendMsg2(){
		$phone='13371732523';
		$content = '用户tang，已支付洗牙项目0.01，支付时间为2016年10月27日星期四14:44。';
		$res=sendMsg($phone,$content);
		//解析处理XML
		$mxl=simplexml_load_string($res);
		print_r($mxl);exit;
		$error_code=(string)$mxl->ErrorNum;
		if($error_code==='0'){
			echo json_encode(array('code'=>1,'msg'=>'发送成功！'));
		}else{
			echo json_encode(array('code'=>0,'msg'=>'发送失败！','error_code'=>$mxl->ErrorNum));
		}
		die;
	}

	//发送短信验证码
	public function testSendMsg3(){
		//include_once 'Tool/AliyunCore/Config.php';
		import('Tool.AliyunCore.Config',APP_PATH,'.php');
		import('Tool.AliyunSms.Sms.Request.V20160927.SingleSendSmsRequest',APP_PATH,'.php');
		
	    $iClientProfile = \DefaultProfile::getProfile("cn-hangzhou", "your accessKey", "your accessSecret");        
	    $client = new \DefaultAcsClient($iClientProfile);    
	    $request = new \SingleSendSmsRequest();
	    $request->setSignName("验证测试");/*签名名称*/
	    $request->setTemplateCode("SMS_11111");/*模板code*/
	    $request->setRecNum("手机号");/*目标手机号*/
	    $request->setParamString("{\"name\":\"sanyou\"}");/*模板变量，数字一定要转换为字符串*/
	    try {
	        $response = $client->getAcsResponse($request);
	        print_r($response);
	    }
	    catch (ClientException  $e) {
	        print_r($e->getErrorCode());   
	        print_r($e->getErrorMessage());   
	    }
	    catch (ServerException  $e) {        
	        print_r($e->getErrorCode());   
	        print_r($e->getErrorMessage());
	    }
	}

	//项目患者端分类列表
    public function catLst(){
        $belong=I('belong');
        if($belong!=1){
            $belong=2;
        }
        $model=D('Category');
        $where['belong']=array('EQ',$belong);
        $where['is_use']=array('EQ',1);
        $data=$model->where($where)->order('`order` asc')->select();
        if($data){
            $code=1;
            $msg='查询成功！';
        }else{
            $code=1;
            $msg='没有数据！';
        }
        echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$data));
    }

    //患者端项目价格列表
    public function Projectindex(){
        $model=D('Project');
        if(I('cat_id')){
        	$where['cat_id1']=array('EQ',I('cat_id'));
        }
        //获取当前页和每页显示数量
        $page=I('p')?I('p'):1;
        $p_len=I('p_len')?I('p_len'):10;
        $start=($page-1)*$p_len;
        //查询数据
        $count=$model->where($where)->count();
        $data=$model->field('*')->where($where)->limit($start.','.$p_len)->order('`order1` asc')->select();
        if($data){
            foreach ($data as $key => $value) {
                //处理时间
                $data[$key]['create_time']=date('Y-m-d',$value['create_time']);
            }
            $code=1;
            $msg='查询成功！';
        }else{
            $code=1;
            $msg='没有数据！';
        }
        echo json_encode(array('code'=>$code,'msg'=>$msg,'count'=>(int)$count,'data'=>$data));
    }
}