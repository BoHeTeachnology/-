<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
namespace App;
use Illuminate\Database\Eloquent\Model;
use Cache;
use Log;
class Weixin extends Model{
    
    /*发送get请求*/
    public static function geturl($url){
        $ch = curl_init();  
        curl_setopt($ch, CURLOPT_URL, $url);  
        curl_setopt($ch, CURLOPT_HEADER, 0);  
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);   
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);  
        $data = curl_exec($ch);  
        $response = json_decode($data,TRUE);  
        return $response;  
    }
      
    /*发送post请求*/
    public static  function posturl($arr,$url){
        //$postJosnData = json_encode($arr);  
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $arr);    
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);  
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);  
        $data = curl_exec($ch);
        return $data;  
    }
      
    /*获取微信用户code*/
    public static function usercode($curl){
        $redirect_uri = urlencode ($curl);
        $appid=config('database.weixin.appid');
        $url ="https://open.weixin.qq.com/connect/oauth2/authorize?appid=$appid&redirect_uri=$redirect_uri&response_type=code&scope=snsapi_base&state=1#wechat_redirect";
        header("Location:".$url);
    }
      
    /*获取用户openid*/
    public static function useropenid($code){
        $appid=config('database.weixin.appid');
        $secret=config('database.weixin.secret');
        $url = "https://api.weixin.qq.com/sns/oauth2/access_token?appid=$appid&secret=$secret&code=$code&grant_type=authorization_code";
        $oauth2 =Weixin::geturl($url);
        $openid=$oauth2['openid'];
        return $openid;
    }
      
      /*微信认证url*/
    public static function index($nonce,$timestamp,$token,$signature,$echostr){
        //参数字典序排序  
        $array = array();  
        $array = array($nonce, $timestamp, $token);  
        sort($array);  
        //验证  
        $str = sha1( implode( $array ) );//sha1加密  
        //对比验证处理好的str与signature,若确认此次GET请求来自微信服务器，请原样返回echostr参数内容，则接入生效，成为开发者成功，否则接入失败。  
        if( $str  == $signature ){  
          return $echostr;        
        }  
        else{  
            //接入成功后的其他处理  
           return false;   
        }  
    }
    
    /*随机数*/
     public static function randCode($length = 16, $type = 1){
        $arr = array(1 => "0123456789", 2 => "abcdefghijklmnopqrstuvwxyz", 3 => "ABCDEFGHIJKLMNOPQRSTUVWXYZ", 4 => "~@#$%^&*(){}[]|");
        if ($type == 0) {
        array_pop($arr);
        $string = implode("", $arr);
        } elseif ($type == "-1") {
        $string = implode("", $arr);
        } else {
        $string = $arr[$type];
        }
        $count = strlen($string) - 1;
        $code = '';
        for ($i = 0; $i < $length; $i++) {
        $code .= $string[rand(0, $count)];
        }
        return $code;
    } 
    
    /*当前时间毫秒*/
     public static function gettime(){  
            $time = explode (" ", microtime () );   
            $time = $time [1] . ($time [0] * 1000);   
            $time2 = explode ( ".", $time );   
            $time = $time2 [0];  
            return $time;  
    }  
    
    /*统一下单*/
    public static function payment($out_trade_no,$total_fee,$openid){
        $input=array();
        $input['appid']=config('database.weixin.appid');
        $input['mch_id']=config('database.weixin.mch_id');
        $input['nonce_str']=Weixin::randCode("16","1");
        $input['body']="薄荷牙医-患者支付";
        $input['out_trade_no']=$out_trade_no;
        $input['total_fee']=$total_fee;
        $input['spbill_create_ip']=$_SERVER['REMOTE_ADDR'];
        $input['notify_url']="http://test.zhenweitech.cn/split/index";
        $input['trade_type']="JSAPI";
        $input['openid']=$openid;
        $sign="appid=". $input['appid']."&body=".$input['body']."&mch_id=".$input['mch_id']."&nonce_str=".$input['nonce_str']."&notify_url=".$input['notify_url']."&openid=".$input['openid']."&out_trade_no=".$input['out_trade_no']."&spbill_create_ip=".$input['spbill_create_ip']."&total_fee=".$input['total_fee']."&trade_type=".$input['trade_type'];
        $key="03763595ca89decad9dd14d36115a366";
        $stringSignTemp=$sign."&key=".$key;
        //return  $stringSignTemp;
        $sign=md5($stringSignTemp);
        $sign =strtoupper($sign);
        //return $sign;
        $input['sign']=$sign;
        $xml=Weixin::ToXml($input);
        $url="https://api.mch.weixin.qq.com/pay/unifiedorder";
        $arr=Weixin::posturl($xml, $url);
        return $arr;
    }
    
   /*数组转换为xml*/ 
   public static function ToXml($input){
    	$xml = "<xml>";
    	foreach ($input as $key=>$val)
    	{
    		if (is_numeric($val)){
    			$xml.="<".$key.">".$val."</".$key.">";
    		}else{
    			$xml.="<".$key."><![CDATA[".$val."]]></".$key.">";
    		}
        }
        $xml.="</xml>";
        return $xml; 
   }
   
   /*获取access_token个数100000个*/
   public static function token(){
       //Cache::forget('access_token');
      if(Cache::has("access_token")){
          $arr = Cache::get('access_token');
      }
      else{
           $AppId = config('database.weixin.appid'); 
           $AppSecret = config('database.weixin.secret');;
           $getUrl = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid='.$AppId.'&secret='.$AppSecret;
           $arr=Weixin::geturl($getUrl);
           $arr=$arr['access_token'];
           $minutes=60;
           Cache::put("access_token",$arr, $minutes);
      }
      return $arr;
   }
   
   /*微信账单推送*/
   public static function template($useropenid,$order_id,$created_at,$price,$clinic_name,$doctor_name){
       $token=Weixin::token();
       //return $token;
       $url="https://api.weixin.qq.com/cgi-bin/message/template/send?access_token=$token";
       $arr['touser']=$openid;
       $arr['template_id']="VmqT00qwRe_2Uoa8Bo-bCaCiy2rAktWMsA7GwQPnwmQ";
       //$arr['url']="https://www.baidu.com/";
       $arr['data']['first']['value']="您的账单已经生成";
       $arr['data']['first']['color']="#173177";
       $arr['data']['keyword1']['value']=$order_id;
       $arr['data']['keyword1']['color']="#173177";
       $arr['data']['keyword2']['value']=$price;
       $arr['data']['keyword2']['color']="#173177";
       $arr['data']['keyword3']['value']=$created_at;
       $arr['data']['keyword3']['color']="#173177";
       $arr['data']['keyword4']['value']=$doctor_name;
       $arr['data']['keyword4']['color']="#173177";
       $arr['data']['keyword5']['value']=$clinic_name;
       $arr['data']['keyword5']['color']="#173177";
       $arr['data']['remark']['value']="感谢您的使用";
       $arr['data']['remark']['color']="#173177";
       $arr=json_encode($arr);
       $data=Weixin::posturl($arr,$url);
       return $data;
   }
   
   public static function getSignaturePackage($url){
       //Cache::forget($url);
       Log::info("RRRRRRRRRRRRRRRRRRRRRRRRRRRRR");
       Log::info(Weixin::token());
        if(Cache::has($url)){
            $jsapiTicket = Cache::get($url);
        }
        else{
            $str='https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token='.Weixin::token().'&type=jsapi';
            $json=file_get_contents($str);
            $json=json_decode($json);
            $jsapiTicket=$json->ticket;
            $minutes=60;
            Cache::put($url,$jsapiTicket,$minutes);
        }
        //exit($jsapiTicket);
            $timestamp = time();
            $nonceStr = Weixin::createNonceStr();
            $string = "jsapi_ticket=$jsapiTicket&noncestr=$nonceStr&timestamp=$timestamp&url=$url";
            $signature = sha1($string);
            $signPackage = array(
              "appId"     => config('database.weixin.appid'),
              "nonceStr"  => $nonceStr,
              "timestamp" => $timestamp,
              "url"       => $url,
              "signature" => $signature,
              "rawString" => $string
            );
        return $signPackage; 
    }
    
    public static function createNonceStr($length = 16){


     $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";


     $str = "";


     for ($i = 0; $i < $length; $i++) {


       $str .= substr($chars, mt_rand(0, strlen($chars) - 1), 1);


     }


     return $str;


    }
}