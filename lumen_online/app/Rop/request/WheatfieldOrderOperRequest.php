<?php
class WheatfieldOrderOperRequest
{
     private $apiParas = array();

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

     private $adjusttype;

     public function getAdjusttype()
     {
         return $this->$adjusttype;
     }

     public function setAdjusttype($adjusttype)
     {
         $this->adjusttype = $adjusttype;
         $this->apiParas["adjusttype"] = $adjusttype;
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

     private $opertype;

     public function getOpertype()
     {
         return $this->$opertype;
     }

     public function setOpertype($opertype)
     {
         $this->opertype = $opertype;
         $this->apiParas["opertype"] = $opertype;
     }

     private $number;

     public function getNumber()
     {
         return $this->$number;
     }

     public function setNumber($number)
     {
         $this->number = $number;
         $this->apiParas["number"] = $number;
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

     private $adjustcontent;

     public function getAdjustcontent()
     {
         return $this->$adjustcontent;
     }

     public function setAdjustcontent($adjustcontent)
     {
         $this->adjustcontent = $adjustcontent;
         $this->apiParas["adjustcontent"] = $adjustcontent;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.order.oper";
     }
     public function check()     {          }}
