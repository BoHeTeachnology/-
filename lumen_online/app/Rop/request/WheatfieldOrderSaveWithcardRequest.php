<?php
class WheatfieldOrderSaveWithcardRequest
{
     private $apiParas = array();

     private $accounttypeid;

     public function getAccounttypeid()
     {
         return $this->$accounttypeid;
     }

     public function setAccounttypeid($accounttypeid)
     {
         $this->accounttypeid = $accounttypeid;
         $this->apiParas["accounttypeid"] = $accounttypeid;
     }

     private $accountname;

     public function getAccountname()
     {
         return $this->$accountname;
     }

     public function setAccountname($accountname)
     {
         $this->accountname = $accountname;
         $this->apiParas["accountname"] = $accountname;
     }

     private $currency;

     public function getCurrency()
     {
         return $this->$currency;
     }

     public function setCurrency($currency)
     {
         $this->currency = $currency;
         $this->apiParas["currency"] = $currency;
     }

     private $ordertypeid;

     public function getOrdertypeid()
     {
         return $this->$ordertypeid;
     }

     public function setOrdertypeid($ordertypeid)
     {
         $this->ordertypeid = $ordertypeid;
         $this->apiParas["ordertypeid"] = $ordertypeid;
     }

     private $goodsname;

     public function getGoodsname()
     {
         return $this->$goodsname;
     }

     public function setGoodsname($goodsname)
     {
         $this->goodsname = $goodsname;
         $this->apiParas["goodsname"] = $goodsname;
     }

     private $goodsdetail;

     public function getGoodsdetail()
     {
         return $this->$goodsdetail;
     }

     public function setGoodsdetail($goodsdetail)
     {
         $this->goodsdetail = $goodsdetail;
         $this->apiParas["goodsdetail"] = $goodsdetail;
     }

     private $accountnumber;

     public function getAccountnumber()
     {
         return $this->$accountnumber;
     }

     public function setAccountnumber($accountnumber)
     {
         $this->accountnumber = $accountnumber;
         $this->apiParas["accountnumber"] = $accountnumber;
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

     private $accountpurpose;

     public function getAccountpurpose()
     {
         return $this->$accountpurpose;
     }

     public function setAccountpurpose($accountpurpose)
     {
         $this->accountpurpose = $accountpurpose;
         $this->apiParas["accountpurpose"] = $accountpurpose;
     }

     private $certificatenumber;

     public function getCertificatenumber()
     {
         return $this->$certificatenumber;
     }

     public function setCertificatenumber($certificatenumber)
     {
         $this->certificatenumber = $certificatenumber;
         $this->apiParas["certificatenumber"] = $certificatenumber;
     }

     private $accountproperty;

     public function getAccountproperty()
     {
         return $this->$accountproperty;
     }

     public function setAccountproperty($accountproperty)
     {
         $this->accountproperty = $accountproperty;
         $this->apiParas["accountproperty"] = $accountproperty;
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

     private $constid;

     public function getConstid()
     {
         return $this->$constid;
     }

     public function setConstid($constid)
     {
         $this->constid = $constid;
         $this->apiParas["constid"] = $constid;
     }

     private $bankheadname;

     public function getBankheadname()
     {
         return $this->$bankheadname;
     }

     public function setBankheadname($bankheadname)
     {
         $this->bankheadname = $bankheadname;
         $this->apiParas["bankheadname"] = $bankheadname;
     }

     private $certificatetype;

     public function getCertificatetype()
     {
         return $this->$certificatetype;
     }

     public function setCertificatetype($certificatetype)
     {
         $this->certificatetype = $certificatetype;
         $this->apiParas["certificatetype"] = $certificatetype;
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

     private $ordertime;

     public function getOrdertime()
     {
         return $this->$ordertime;
     }

     public function setOrdertime($ordertime)
     {
         $this->ordertime = $ordertime;
         $this->apiParas["ordertime"] = $ordertime;
     }

     private $bankhead;

     public function getBankhead()
     {
         return $this->$bankhead;
     }

     public function setBankhead($bankhead)
     {
         $this->bankhead = $bankhead;
         $this->apiParas["bankhead"] = $bankhead;
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
         return "ruixue.wheatfield.order.save.withcard";
     }
     public function check()     {          }}
