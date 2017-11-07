<?php
class WheatfieldOrderBaseRechargeRequest
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

     private $remark;

     public function getRemark()
     {
         return $this->$remark;
     }

     public function setRemark($remark)
     {
         $this->remark = $remark;
         $this->apiParas["remark"] = $remark;
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

     private $unitprice;

     public function getUnitprice()
     {
         return $this->$unitprice;
     }

     public function setUnitprice($unitprice)
     {
         $this->unitprice = $unitprice;
         $this->apiParas["unitprice"] = $unitprice;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.order.base.recharge";
     }
     public function check()     {          }}
