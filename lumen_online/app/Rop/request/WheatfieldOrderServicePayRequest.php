<?php
class WheatfieldOrderServicePayRequest
{
     private $apiParas = array();

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

     private $saveamount;

     public function getSaveamount()
     {
         return $this->$saveamount;
     }

     public function setSaveamount($saveamount)
     {
         $this->saveamount = $saveamount;
         $this->apiParas["saveamount"] = $saveamount;
     }

     private $intorootinstcd;

     public function getIntorootinstcd()
     {
         return $this->$intorootinstcd;
     }

     public function setIntorootinstcd($intorootinstcd)
     {
         $this->intorootinstcd = $intorootinstcd;
         $this->apiParas["intorootinstcd"] = $intorootinstcd;
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

     private $creditproductid;

     public function getCreditproductid()
     {
         return $this->$creditproductid;
     }

     public function setCreditproductid($creditproductid)
     {
         $this->creditproductid = $creditproductid;
         $this->apiParas["creditproductid"] = $creditproductid;
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

     private $creditamount;

     public function getCreditamount()
     {
         return $this->$creditamount;
     }

     public function setCreditamount($creditamount)
     {
         $this->creditamount = $creditamount;
         $this->apiParas["creditamount"] = $creditamount;
     }

     private $intoproductid;

     public function getIntoproductid()
     {
         return $this->$intoproductid;
     }

     public function setIntoproductid($intoproductid)
     {
         $this->intoproductid = $intoproductid;
         $this->apiParas["intoproductid"] = $intoproductid;
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

     private $interuserid;

     public function getInteruserid()
     {
         return $this->$interuserid;
     }

     public function setInteruserid($interuserid)
     {
         $this->interuserid = $interuserid;
         $this->apiParas["interuserid"] = $interuserid;
     }

     private $originalorderid;

     public function getOriginalorderid()
     {
         return $this->$originalorderid;
     }

     public function setOriginalorderid($originalorderid)
     {
         $this->originalorderid = $originalorderid;
         $this->apiParas["originalorderid"] = $originalorderid;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.order.service.pay";
     }
     public function check()     {          }}
