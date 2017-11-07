<?php
class XvpTlpaySetpaycallbackurlRequest
{
     private $apiParas = array();

     private $pay_callback_url;

     public function getPayCallbackUrl()
     {
         return $this->$pay_callback_url;
     }

     public function setPayCallbackUrl($pay_callback_url)
     {
         $this->pay_callback_url = $pay_callback_url;
         $this->apiParas["pay_callback_url"] = $pay_callback_url;
     }

     private $app_id;

     public function getAppId()
     {
         return $this->$app_id;
     }

     public function setAppId($app_id)
     {
         $this->app_id = $app_id;
         $this->apiParas["app_id"] = $app_id;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.xvp.tlpay.setpaycallbackurl";
     }
     public function check()     {          }}
