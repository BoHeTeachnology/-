<?php
use Alpha\B;
use Tool\Weixin;
//post方法提交数据
function http_post($url, $data, $ssl = FALSE){
		$header[] = "content-type: application/x-www-form-urlencoded; charset=GB2312";
		// 模拟提交数据函数
		$curl = curl_init(); // 启动一个CURL会话
		curl_setopt($curl, CURLOPT_URL, $url); // 要访问的地址
		if($ssl){
			curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0); // 对认证证书来源的检查
			curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 2); // 从证书中检查SSL加密算法是否存在
		}
		curl_setopt($curl, CURLOPT_HTTPHEADER, $header);
		curl_setopt($curl, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']); // 模拟用户使用的浏览器
		curl_setopt($curl, CURLOPT_AUTOREFERER, 1); // 自动设置Referer
		curl_setopt($curl, CURLOPT_POST, 1); // 发送一个常规的Post请求
		curl_setopt($curl, CURLOPT_POSTFIELDS, $data); // Post提交的数据包
		curl_setopt($curl, CURLOPT_TIMEOUT, 30); // 设置超时限制防止死循环
		curl_setopt($curl, CURLOPT_HEADER, 0); // 显示返回的Header区域内容
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1); // 获取的信息以文件流的形式返回
		$tmpInfo = curl_exec($curl); // 执行操作
		if (curl_errno($curl)) {
			return FALSE;
		}
		curl_close($curl); // 关闭CURL会话
		return $tmpInfo; // 返回数据
}

//post方法提交XML数据
function http_post_xml($url, $xmlData){
		$header[] = "Content-type: text/xml";        //定义content-type为xml,注意是数组
		$ch = curl_init ($url);
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
		curl_setopt($ch, CURLOPT_POST, 1);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $xmlData);
		$response = curl_exec($ch);
		if(curl_errno($ch)){
			print curl_error($ch);
			return false;
		}
		curl_close($ch);
		return $response; // 返回数据
}

//get方法请求数据
function httpGet($url) {
	$curl = curl_init();
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_TIMEOUT, 500);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($curl, CURLOPT_URL, $url);
    $res = curl_exec($curl);
    curl_close($curl);
    return $res;
}

//发送验证码
function sendMsg($phone,$content){
	$url='http://www.lanz.net.cn/LANZGateway/DirectSendSMSs.asp';
	$content='【薄荷牙医】'.$content;
	\Think\Log::write($content,'INFO');
	$content=mb_convert_encoding($content, "GB2312", "UTF-8");
	$content=urlencode($content);
	$data='UserID=861760&Account=boheyayi&Password=0816341B87950ECBEF18033A5BCDE9DE2B2E8D31&SMSType=1&Content='.$content.'&Phones='.$phone.'&SendDate=&SendTime=';
	//echo $url.$data;exit;
	return http_post($url,$data,true);
}

/**
 * 发送短信验证码aliyun
 * baikeliang
 * 2016-12-12
 */
function sendSms($phone,$signname,$templatecode,$paramstring){
	$url='https://sms.aliyuncs.com/?Action=SingleSendSms&SignName='.$signname.'&TemplateCode='.$templatecode.'&RecNum='.$phone.'&ParamString='.$paramstring.'&Format=json&Version=2016-09-27
&Signature=Pc5WB8gokVn0xfeu%2FZV%2BiNM1dgI%3D 
&SignatureMethod=HMAC-SHA1
&SignatureNonce=e1b44502-6d13-4433-9493-69eeb068e955
&SignatureVersion=1.0
&AccessKeyId=key-test
&Timestamp=2015-11-23T12:00:00Z';
	return httpGet($url);
}

//计算距现在的时间
function computeTime($time){
	$disparity = time() - $time;
	switch($disparity){
		case $disparity>86400:
			return floor($disparity/86400).'天前';
			break;
		case $disparity>3600:
			return floor($disparity/3600).'小时前';
			break;
		case $disparity>60:
			return floor($disparity/60).'分钟前';
			break;
		default:
			return $disparity.'秒前';
			break;
	}
}

//验证验证码
function checkVerify($code){
	$verifymodel= new \Think\Verify();
	return $verifymodel->check($code);
}

//获取ip
function getIP(){
	if (getenv("HTTP_CLIENT_IP"))
		$ip = getenv("HTTP_CLIENT_IP");
	else if(getenv("HTTP_X_FORWARDED_FOR"))
		$ip = getenv("HTTP_X_FORWARDED_FOR");
	else if(getenv("REMOTE_ADDR"))
		$ip = getenv("REMOTE_ADDR");
	else $ip = "Unknow";
	return $ip;
}

/**
 * 验证手机号格式是否正确
 * @author 
 * @param INT $mobile
 * @return B 正确为true，错误为false
 */
function isMobile($mobile) {
	if (!is_numeric($mobile)) {
		return false;
	}
	//return preg_match('#^13[\d]{9}$|^14[5,7]{1}\d{8}$|^15[^4]{1}\d{8}$|^17[0,6,7,8]{1}\d{8}$|^18[\d]{9}$#', $mobile) ? true : false;
	return preg_match('#^1[\d]{10}$#', $mobile) ? true : false;
}

/**
 * 发送未支付的账单通知功能
 * baikeliang
 * 2016-11-22
 */
function sendWXBillMsg($uid,$openid){
	$billmodel = D('Bill');
	$where['patient_id']=array('EQ',$uid);
	$where['status']=array('EQ',0);
	$data=$billmodel->field('id,bill_number,actual_money,visit_time,doctor_name,clinic_name')->where($where)->select();
	
	$template_id = C('WX_Bill');
	foreach ($data as $key => $value) {
		$visit_time=date('Y-m-d H:i',$value['visit_time']);
		$url = C('DOMAIN_NAME')."/mintAdmin/index.php/Home/Index/weixinBase/type/bill_info/id/".$value['id'];
		$message = '"first": {
	                       "value":"您的账单已经生成：",
	                       "color":"#173177"
	                   },
	                   "keyword1":{
	                       "value":"'.$value['bill_number'].'",
	                       "color":"#173177"
	                   },
	                   "keyword2": {
	                       "value":"'.$value['actual_money'].'元",
	                       "color":"#173177"
	                   },
	                   "keyword3": {
	                       "value":"'.$visit_time.'",
	                       "color":"#173177"
	                   },
	                   "keyword4": {
	                       "value":"'.$value['doctor_name'].'",
	                       "color":"#173177"
	                   },
	                   "keyword5": {
	                       "value":"'.$value['clinic_name'].'",
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
}