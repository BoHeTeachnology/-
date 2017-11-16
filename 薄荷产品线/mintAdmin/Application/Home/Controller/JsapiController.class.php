<?php
namespace Home\Controller;
use Think\Controller;

//ini_set('date.timezone','Asia/Shanghai');
//error_reporting(E_ERROR);
require_once "./Application/Tool/WxpayAPI/lib/WxPay.Api.php";
require_once "./Application/Tool/WxpayAPI/lib/WxPay.Notify.php";
require_once "./Application/Tool/WxpayAPI/example/WxPay.JsApiPay.php";
require_once './Application/Tool/WxpayAPI/example/log.php';
require_once './Application/Tool/WxpayAPI/example/notify.php';
//import('Tool.WxpayAPI.lib.WxPay#Api',APP_PATH,'.php');
//import('Tool.WxpayAPI.lib.WxPay#Notify',APP_PATH,'.php');
//import('Tool.WxpayAPI.example.WxPay#JsApiPay',APP_PATH,'.php');
//import('Tool.WxpayAPI.example.log',APP_PATH,'.php');
//import('Tool.WxpayAPI.example.notify',APP_PATH,'.php');
		
class JsapiController extends Controller {
	
	public function index(){
		
		if(!$id=I('bill_id')){
			echo json_encode(array('code'=>0,'msg'=>'缺少账单id！'));
			exit;
		}
		$model = D('Bill');
		$data=$model->where("id=".$id)->find();
		if(!$data){
			echo json_encode(array('code'=>0,'msg'=>'该账单不存在！'));
			exit;
		}
		
		//$openId='oRp9cxCDZDqEdUL2w6PrwAmf86G4';
		$openId=session('openid');
		if(!$openId){
			echo json_encode(array('code'=>0,'msg'=>'用户未登录！'));
			exit;
		}
		
		/*$openId=$_SESSION['openid'];
		if(!$openId){
			$usermodel = D('User');
			$userdata=$usermodel->where("id=".$data['patient_id'])->find();
			$openId=$userdata['openid'];
		}
		if(!$openId){
			echo json_encode(array('code'=>0,'msg'=>'用户未登录！'));
			exit;
		}*/
		//初始化日志
		$logHandler= new \CLogFileHandler("./Application/Runtime/Logs/Home/".date('Y-m-d').'.log');
		$log = \Log::Init($logHandler, 15);
		
		//打印输出数组信息
		function printf_info($data)
		{
			foreach($data as $key=>$value){
				echo "<font color='#00ff55;'>$key</font> : $value <br/>";
			}
		}
		//①、获取用户openid
		$tools = new \JsApiPay();
		//$openId = $tools->GetOpenid();
		//$openId = 'o_mIcs8r_veNQeO_I1DG46Px-EyU';
		//②、统一下单
		$input = new \WxPayUnifiedOrder();
		$input->SetBody("薄荷口腔-".$data['project_name']);
		$input->SetAttach($data['clinic_name']);
		$input->SetOut_trade_no($data['bill_number']);
		$input->SetTotal_fee($data['actual_money']*100);
		//$input->SetTotal_fee(1);
		$input->SetTime_start(date("YmdHis"));
		$input->SetTime_expire(date("YmdHis", time() + 600));
		$input->SetGoods_tag("医生：".$data['doctor_name']);
		$input->SetNotify_url(C('DOMAIN_NAME')."/mintAdmin/index.php/Home/Jsapi/notify");
		$input->SetTrade_type("JSAPI");
		$input->SetOpenid($openId);
		$order = \WxPayApi::unifiedOrder($input);
		//echo '<br/><font color="#f00"><b>统一下单支付单信息</b></font><br/>';
		//printf_info($order);
		$jsApiParameters = $tools->GetJsApiParameters($order);
		echo $jsApiParameters;
		//$this->assign('jsApiParameters',$jsApiParameters);
		//$this->display();
		//获取共享收货地址js函数参数
		//$editAddress = $tools->GetEditAddressParameters();
		
		//③、在支持成功回调通知中处理成功之后的事宜，见 notify.php
		/**
		 * 注意：
		 * 1、当你的回调地址不可访问的时候，回调通知会失败，可以通过查询订单来确认支付是否成功
		 * 2、jsapi支付时需要填入用户openid，WxPay.JsApiPay.php中有获取openid流程 （文档可以参考微信公众平台“网页授权接口”，
		 * 参考http://mp.weixin.qq.com/wiki/17/c0f37d5704f0b64713d5d2c37b468d75.html）
		*/
	}

	public function at_pay(){
		
		if(!$id=I('order_id')){
			echo json_encode(array('code'=>0,'msg'=>'缺少订单id！'));
			exit;
		}
		$model = D('Atorder');
		$data=$model->where("id=".$id)->find();
		if(!$data){
			echo json_encode(array('code'=>0,'msg'=>'该订单不存在！'));
			exit;
		}
		$openId=session('openid');
		if(!$openId){
			echo json_encode(array('code'=>0,'msg'=>'用户未登录'));
			exit;
		}
		//$openId='oRp9cxPi84a7fjhmQN5fBKk4olj4';
		//初始化日志
		$logHandler= new \CLogFileHandler("./Application/Runtime/Logs/Home/".date('Y-m-d').'.log');
		$log = \Log::Init($logHandler, 15);
		
		//打印输出数组信息
		function printf_info($data)
		{
			foreach($data as $key=>$value){
				echo "<font color='#00ff55;'>$key</font> : $value <br/>";
			}
		}
		//①、获取用户openid
		$tools = new \JsApiPay();
		//②、统一下单
		$input = new \WxPayUnifiedOrder();
		$input->SetBody("薄荷口腔-".$data['activity_name']);
		$input->SetAttach('优惠订购');
		$input->SetOut_trade_no($data['order_number']);
		//$input->SetTotal_fee($data['actual_money']*100);
		$input->SetTotal_fee(1);
		$input->SetTime_start(date("YmdHis"));
		$input->SetTime_expire(date("YmdHis", time() + 600));
		//$input->SetGoods_tag("医生：".$data['doctor_name']);
		$input->SetNotify_url(C('DOMAIN_NAME')."/mintAdmin/index.php/Home/Jsapi/notify");
		$input->SetTrade_type("JSAPI");
		$input->SetOpenid($openId);
		$order = \WxPayApi::unifiedOrder($input);
		//echo '<br/><font color="#f00"><b>统一下单支付单信息</b></font><br/>';
		printf_info($order);
		$jsApiParameters = $tools->GetJsApiParameters($order);
		echo $jsApiParameters;
	}

	public function notify(){
		//初始化日志
		$logHandler= new \CLogFileHandler("./Application/Runtime/Logs/Home/".date('Y-m-d').'.log');
		$log = \Log::Init($logHandler, 15);
		
		\Log::DEBUG("begin notify");
		$notify = new \PayNotifyCallBack();
		$notify->Handle(false);
		
		//处理数据
		$result = array();
		$result = (array) simplexml_load_string($GLOBALS['HTTP_RAW_POST_DATA'], 'SimpleXMLElement', LIBXML_NOCDATA);
		
		if(array_key_exists("return_code", $result)
				&& array_key_exists("result_code", $result)
				&& $result["return_code"] == "SUCCESS"
				&& $result["result_code"] == "SUCCESS"){
			if($result["out_trade_no"]){
				//修改订单状态
				/*if(strlen($result["out_trade_no"])==6){
					$model = D('Bill');
					$where["bill_number"]=$result["out_trade_no"];
				}else{
					$model = D('Atorder');
					$where["order_number"]=$result["out_trade_no"];
				}*/
				$model = D('Bill');
				$data=$model->where("bill_number=".$result["out_trade_no"])->find();
				if($data){
					$map['status'] = 1;
					$map['pay_method'] = '微信支付';
					$map['pay_time'] = strtotime($result["time_end"]);
					$where["bill_number"]=$result["out_trade_no"];
					$data1=$model->where($where)->save($map);
					if($data1){
						//发送短信
						$weekarray=array("日","一","二","三","四","五","六");
						$content='用户'.$data['patient_name'].'，已支付'.$data['project_name'].'项目'.$data['actual_money'].'元，支付时间为'.date("Y年m月d日").'星期'.$weekarray[date("w")].date("H:i");
						$phone1='13146291005';
						$res1=sendMsg($phone1,$content);
						//解析处理XML
						$mxl1=simplexml_load_string($res1);
						$error_code1=(string)$mxl1->ErrorNum;
						if($error_code1==='0'){
							\Think\Log::write('微信支付成功通知'.$phone1.'短信发送成功'.(string)$mxl,'INFO');
						}else{
							\Think\Log::write('微信支付成功通知'.$phone1.'短信发送失败'.(string)$mxl,'INFO');
						}
						$phone2='15011305712';
						$res2=sendMsg($phone2,$content);
						//解析处理XML
						$mxl2=simplexml_load_string($res2);
						$error_code2=(string)$mxl2->ErrorNum;
						if($error_code2==='0'){
							\Think\Log::write('微信支付成功通知'.$phone2.'短信发送成功'.(string)$mxl,'INFO');
						}else{
							\Think\Log::write('微信支付成功通知'.$phone2.'短信发送失败'.(string)$mxl,'INFO');
						}
						$phone3='15510074969';
						$res3=sendMsg($phone3,$content);
						//解析处理XML
						$mxl3=simplexml_load_string($res3);
						$error_code3=(string)$mxl3->ErrorNum;
						if($error_code3==='0'){
							\Think\Log::write('微信支付成功通知'.$phone3.'短信发送成功'.(string)$mxl,'INFO');
						}else{
							\Think\Log::write('微信支付成功通知'.$phone3.'短信发送失败'.(string)$mxl,'INFO');
						}
						//记录日志
						\Think\Log::write('微信支付成功返回的信息：订单状态修改成功','INFO');
					}else{
						//记录日志
						\Think\Log::write('微信支付成功返回的信息：订单状态修改失败','INFO');
					}
				}else{
					//记录日志
					\Think\Log::write('微信支付成功返回的信息：找不到该订单','INFO');
				}
				//记录日志
				\Think\Log::write('微信支付成功返回的信息：'.json_encode($result),'INFO');
			}else{
				//记录日志
				\Think\Log::write('微信支付成功返回的信息：缺少订单编号','INFO');
			}
		}
	}
	
	public function indext(){
		//初始化日志
		$logHandler= new \CLogFileHandler("./Application/Runtime/Logs/Home/".date('Y-m-d').'.log');
		$log = \Log::Init($logHandler, 15);
	
		//打印输出数组信息
		function printf_info($data)
		{
			foreach($data as $key=>$value){
				echo "<font color='#00ff55;'>$key</font> : $value <br/>";
			}
		}
	
		//①、获取用户openid
		$tools = new \JsApiPay();
		//$openId = $tools->GetOpenid();
		$openId = 'o_mIcs8r_veNQeO_I1DG46Px-EyU';
		//②、统一下单
		$input = new \WxPayUnifiedOrder();
		$input->SetBody("薄荷口腔");
		$input->SetAttach("薄荷口腔");
		$input->SetOut_trade_no(date("YmdHis"));
		$input->SetTotal_fee('1');
		$input->SetTime_start(date("YmdHis"));
		$input->SetTime_expire(date("YmdHis", time() + 600));
		$input->SetGoods_tag("医生");
		$input->SetNotify_url(C('DOMAIN_NAME')."/mintAdmin/index.php/Home/Jsapi/notify");
		$input->SetTrade_type("JSAPI");
		$input->SetOpenid($openId);
		$order = \WxPayApi::unifiedOrder($input);
		//echo '<br/><font color="#f00"><b>统一下单支付单信息</b></font><br/>';
		//printf_info($order);
		$jsApiParameters = $tools->GetJsApiParameters($order);
		//echo $jsApiParameters;
		$this->assign('jsApiParameters',$jsApiParameters);
		$this->display();
		//获取共享收货地址js函数参数
		//$editAddress = $tools->GetEditAddressParameters();
	
		//③、在支持成功回调通知中处理成功之后的事宜，见 notify.php
		/**
		 * 注意：
		 * 1、当你的回调地址不可访问的时候，回调通知会失败，可以通过查询订单来确认支付是否成功
		 * 2、jsapi支付时需要填入用户openid，WxPay.JsApiPay.php中有获取openid流程 （文档可以参考微信公众平台“网页授权接口”，
		 * 参考http://mp.weixin.qq.com/wiki/17/c0f37d5704f0b64713d5d2c37b468d75.html）
			*/
	}
}