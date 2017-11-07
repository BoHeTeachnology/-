<?php
class WheatfieldOrderServiceCottonfinalpayRequest
{
     private $apiParas = array();

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

     private $feeamount;

     public function getFeeamount()
     {
         return $this->$feeamount;
     }

     public function setFeeamount($feeamount)
     {
         $this->feeamount = $feeamount;
         $this->apiParas["feeamount"] = $feeamount;
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

     private $orderdate;

     public function getOrderdate()
     {
         return $this->$orderdate;
     }

     public function setOrderdate($orderdate)
     {
         $this->orderdate = $orderdate;
         $this->apiParas["orderdate"] = $orderdate;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.order.service.cottonfinalpay";
     }
     public function check()     {          }}
