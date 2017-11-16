<?php
namespace Tool;
use Tool\CommonUtil;
use Tool\MD5SignUtil;
use Tool\SDKRuntimeException;
class Weixin{
	public  $appid;
	private $appsecret;
	private $appaccount;
	private $mchid;
	private $partnerkey;
	private $parameters;

	//初始化
	public function __construct(){
		$this->appid=C('WX_APPID');
		$this->appsecret=C('WX_APPSECRET');
		$this->appaccount=C('WX_APPACCOUNT');
		$this->mchid=C('WX_MCHID');
		$this->partnerkey=C('WX_PARTNERKEY');
	}

	public function setParameter($parameter, $parameterValue) {
		$this->parameters[CommonUtil::trimString($parameter)] = CommonUtil::trimString($parameterValue);
	}
	
	public function getParameter($parameter) {
		return $this->parameters[$parameter];
	}
	
	function check_sign_parameters(){
		if($this->parameters["nonce_str"] == null ||
				$this->parameters["mch_billno"] == null ||
				$this->parameters["mch_id"] == null ||
				$this->parameters["wxappid"] == null ||
				$this->parameters["send_name"] == null ||
				$this->parameters["re_openid"] == null ||
				$this->parameters["total_amount"] == null ||
				$this->parameters["total_num"] == null ||
				$this->parameters["wishing"] == null ||
				$this->parameters["client_ip"] == null ||
				$this->parameters["act_name"] == null ||
				$this->parameters["remark"] == null 
		){
			return false;
		}
		return true;
	}
	
	/**
	 例如：
	 appid：    wxd111665abv58f4f
	 mch_id：    10000100
	 device_info：  1000
	 Body：    test
	 nonce_str：  ibuaiVcKdpRxkhJA
	 第一步：对参数按照 key=value 的格式，并按照参数名 ASCII 字典序排序如下：
	 stringA="appid=wxd930ea5d5a258f4f&body=test&device_info=1000&mch_i
	 d=10000100&nonce_str=ibuaiVcKdpRxkhJA";
	 第二步：拼接支付密钥：
	 stringSignTemp="stringA&key=192006250b4c09247ec02edce69f6a2d"
	 sign=MD5(stringSignTemp).toUpperCase()="9A0A8659F005D6984697E2CA0A
	 9CF3B7"
	 */
	protected function get_sign(){
		try {
			if (null == $this->partnerkey || "" == $this->partnerkey ) {
				throw new SDKRuntimeException("密钥不能为空！" . "<br>");
			}
			if($this->check_sign_parameters() == false) {   //检查生成签名参数
				throw new SDKRuntimeException("生成签名参数缺失！" . "<br>");
			}
			$commonUtil = new CommonUtil();
			ksort($this->parameters);
			$unSignParaString = $commonUtil->formatQueryParaMap($this->parameters, false);
	
			$md5SignUtil = new MD5SignUtil();
			return $md5SignUtil->sign($unSignParaString,$commonUtil->trimString($this->partnerkey));
		}catch (SDKRuntimeException $e)
		{
			die($e->errorMessage());
		}
	}
	
	//生成红包接口XML信息
	/*
	 <xml>
	 <sign>![CDATA[E1EE61A9]]</sign>
	 <mch_billno>![CDATA[00100]]</mch_billno>
	 <mch_id>![CDATA[888]]</mch_id>
	 <wxappid>![CDATA[wxcbda96de0b165486]]</wxappid>
	 <nick_name>![CDATA[nick_name]]</nick_name>
	 <send_name>![CDATA[send_name]]</send_name>
	 <re_openid>![CDATA[onqOjjXXXXXXXXX]]</re_openid>
	 <total_amount>![CDATA[100]]</total_amount>
	 <min_value>![CDATA[100]]</min_value>
	 <max_value>![CDATA[100]]</max_value>
	 <total_num>![CDATA[1]]</total_num>
	 <wishing>![CDATA[恭喜发财]]</wishing>
	 <client_ip>![CDATA[127.0.0.1]]</client_ip>
	 <act_name>![CDATA[新年红包]]</act_name>
	 <act_id>![CDATA[act_id]]</act_id>
	 <remark>![CDATA[新年红包]]</remark>
	 </xml>
	 */
	function create_hongbao_xml($retcode = 0, $reterrmsg = "ok"){
		try {
			$this->setParameter('sign', $this->get_sign());
			$commonUtil = new CommonUtil();
			return  $commonUtil->arrayToXml($this->parameters);
		}catch (SDKRuntimeException $e){
			die($e->errorMessage());
		}
	}
	
	function curl_post_ssl($url, $vars, $second=30,$aHeader=array()){
		$ch = curl_init();
		//超时时间
		curl_setopt($ch,CURLOPT_TIMEOUT,$second);
		curl_setopt($ch,CURLOPT_RETURNTRANSFER, 1);
		//这里设置代理，如果有的话
		curl_setopt($ch,CURLOPT_URL,$url);
		curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,false);
		curl_setopt($ch,CURLOPT_SSL_VERIFYHOST,false);
	
		//cert 与 key 分别属于两个.pem文件
		curl_setopt($ch,CURLOPT_SSLCERT,dirname(__FILE__).DIRECTORY_SEPARATOR.'Pem'.DIRECTORY_SEPARATOR.'apiclient_cert.pem');
		curl_setopt($ch,CURLOPT_SSLKEY,dirname(__FILE__).DIRECTORY_SEPARATOR.'Pem'.DIRECTORY_SEPARATOR.'apiclient_key.pem');
		curl_setopt($ch,CURLOPT_CAINFO,dirname(__FILE__).DIRECTORY_SEPARATOR.'Pem'.DIRECTORY_SEPARATOR.'rootca.pem');

		if( count($aHeader) >= 1 ){
			curl_setopt($ch, CURLOPT_HTTPHEADER, $aHeader);
		}
	
		curl_setopt($ch,CURLOPT_POST, 1);
		curl_setopt($ch,CURLOPT_POSTFIELDS,$vars);
		$data = curl_exec($ch);
		if($data){
			curl_close($ch);
			return $data;
		}else {
			$error = curl_errno($ch);
			curl_close($ch);
			return false;
		}
	}
	
	//get方法请求数据
	public function httpGet($url) {
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

	//post方法提交数据
	public function http_post($url, $data, $ssl = FALSE){
			// 模拟提交数据函数
			$curl = curl_init(); // 启动一个CURL会话
			curl_setopt($curl, CURLOPT_URL, $url); // 要访问的地址
			if($ssl){
				curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0); // 对认证证书来源的检查
				curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 2); // 从证书中检查SSL加密算法是否存在
			}
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

	//获取参与前面的随机字符串
	private function createNonceStr($length = 16){
	    $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	    $str = "";
	    for ($i = 0; $i < $length; $i++) {
	      $str .= substr($chars, mt_rand(0, strlen($chars) - 1), 1);
	    }
	    return $str;
    }

    //获取签名包
    public function getSignaturePackage(){
    	$jsapiTicket = $this->getJsapiTicket();
    	// 注意 URL 一定要动态获取，不能 hardcode.
	    $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
	    $url1 = "$protocol$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
	    //ajax异步请求变更url
	    @$url2= $_REQUEST['url'];
	    $url= $url2 ? $url2 : $url1;
	    $timestamp = time();
    	$nonceStr = $this->createNonceStr();
    	// 这里参数的顺序要按照 key 值 ASCII 码升序排序
    	$string = "jsapi_ticket=$jsapiTicket&noncestr=$nonceStr&timestamp=$timestamp&url=$url";
    	$signature = sha1($string);

	    $signPackage = array(
	      "appId"     => $this->appid,
	      "nonceStr"  => $nonceStr,
	      "timestamp" => $timestamp,
	      "url"       => $url,
	      "signature" => $signature,
	      "rawString" => $string
	    );
	    return $signPackage; 
    }

	//获取AccessToken
	public function getAccessToken(){
		//如果缓存存在并且没有过期就直接读取缓存
		if(file_exists('./Application/Tool/Acjt/access_token') && time()-filemtime('./Application/Tool/Acjt/access_token')<=5000){
			return file_get_contents('./Application/Tool/Acjt/access_token');
		}else{
			//缓存不存在，重新生成
			$str='https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid='.$this->appid.'&secret='.$this->appsecret;
			$json=file_get_contents($str);
			$json=json_decode($json);
			file_put_contents('./Application/Tool/Acjt/access_token', $json->access_token);
			return $json->access_token;
		}	
	}

	//获取微信JS接口的临时票据
	public function getJsapiTicket(){
		//如果缓存存在并且没有过期就直接读取缓存
		if(file_exists('./Application/Tool/Acjt/jsapi_ticket') && time()-filemtime('./Application/Tool/Acjt/jsapi_ticket')<=5000)
			return file_get_contents('./Application/Tool/Acjt/jsapi_ticket');
		else{
			//缓存不存在，重新生成
			$str='https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token='.$this->getAccessToken().'&type=jsapi';
			$json=file_get_contents($str);
			$json=json_decode($json);
			file_put_contents('./Application/Tool/Acjt/jsapi_ticket', $json->ticket);
			return $json->ticket;
		}	
	}

	//生成带参数的二维码图片
	public function getImage($id){
		$at = $this->getAccessToken();
		$url = 'https://api.weixin.qq.com/cgi-bin/qrcode/create?access_token='.$at;
		$data = '{"action_name": "QR_LIMIT_SCENE", "action_info": {"scene": {"scene_id": '.$id.'}}}';
		$ret = $this->http_post($url, $data, TRUE);
		$ret = json_decode($ret);
		$img = file_get_contents('https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket='.urlencode($ret->ticket));
		file_put_contents('./images/'.$id.'.png', $img);
	}

	//发送普通文本消息 
	public function sendMessage($to, $message){
		$at = $this->getAccessToken();
		$url = 'https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token='.$at;
		$data = '{"touser":"'.$to.'","msgtype":"text","text":{"content":"'.$message.'"}}';
		$ret = $this->http_post($url, $data, TRUE);
	}

	//发送图文消息
	public function sendImgTextMessage($to,$title,$description,$vurl,$picurl){
		$at = $this->getAccessToken();
		$url = 'https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token='.$at;
		$data = '{
				    "touser":"'.$to.'",
				    "msgtype":"news",
				    "news":{
				        "articles": [
				         {
				             "title":"'.$title.'",
				             "description":"'.$description.'",
				             "url":"'.$vurl.'",
				             "picurl":"'.$picurl.'"
				         }
				         ]
				    }
				}';
		$ret = $this->http_post($url, $data, TRUE);
	}

	// 为所有关注我的人发一个文本消息-群发
	public function sendMessageToAllMyFriends($message){
		// 先获取所有关注了我的会员
		$users = $this->getMyFriends();
		// 循环每个会员发消息
		foreach ($users as $k => $v)
			$this->sendMessage($v, $message);
	}

	// 为所有关注我的人发一个图文消息-群发
	public function sendImgTextMessageToAllMyFriends($title,$description,$vurl,$picurl){
		// 先获取所有关注了我的会员
		$users = $this->getMyFriends();
		// 循环每个会员发消息
		foreach ($users as $k => $v)
			$this->sendImgTextMessage($v, $title,$description,$vurl,$picurl);
	}

	//获取所有关注用户的openId
	// 因为微信接口一次只能取回10000个，所以需要有多于10000个的账号需要调用多次，所以要递归的取
	// 第二次以后调用接口获取账号时需要把上一次返回的next_openid传过去
	public function getMyFriends($next = ''){
		// 所有已经获取的账号
		static $users = array();
		// 已经拉取的记录数
		static $count = 0;
		$at = $this->getAccessToken();
		$str = 'https://api.weixin.qq.com/cgi-bin/user/get?access_token='.$at.'&next_openid='.$next;
		$ret = file_get_contents($str);
		// json转化成数组
		$ret = json_decode($ret, TRUE);
		// 把这次返回的会员合并到数组上
		$users = array_merge($users, $ret['data']['openid']);
		// 把这次的数量和之前的数量加到一起
		$count += $ret['count'];
		// 如果总数大于已经拉取的数量说明还有账号需要拉取
		if($ret['total'] > $count)
			$this->getMyFriends($ret['next_openid']);
		return $users;
	}

	//发送微信模板消息
	public function sendTemplateMsg($openid, $template_id, $urls, $message){
		$at = $this->getAccessToken();
		$url = 'https://api.weixin.qq.com/cgi-bin/message/template/send?access_token='.$at;
		$data = '{
				"touser":"'.$openid.'",
				"template_id":"'.$template_id.'",
				"url":"'.$urls.'",
				"topcolor":"#FF0000",
				"data":{'.$message.'}
				}';
		$ret = $this->http_post($url, $data, TRUE);
		return $ret;
	}
	
	/**
	 * 发红包
	 * baikeliang
	 * @param $re_openid：用户openid
	 * @param $send_name：红包发送者名称
	 * @param $total_amount：付款金额，单位分
	 * @param $total_num：红包发放总人数
	 * @param $wishing:红包祝福诧
	 * @param $act_name:活动名称
	 * @param $remark：备注信息
	 * @return SimpleXMLElement:xml
	 */
	public function sendRed($re_openid,$send_name,$total_amount,$total_num=1,$wishing,$act_name,$remark){
		$this->setParameter("nonce_str", $this->createNonceStr(30));//随机字符串，丌长于 32 位
		$this->setParameter("mch_billno", $this->mchid.date('YmdHis').rand(1000, 9999));//订单号
		$this->setParameter("mch_id", $this->mchid);//商户号
		$this->setParameter("wxappid", $this->appid);
		$this->setParameter("send_name", $send_name);//红包发送者名称
		$this->setParameter("re_openid", $re_openid);
		$this->setParameter("total_amount", $total_amount);//付款金额，单位分
		$this->setParameter("total_num", $total_num);//红包发放总人数
		$this->setParameter("wishing", $wishing);//红包祝福诧
		$this->setParameter("client_ip", $_SERVER["REMOTE_ADDR"]?$_SERVER["REMOTE_ADDR"]:'127.0.0.1');//调用接口的机器 Ip 地址
		$this->setParameter("act_name", $act_name);//活动名称
		$this->setParameter("remark", $remark);//备注信息
		$postXml = $this->create_hongbao_xml();
		$url = 'https://api.mch.weixin.qq.com/mmpaymkttransfers/sendredpack';
		$responseXml = $this->curl_post_ssl($url, $postXml);
		$responseObj = simplexml_load_string($responseXml, 'SimpleXMLElement', LIBXML_NOCDATA);
		return $responseObj;
	}

	//验证消息的正确性
	private function checkSignature(){
        $signature = $_GET["signature"];
        $timestamp = $_GET["timestamp"];
        $nonce = $_GET["nonce"];
		$token = TOKEN;
		$tmpArr = array($token, $timestamp, $nonce);
        sort($tmpArr, SORT_STRING);
		$tmpStr = implode( $tmpArr );
		$tmpStr = sha1( $tmpStr );
		
		if( $tmpStr == $signature ){
			return true;
		}else{
			return false;
		}
	}
	
	/**
	 * 获取授权token
	 * baikeliang
	 * @param $code：临时code
	 * @return 成功获取返回结果|失败返回false
	 */
	function getUserAccessToken($code = ''){
		$url='https://api.weixin.qq.com/sns/oauth2/access_token?appid='.C('WX_APPID').'&secret='.C('WX_APPSECRET').'&code='.$code.'&grant_type=authorization_code';
		$result=$this->httpGet($url);
		$res=json_decode($result,true);
		if($res){
			return $res;
		}else{
			return false;
		}
	}
	
	/**
	 * 获取用户信息
	 * baikeliang
	 * @param string $access_token：授权码
	 * @param string $open_id：用户id
	 * @return 成功获取返回结果|失败返回false
	 */
	function getUserInfo($access_token = '', $open_id = ''){
		if($access_token && $open_id){
			$access_url = "https://api.weixin.qq.com/sns/auth?access_token={$access_token}&openid={$open_id}";
			$access_data = $this->httpGet($access_url);
			$access_info = json_decode($access_data, TRUE);
			if($access_info['errmsg']!='ok'){
				exit('页面过期');
			}
			$info_url = "https://api.weixin.qq.com/sns/userinfo?access_token={$access_token}&openid={$open_id}&lang=zh_CN";
			$info_data = $this->httpGet($info_url);
			if(!empty($info_data))
			{
				return json_decode($info_data, TRUE);
			}
		}
		return FALSE;
	}
	
	/**
	 * 获取用户信息
	 * baikeliang
	 * @param string $access_token：授权码
	 * @param string $open_id：用户id
	 * @return 成功获取返回结果|失败返回false
	 */
	function getUserInfo2($access_token = '', $open_id = ''){
		if($access_token && $open_id){
			/*$access_url = "https://api.weixin.qq.com/sns/auth?access_token={$access_token}&openid={$open_id}";
			$access_data = $this->httpGet($access_url);
			$access_info = json_decode($access_data, TRUE);
			if($access_info['errmsg']!='ok'){
				exit('页面过期');
			}*/
			$info_url = "https://api.weixin.qq.com/cgi-bin/user/info?access_token={$access_token}&openid={$open_id}&lang=zh_CN";
			$info_data = $this->httpGet($info_url);
			if(!empty($info_data))
			{
				return json_decode($info_data, TRUE);
			}
		}
		return FALSE;
	}
}


//$weixin = new weixin(APPID,APPSECRET,APPACCOUNT);
//echo $weixin->getAccessToken();
//$weixin->getImage(1);
//echo $weixin->getJsapiTicket();