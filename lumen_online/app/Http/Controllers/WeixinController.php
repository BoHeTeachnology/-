<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
namespace App\Http\Controllers;
use App\Weixin;
use App\Iphone as Sms;
use DB;
use Cache;
use Auth;
use Firebase\JWT\JWT;
use Request;
use Redirect;
use Log;
class WeixinController extends Controller{
    
   /*认证微信url and 自动回复*/
   public function index(){   
       $postStr = $GLOBALS["HTTP_RAW_POST_DATA"];
       if(empty(!$postStr)){
           $postStr= urlencode($postStr);
           $url=config('database.url.jiuguanwang')."/mintAdmin/index.php/Home/Index/autoReply?str=".$postStr;
           $data= file_get_contents($url);
           //Log::info($data);
           echo  $data;
       }
   }
   /*获取用户oppenid*/
   public function openid(){
        $code=$_GET['code'];
        $openid=Weixin::useropenid($code);
        /*$user_id=DB::table('users')->where('openid',$openid)->value('id');
        if($user_id){
            $key = "iOjEsImlzcyI6I";
            $token = array (
						"iss" => "official.com",
						"aud" => "user.com",
						"iat" => time (),
						"nbf" => time (),
						"exp" => time () + 1357000000,
						"sub" => $user_id
				);
				
            $jwt = JWT::encode ( $token, $key );
            header("Location:".'http://test.zhenweitech.cn:3000/firstpage?type=true&token=' . $jwt);
        }*/
        //else{
        //echo config('database.url.guanwang')."/mobile/login/$openid";
            header("Location:".config('database.url.guanwang')."/mobile/login/$openid");
        //}
   }
   
   /*获取code链接跳转*/
   public function user(){
       $redirect =$_GET["redirect"];
       if($redirect=="1"){
           $curl="http://".$_SERVER['SERVER_NAME']."/weixin/openid";
           
       }
       if($redirect=="2"){
           $type =$_GET["type"];
           $curl="http://".$_SERVER['SERVER_NAME']."/weixin/jump?type=$type";
       }
       if($redirect=="3"){
           $redirect_uri=$_GET['redirect_uri'];
           $curl="http://".$_SERVER['SERVER_NAME']."/weixin/tp?redirect_uri=".$redirect_uri;
       }
       Weixin::usercode($curl);
   }
   
   /*跳转tp老系统带code*/
   public function tp(){
       //exit("fuck");
       $code=$_GET['code'];
       $redirect_uri=$_GET['redirect_uri'];
       $redirect_uri= urldecode($redirect_uri)."/code/$code";
       header("Location:".$redirect_uri);
   }
   /*type跳转*/
   public function jump(){
       $code=$_GET['code'];
       $type=$_GET['type'];
       //exit(config('database.weixin.jiuguanwang'));
       header("Location:".config('database.url.jiuguanwang')."/mintAdmin/index.php/Home/Index/weixinBase?code=$code&type=$type");
   }
    
    /*统一下单*/
    public function payment(){
        $out_trade_no=$_GET['out_trade_no'];
        $total_fee=$_GET['total_fee'];
        $openid=$_GET['openid'];
        $arr=Weixin::payment($out_trade_no,$total_fee,$openid);
        $arr=simplexml_load_string($arr, 'SimpleXMLElement', LIBXML_NOCDATA);
        if($arr->return_code['0']=="SUCCESS"){
            return $this->success("支付成功");
        }
        else{
            return $this->error("支付失败");
        }
    }
    
    public function getSignaturePackage(){
        $url=$_GET['url'];
        $sign=Weixin::getSignaturePackage($url);
        return $this->success("获取成功",$sign);
        
    }
    
}
