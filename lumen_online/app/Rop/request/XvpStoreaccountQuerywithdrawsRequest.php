<?php
class XvpStoreaccountQuerywithdrawsRequest
{
     private $apiParas = array();

     private $end;

     public function getEnd()
     {
         return $this->$end;
     }

     public function setEnd($end)
     {
         $this->end = $end;
         $this->apiParas["end"] = $end;
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

     private $begin;

     public function getBegin()
     {
         return $this->$begin;
     }

     public function setBegin($begin)
     {
         $this->begin = $begin;
         $this->apiParas["begin"] = $begin;
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
         return "ruixue.xvp.storeaccount.querywithdraws";
     }
     public function check()     {          }}
