<?php
class XvpCartMergecartRequest
{
     private $apiParas = array();

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

     private $from_user_id;

     public function getFromUserId()
     {
         return $this->$from_user_id;
     }

     public function setFromUserId($from_user_id)
     {
         $this->from_user_id = $from_user_id;
         $this->apiParas["from_user_id"] = $from_user_id;
     }

     private $to_user_id;

     public function getToUserId()
     {
         return $this->$to_user_id;
     }

     public function setToUserId($to_user_id)
     {
         $this->to_user_id = $to_user_id;
         $this->apiParas["to_user_id"] = $to_user_id;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.xvp.cart.mergecart";
     }
     public function check()     {          }}
