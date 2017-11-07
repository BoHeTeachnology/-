<?php
class HandlecarWechatbWoitemUpdateRequest
{
     private $apiParas = array();

     private $itemprice;

     public function getItemprice()
     {
         return $this->$itemprice;
     }

     public function setItemprice($itemprice)
     {
         $this->itemprice = $itemprice;
         $this->apiParas["itemprice"] = $itemprice;
     }

     private $itemname;

     public function getItemname()
     {
         return $this->$itemname;
     }

     public function setItemname($itemname)
     {
         $this->itemname = $itemname;
         $this->apiParas["itemname"] = $itemname;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.handlecar.wechatb.woitem.update";
     }
     public function check()     {          }}
