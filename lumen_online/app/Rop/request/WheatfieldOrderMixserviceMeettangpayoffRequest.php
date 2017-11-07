<?php
class WheatfieldOrderMixserviceMeettangpayoffRequest
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.order.mixservice.meettangpayoff";
     }
     public function check()     {          }}
