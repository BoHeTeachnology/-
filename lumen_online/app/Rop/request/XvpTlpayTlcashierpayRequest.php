<?php
class XvpTlpayTlcashierpayRequest
{
     private $apiParas = array();

     private $user_id;

     public function getUserId()
     {
         return $this->$user_id;
     }

     public function setUserId($user_id)
     {
         $this->user_id = $user_id;
         $this->apiParas["user_id"] = $user_id;
     }

     private $store_id;

     public function getStoreId()
     {
         return $this->$store_id;
     }

     public function setStoreId($store_id)
     {
         $this->store_id = $store_id;
         $this->apiParas["store_id"] = $store_id;
     }

     private $order_id;

     public function getOrderId()
     {
         return $this->$order_id;
     }

     public function setOrderId($order_id)
     {
         $this->order_id = $order_id;
         $this->apiParas["order_id"] = $order_id;
     }

     private $bank_info;

     public function getBankInfo()
     {
         return $this->$bank_info;
     }

     public function setBankInfo($bank_info)
     {
         $this->bank_info = $bank_info;
         $this->apiParas["bank_info"] = $bank_info;
     }

     private $callback_url;

     public function getCallbackUrl()
     {
         return $this->$callback_url;
     }

     public function setCallbackUrl($callback_url)
     {
         $this->callback_url = $callback_url;
         $this->apiParas["callback_url"] = $callback_url;
     }

     private $pay_type;

     public function getPayType()
     {
         return $this->$pay_type;
     }

     public function setPayType($pay_type)
     {
         $this->pay_type = $pay_type;
         $this->apiParas["pay_type"] = $pay_type;
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
         return "ruixue.xvp.tlpay.tlcashierpay";
     }
     public function check()     {          }}
