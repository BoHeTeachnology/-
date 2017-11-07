<?php
class WheatfieldOrderServiceSqsmpayRequest
{
     private $apiParas = array();

     private $requesttime;

     public function getRequesttime()
     {
         return $this->$requesttime;
     }

     public function setRequesttime($requesttime)
     {
         $this->requesttime = $requesttime;
         $this->apiParas["requesttime"] = $requesttime;
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

     private $userfee;

     public function getUserfee()
     {
         return $this->$userfee;
     }

     public function setUserfee($userfee)
     {
         $this->userfee = $userfee;
         $this->apiParas["userfee"] = $userfee;
     }

     private $intermerchantcode;

     public function getIntermerchantcode()
     {
         return $this->$intermerchantcode;
     }

     public function setIntermerchantcode($intermerchantcode)
     {
         $this->intermerchantcode = $intermerchantcode;
         $this->apiParas["intermerchantcode"] = $intermerchantcode;
     }

     private $useripaddress;

     public function getUseripaddress()
     {
         return $this->$useripaddress;
     }

     public function setUseripaddress($useripaddress)
     {
         $this->useripaddress = $useripaddress;
         $this->apiParas["useripaddress"] = $useripaddress;
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

     private $orderno;

     public function getOrderno()
     {
         return $this->$orderno;
     }

     public function setOrderno($orderno)
     {
         $this->orderno = $orderno;
         $this->apiParas["orderno"] = $orderno;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.order.service.sqsmpay";
     }
     public function check()     {          }}
