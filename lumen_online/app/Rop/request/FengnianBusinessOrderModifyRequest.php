<?php
class FengnianBusinessOrderModifyRequest
{
     private $apiParas = array();

     private $customeramount;

     public function getCustomeramount()
     {
         return $this->$customeramount;
     }

     public function setCustomeramount($customeramount)
     {
         $this->customeramount = $customeramount;
         $this->apiParas["customeramount"] = $customeramount;
     }

     private $discountinfo;

     public function getDiscountinfo()
     {
         return $this->$discountinfo;
     }

     public function setDiscountinfo($discountinfo)
     {
         $this->discountinfo = $discountinfo;
         $this->apiParas["discountinfo"] = $discountinfo;
     }

     private $status;

     public function getStatus()
     {
         return $this->$status;
     }

     public function setStatus($status)
     {
         $this->status = $status;
         $this->apiParas["status"] = $status;
     }

     private $discount;

     public function getDiscount()
     {
         return $this->$discount;
     }

     public function setDiscount($discount)
     {
         $this->discount = $discount;
         $this->apiParas["discount"] = $discount;
     }

     private $payername;

     public function getPayername()
     {
         return $this->$payername;
     }

     public function setPayername($payername)
     {
         $this->payername = $payername;
         $this->apiParas["payername"] = $payername;
     }

     private $customercompanykey;

     public function getCustomercompanykey()
     {
         return $this->$customercompanykey;
     }

     public function setCustomercompanykey($customercompanykey)
     {
         $this->customercompanykey = $customercompanykey;
         $this->apiParas["customercompanykey"] = $customercompanykey;
     }

     private $ahporderid;

     public function getAhporderid()
     {
         return $this->$ahporderid;
     }

     public function setAhporderid($ahporderid)
     {
         $this->ahporderid = $ahporderid;
         $this->apiParas["ahporderid"] = $ahporderid;
     }

     private $merchantcompanykey;

     public function getMerchantcompanykey()
     {
         return $this->$merchantcompanykey;
     }

     public function setMerchantcompanykey($merchantcompanykey)
     {
         $this->merchantcompanykey = $merchantcompanykey;
         $this->apiParas["merchantcompanykey"] = $merchantcompanykey;
     }

     private $platcompanykey;

     public function getPlatcompanykey()
     {
         return $this->$platcompanykey;
     }

     public function setPlatcompanykey($platcompanykey)
     {
         $this->platcompanykey = $platcompanykey;
         $this->apiParas["platcompanykey"] = $platcompanykey;
     }

     private $payerid;

     public function getPayerid()
     {
         return $this->$payerid;
     }

     public function setPayerid($payerid)
     {
         $this->payerid = $payerid;
         $this->apiParas["payerid"] = $payerid;
     }

     private $walletorderid;

     public function getWalletorderid()
     {
         return $this->$walletorderid;
     }

     public function setWalletorderid($walletorderid)
     {
         $this->walletorderid = $walletorderid;
         $this->apiParas["walletorderid"] = $walletorderid;
     }

     private $origin;

     public function getOrigin()
     {
         return $this->$origin;
     }

     public function setOrigin($origin)
     {
         $this->origin = $origin;
         $this->apiParas["origin"] = $origin;
     }

     private $assistinfo;

     public function getAssistinfo()
     {
         return $this->$assistinfo;
     }

     public function setAssistinfo($assistinfo)
     {
         $this->assistinfo = $assistinfo;
         $this->apiParas["assistinfo"] = $assistinfo;
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

     private $orderstatus;

     public function getOrderstatus()
     {
         return $this->$orderstatus;
     }

     public function setOrderstatus($orderstatus)
     {
         $this->orderstatus = $orderstatus;
         $this->apiParas["orderstatus"] = $orderstatus;
     }

     private $orderamount;

     public function getOrderamount()
     {
         return $this->$orderamount;
     }

     public function setOrderamount($orderamount)
     {
         $this->orderamount = $orderamount;
         $this->apiParas["orderamount"] = $orderamount;
     }

     private $accamount;

     public function getAccamount()
     {
         return $this->$accamount;
     }

     public function setAccamount($accamount)
     {
         $this->accamount = $accamount;
         $this->apiParas["accamount"] = $accamount;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.business.order.modify";
     }
     public function check()     {          }}
