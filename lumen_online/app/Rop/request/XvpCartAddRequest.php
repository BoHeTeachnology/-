<?php
class XvpCartAddRequest
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

     private $count;

     public function getCount()
     {
         return $this->$count;
     }

     public function setCount($count)
     {
         $this->count = $count;
         $this->apiParas["count"] = $count;
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

     private $sku_id;

     public function getSkuId()
     {
         return $this->$sku_id;
     }

     public function setSkuId($sku_id)
     {
         $this->sku_id = $sku_id;
         $this->apiParas["sku_id"] = $sku_id;
     }

     private $expends_fields;

     public function getExpendsFields()
     {
         return $this->$expends_fields;
     }

     public function setExpendsFields($expends_fields)
     {
         $this->expends_fields = $expends_fields;
         $this->apiParas["expends_fields"] = $expends_fields;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.xvp.cart.add";
     }
     public function check()     {          }}
