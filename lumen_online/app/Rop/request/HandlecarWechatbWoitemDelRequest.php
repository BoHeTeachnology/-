<?php
class HandlecarWechatbWoitemDelRequest
{
     private $apiParas = array();

     private $itemid;

     public function getItemid()
     {
         return $this->$itemid;
     }

     public function setItemid($itemid)
     {
         $this->itemid = $itemid;
         $this->apiParas["itemid"] = $itemid;
     }

     private $orderid;

     public function getOrderid()
     {
         return $this->$orderid;
     }

     public function setOrderid($orderid)
     {
         $this->orderid = $orderid;
         $this->apiParas["orderid"] = $orderid;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.handlecar.wechatb.woitem.del";
     }
     public function check()     {          }}
