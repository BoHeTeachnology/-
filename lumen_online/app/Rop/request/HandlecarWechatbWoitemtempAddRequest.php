<?php
class HandlecarWechatbWoitemtempAddRequest
{
     private $apiParas = array();

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
         return "ruixue.handlecar.wechatb.woitemtemp.add";
     }
     public function check()     {          }}
