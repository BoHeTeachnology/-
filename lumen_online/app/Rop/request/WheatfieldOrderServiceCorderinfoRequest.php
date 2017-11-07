<?php
class WheatfieldOrderServiceCorderinfoRequest
{
     private $apiParas = array();

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

     private $respcode;

     public function getRespcode()
     {
         return $this->$respcode;
     }

     public function setRespcode($respcode)
     {
         $this->respcode = $respcode;
         $this->apiParas["respcode"] = $respcode;
     }

     private $goodscnt;

     public function getGoodscnt()
     {
         return $this->$goodscnt;
     }

     public function setGoodscnt($goodscnt)
     {
         $this->goodscnt = $goodscnt;
         $this->apiParas["goodscnt"] = $goodscnt;
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

     private $orderid;

     public function getOrderid()
     {
         return $this->$orderid;
     }

     public function setOrderid($orderid)
     {
         $this->orderid = $orderid;
         $this->apiParas["orderid"] = $orderid;
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

     private $ordercontrol;

     public function getOrdercontrol()
     {
         return $this->$ordercontrol;
     }

     public function setOrdercontrol($ordercontrol)
     {
         $this->ordercontrol = $ordercontrol;
         $this->apiParas["ordercontrol"] = $ordercontrol;
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

     private $providerid;

     public function getProviderid()
     {
         return $this->$providerid;
     }

     public function setProviderid($providerid)
     {
         $this->providerid = $providerid;
         $this->apiParas["providerid"] = $providerid;
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
         return "ruixue.wheatfield.order.service.corderinfo";
     }
     public function check()     {          }}
