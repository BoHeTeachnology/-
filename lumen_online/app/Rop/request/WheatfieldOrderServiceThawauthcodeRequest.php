<?php
class WheatfieldOrderServiceThawauthcodeRequest
{
     private $apiParas = array();

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

     private $frozenuserorderid;

     public function getFrozenuserorderid()
     {
         return $this->$frozenuserorderid;
     }

     public function setFrozenuserorderid($frozenuserorderid)
     {
         $this->frozenuserorderid = $frozenuserorderid;
         $this->apiParas["frozenuserorderid"] = $frozenuserorderid;
     }

     private $requestno;

     public function getRequestno()
     {
         return $this->$requestno;
     }

     public function setRequestno($requestno)
     {
         $this->requestno = $requestno;
         $this->apiParas["requestno"] = $requestno;
     }

     private $authcode;

     public function getAuthcode()
     {
         return $this->$authcode;
     }

     public function setAuthcode($authcode)
     {
         $this->authcode = $authcode;
         $this->apiParas["authcode"] = $authcode;
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

     private $conditioncode;

     public function getConditioncode()
     {
         return $this->$conditioncode;
     }

     public function setConditioncode($conditioncode)
     {
         $this->conditioncode = $conditioncode;
         $this->apiParas["conditioncode"] = $conditioncode;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.order.service.thawauthcode";
     }
     public function check()     {          }}
