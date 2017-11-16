<?php 
ini_set('date.timezone','Asia/Shanghai');
error_reporting(E_ERROR);
require_once "../lib/WxPay.Config.php";
require_once "../lib/WxPay.Api.php";
require_once "WxPay.JsApiPay.php";
require_once 'log.php';

//初始化日志
$logHandler= new CLogFileHandler("../logs/".date('Y-m-d').'.log');
$log = Log::Init($logHandler, 15);

//打印输出数组信息
/*function printf_info($data)
{
    foreach($data as $key=>$value){
        echo "<font color='#00ff55;'>$key</font> : $value <br/>";
    }
}
*/
//⊙获取支付信息
$hand=mysql_connect(WxPayConfig::DB_HOST,WxPayConfig::DB_USER,WxPayConfig::DB_PWD);
mysql_set_charset("utf8");
mysql_select_db(WxPayConfig::DB_NAME);
session_start();
$bill_id=$_POST['bill_id']=1;
if(!$bill_id){
	echo json_encode(array('code'=>0,'msg'=>'缺少账单id'));
	die;
}
$sql="select * from mint_bill where id=$bill_id";
$result=mysql_query($sql);
if($result){
	$data=mysql_fetch_assoc($result);
}else{
	echo json_encode(array('code'=>0,'msg'=>'账单id错误或不存在'));
	die;
}
//①、获取用户openid
if(!$_SESSION['openid']){
	$sql="select openid from mint_user where id=".$data['patient_id'];
	$result=mysql_query($sql);
	if($result){
		$res=mysql_fetch_assoc($result);
		$openId=$res['openid'];
	}else{
		echo json_encode(array('code'=>0,'msg'=>'用户不存在'));
		die;
	}	
}else{
	$openId=$_SESSION['openid'];
}

//mysql_close($hand);
$tools = new JsApiPay();
//$openId = $tools->GetOpenid();
//②、统一下单
$input = new WxPayUnifiedOrder();
$input->SetBody("薄荷口腔-".$data['project_name']);
$input->SetAttach($data['clinic_name']);
$input->SetOut_trade_no($data['bill_number']);
$input->SetTotal_fee("1");
$input->SetTime_start(date("YmdHis"));
$input->SetTime_expire(date("YmdHis", time() + 600));
$input->SetGoods_tag("医生：".$data['doctor_name']);
/*$input->SetBody("薄荷口腔");
$input->SetAttach('test');
$input->SetOut_trade_no(WxPayConfig::MCHID.date("YmdHis"));
$input->SetTotal_fee("1");
$input->SetTime_start(date("YmdHis"));
$input->SetTime_expire(date("YmdHis", time() + 600));
$input->SetGoods_tag("test");*/
$input->SetNotify_url("http://mint.zhenweitech.cn/mintAdmin/WxpayAPI_php_v3/example/notify.php");
$input->SetTrade_type("JSAPI");
$input->SetOpenid($openId);
$order = WxPayApi::unifiedOrder($input);
//echo '<font color="#f00"><b>统一下单支付单信息</b></font><br/>';
//printf_info($order);
$jsApiParameters = $tools->GetJsApiParameters($order);
echo $jsApiParameters;

//获取共享收货地址js函数参数
//$editAddress = $tools->GetEditAddressParameters();

//③、在支持成功回调通知中处理成功之后的事宜，见 notify.php
/**
 * 注意：
 * 1、当你的回调地址不可访问的时候，回调通知会失败，可以通过查询订单来确认支付是否成功
 * 2、jsapi支付时需要填入用户openid，WxPay.JsApiPay.php中有获取openid流程 （文档可以参考微信公众平台“网页授权接口”，
 * 参考http://mp.weixin.qq.com/wiki/17/c0f37d5704f0b64713d5d2c37b468d75.html）
 */
?>

