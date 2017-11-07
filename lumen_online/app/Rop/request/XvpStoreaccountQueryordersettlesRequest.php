<?php
class XvpStoreaccountQueryordersettlesRequest
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
         return "ruixue.xvp.storeaccount.queryordersettles";
     }
     public function check()     {          }}
