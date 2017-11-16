<?php
namespace Tool;

class SendMsg{

	private $AccessKeyId;
	private $AccessKeySecret;
	private $SignName;
	//private $TemplateCode;

	public function __construct(){
		$this->AccessKeyId=C('DX_ACCESSKEYID');
		$this->AccessKeySecret=C('DX_ACCESSKEYSECRET');
		$this->SignName=C('DX_SIGNNAME');
		//$this->TemplateCode=C('DX_TEMPLATECODE');
	}

	//生成签名
	public function getSignature($arr){
		//将参数($key)按照字典序排序
		ksort($arr);
		//拼接字符串
		$str='';
		foreach ($arr as $key => $value) {
			//将字符串进行URL编码
			$str.='&'.$this->percentEncode($key).'='.$this->percentEncode($value);
		}
		//合成签名
		$str=$this->percentEncode(substr($str, 1));
		$str='GET&%2F&'.$str;
		//echo $str.'<br>';
		$str=hash_hmac('sha1', $str, $this->AccessKeySecret.'&',true);
		$str=base64_encode($str);
		//echo $str.'<br>';
		//return $str;
		return urlencode($str);	
	}

	//阿里规范的URL编码
	function percentEncode($str){  
	    // 使用urlencode编码后，将"+","*","%7E"做替换即满足ECS API规定的编码规范  
	    $res = urlencode($str);  
	    $res = preg_replace('/\+/', '%20', $res);  
	    $res = preg_replace('/\*/', '%2A', $res);  
	    $res = preg_replace('/%7E/', '~', $res);  
	    return $res;  
	}  

	//生成签名随机字符串
	public function getSignatureNonce($length =16 ){
        $chars = "abcdefghijklmnopqrstuvwxyz0123456789";
        $str = "bh";
        for ($i = 0; $i < $length; $i++) {
          $str .= substr($chars, mt_rand(0, strlen($chars) - 1), 1);
        }
        return $str;
    }

	//发送短信
	public function send($phone,$content,$TemplateCode){
		//生成各参数
		date_default_timezone_set("UTC");
		$Timestamp=date('Y-m-d H:i:s');
		$Timestamp=str_replace(' ','T',$Timestamp).'Z';
		//$Timestamp=date('Y-m-d').'T'.date('H:i:s').'Z';
		$array=array();
		$array['Action']='SingleSendSms';
		//模板签名
		$array['SignName']=$this->SignName;
		//模板code
		$array['TemplateCode']=$TemplateCode;
		//电话号码
		$array['RecNum']=$phone;
		$array['ParamString']=$content;
		$array['Format']='JSON';
		$array['Version']='2016-09-27';
		$array['AccessKeyId']=$this->AccessKeyId;
		$array['SignatureMethod']='HMAC-SHA1';
		$array['SignatureVersion']='1.0';
		$array['Timestamp']=$Timestamp;
		$array['SignatureNonce']=$this->getSignatureNonce();
		//签名
		$Signature=$this->getSignature($array);
		//拼接参数
		$str_arr=array();
		foreach ($array as $key => $value) {
			//将字符串进行URL编码
			$str_arr[]=$key.'='.$value;
		}
		$str='Signature='.$Signature.'&'.implode('&', $str_arr);
		//echo $str;

		$url='https://sms.aliyuncs.com/?'.$str;
		return $this->httpGet($url);
	}

	//GET方法请求数据
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


}