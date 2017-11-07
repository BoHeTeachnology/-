<?php
class WheatfieldOrderMobileChargeRequest
{
     private $apiParas = array();

     private $userorderid;

     public function getUserorderid()
     {
         return $this->$userorderid;
     }

     public function setUserorderid($userorderid)
     {
         $this->userorderid = $userorderid;
         $this->apiParas["userorderid"] = $userorderid;
     }

     private $rootinstcd;

     public function getRootinstcd()
     {
         return $this->$rootinstcd;
     }

     public function setRootinstcd($rootinstcd)
     {
         $this->rootinstcd = $rootinstcd;
         $this->apiParas["rootinstcd"] = $rootinstcd;
     }

     private $productid;

     public function getProductid()
     {
         return $this->$productid;
     }

     public function setProductid($productid)
     {
         $this->productid = $productid;
         $this->apiParas["productid"] = $productid;
     }

     private $amount;

     public function getAmount()
     {
         return $this->$amount;
     }

     public function setAmount($amount)
     {
         $this->amount = $amount;
         $this->apiParas["amount"] = $amount;
     }

     private $paychannel;

     public function getPaychannel()
     {
         return $this->$paychannel;
     }

     public function setPaychannel($paychannel)
     {
         $this->paychannel = $paychannel;
         $this->apiParas["paychannel"] = $paychannel;
     }

     private $ordertype;

     public function getOrdertype()
     {
         return $this->$ordertype;
     }

     public function setOrdertype($ordertype)
     {
         $this->ordertype = $ordertype;
         $this->apiParas["ordertype"] = $ordertype;
     }

     private $mode;

     public function getMode()
     {
         return $this->$mode;
     }

     public function setMode($mode)
     {
         $this->mode = $mode;
         $this->apiParas["mode"] = $mode;
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

     private $userid;

     public function getUserid()
     {
         return $this->$userid;
     }

     public function setUserid($userid)
     {
         $this->userid = $userid;
         $this->apiParas["userid"] = $userid;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.order.mobile.charge";
     }
     public function check()     {          }}
