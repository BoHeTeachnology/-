<?php
class WheatfieldOrderServiceCottonpayRequest
{
     private $apiParas = array();

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

     private $creditpercent;

     public function getCreditpercent()
     {
         return $this->$creditpercent;
     }

     public function setCreditpercent($creditpercent)
     {
         $this->creditpercent = $creditpercent;
         $this->apiParas["creditpercent"] = $creditpercent;
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

     private $originalorderno;

     public function getOriginalorderno()
     {
         return $this->$originalorderno;
     }

     public function setOriginalorderno($originalorderno)
     {
         $this->originalorderno = $originalorderno;
         $this->apiParas["originalorderno"] = $originalorderno;
     }

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

     private $cottonpaypercent;

     public function getCottonpaypercent()
     {
         return $this->$cottonpaypercent;
     }

     public function setCottonpaypercent($cottonpaypercent)
     {
         $this->cottonpaypercent = $cottonpaypercent;
         $this->apiParas["cottonpaypercent"] = $cottonpaypercent;
     }

     private $savingpercent;

     public function getSavingpercent()
     {
         return $this->$savingpercent;
     }

     public function setSavingpercent($savingpercent)
     {
         $this->savingpercent = $savingpercent;
         $this->apiParas["savingpercent"] = $savingpercent;
     }

     private $frozenpercent;

     public function getFrozenpercent()
     {
         return $this->$frozenpercent;
     }

     public function setFrozenpercent($frozenpercent)
     {
         $this->frozenpercent = $frozenpercent;
         $this->apiParas["frozenpercent"] = $frozenpercent;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.order.service.cottonpay";
     }
     public function check()     {          }}
