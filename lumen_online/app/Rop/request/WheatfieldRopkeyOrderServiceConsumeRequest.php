<?php
class WheatfieldRopkeyOrderServiceConsumeRequest
{
     private $apiParas = array();

     private $merchantcode;

     public function getMerchantcode()
     {
         return $this->$merchantcode;
     }

     public function setMerchantcode($merchantcode)
     {
         $this->merchantcode = $merchantcode;
         $this->apiParas["merchantcode"] = $merchantcode;
     }

     private $userrelateid;

     public function getUserrelateid()
     {
         return $this->$userrelateid;
     }

     public function setUserrelateid($userrelateid)
     {
         $this->userrelateid = $userrelateid;
         $this->apiParas["userrelateid"] = $userrelateid;
     }

     private $interproductid;

     public function getInterproductid()
     {
         return $this->$interproductid;
     }

     public function setInterproductid($interproductid)
     {
         $this->interproductid = $interproductid;
         $this->apiParas["interproductid"] = $interproductid;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.ropkey.order.service.consume";
     }
     public function check()     {          }}
