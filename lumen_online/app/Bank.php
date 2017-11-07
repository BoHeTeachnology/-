<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
namespace App;
use Illuminate\Database\Eloquent\Model;

class Bank extends Model{
    
        const appkey="EDAD1C0F-E22F-4612-9235-30177A5872ED";
        const secretKey="EDEC7987-B670-40EA-8DDB-B8E5FFDD0433";
        //商户号
        const constid="M000035";
        //产品号
        const productid="P000288";
       
        /*融数接口过滤*/
        public static function filter($arr){
            if(is_object($arr)){
                return $arr;
            }
            else{
                $date['issuccess']="0";
                $date['message']="第三方操作失误";
                $date['data']=$arr;
                return (object)$date;
            }
        }
        /*获取session*/
        public static function session(){
            include '../app/Rop/RopClient.php';
            include '../app/Rop/request/ExternalSessionGetRequest.php';
            include '../app/Rop/PressureBalanceUtil.php';
            include '../app/Rop/ExternalPressureBalanceGetRequest.php';
            $c = new \RopClient;
            $req = new  \ExternalSessionGetRequest;
            $c->appkey =self::appkey;//瑞雪分配的appkey
            $c->secretKey =self::secretKey;//瑞雪分配的secretKey
            $c->gatewayUrl = "http://testapi.open.ruixuesoft.com:30001/ropapi";//api调用地址
            $resp = $c->execute($req);
            $session=$resp->session;
            return $session;      
        }
        
         /*公用*/
        public static function common($url,$req){
            $session=Bank::session();
             $c = new \RopClient;
             $c->appkey =self::appkey;//瑞雪分配的appkey
             $c->secretKey =self::secretKey;//瑞雪分配的secretKey
             $c->gatewayUrl =$url;//api调用地址
             $resp = $c->execute($req,$session);
             return $resp;
             
        }
        
        /*获取银行卡详细信息*/
        public static function seebank($cardno){
            include '../app/Rop/request/WheatfieldCheckstandCardbinQueryRequest.php';
            $req = new  \WheatfieldCheckstandCardbinQueryRequest;
            $req->setCardno($cardno);
            $req->setConstid(self::constid);
            $url="https://testapi.open.ruixuesoft.com:30005/ropapi";
            $arr=Bank::common($url,$req);
            $arr=Bank::filter($arr);
            return $arr;    
        }
        
        /*获取省市*/
        public static function seecity($citycode){
            include '../app/Rop/request/WheatfieldCityQueryRequest.php';
            $req = new  \WheatfieldCityQueryRequest;
            $req->setCitycode($citycode);
            $url="https://testapi.open.ruixuesoft.com:30005/ropapi";
            $arr=Bank::common($url,$req);
            $arr=Bank::filter($arr);
            return $arr;    
        }
        
        
        /*绑定银行卡*/
       public static function bindingbank($user_id,$bankcode,$bankname,$name,$bank_province,$identity,$bank_city,$cardno,$submittime){
            include '../app/Rop/request/WheatfieldBankaccountBindingRequest.php';
            $req = new  \WheatfieldBankaccountBindingRequest;
            $req->setUserid($user_id);
            //1为商户，2为普通用户
            $req->setUsertype("2");
            $req->setConstid(self::constid);
            $req->setProductid(self::productid);
            $req->setAccountnumber($cardno);
             // 00银行卡，01存折，02信用卡。不填默认为银行卡00
            $req->setAccounttypeid("00");
            $req->setBankheadname($bankname);
            $req->setCurrency("CNY");
            $reqsn=Bank::gettime();
            $req->setReqsn($reqsn);
            $req->setSubmitTime($submittime);
            $req->setAccountpurpose("3");
            $req->setAccountproperty("2");
            $req->setCertificatetype("0");
            $req->setCertificatenumnumber($identity);
            $req->setAccountname($name);
            $req->setBankcode($bankcode);
            $req->setBankprovince($bank_province);
            $req->setBankcity($bank_city);
            $url="https://testapi.open.ruixuesoft.com:30005/ropapi";
            $arr=Bank::common($url,$req);
            $arr=Bank::filter($arr);
            return $arr;    
        }
        
        public static function gettime(){  
            $time = explode (" ", microtime () );   
            $time = $time [1] . ($time [0] * 1000);   
            $time2 = explode ( ".", $time );   
            $time = $time2 [0];  
            return $time;  
        }  
        
        /*账户开户*/
        public static function useraccount($identity,$user_id,$name){
            include '../app/Rop/request/WheatfieldPersonAccountoprRequest.php';
            $req = new  \WheatfieldPersonAccountoprRequest;
            $req->setConstid(self::constid);
            $req->setCertificatetype("0");
            $req->setCertificatenumber($identity);
            $req->setUserid($user_id);
            $req->setProductid(self::productid);
            $req->setPersonchnname($name);
            $req->setOpertype("1");
            $url="https://testapi.open.ruixuesoft.com:30005/ropapi";
            $arr=Bank::common($url,$req);
            $arr=Bank::filter($arr);
            return $arr;
        }
        
        /*提现*/
        public static function withdrawals($user_id,$amount,$orderdate){
            include '../app/Rop/request/WheatfieldOrderServiceWithdrawserviceRequest.php';
            $req = new  \WheatfieldOrderServiceWithdrawserviceRequest;
            $req->setAmount($amount);
            $req->setUserid($user_id);
            $req->setOrderdate($orderdate);
            $userorderid=time().$user_id;
            $req->setUserorderid($userorderid);
            $req->setProductid(self::productid);
            $req->setMerchantcode (self::constid);
            $url="https://testapi.open.ruixuesoft.com:30005/ropapi";
            $arr=Bank::common($url,$req);
            $arr=Bank::filter($arr);
            return $arr;
        }
        
}
