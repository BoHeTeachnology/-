<?php
class WheatfieldOrderServiceKzhloanserviceRequest
{
     private $apiParas = array();

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

     private $expandd;

     public function getExpandd()
     {
         return $this->$expandd;
     }

     public function setExpandd($expandd)
     {
         $this->expandd = $expandd;
         $this->apiParas["expandd"] = $expandd;
     }

     private $expandb;

     public function getExpandb()
     {
         return $this->$expandb;
     }

     public function setExpandb($expandb)
     {
         $this->expandb = $expandb;
         $this->apiParas["expandb"] = $expandb;
     }

     private $expande;

     public function getExpande()
     {
         return $this->$expande;
     }

     public function setExpande($expande)
     {
         $this->expande = $expande;
         $this->apiParas["expande"] = $expande;
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

     private $expanda;

     public function getExpanda()
     {
         return $this->$expanda;
     }

     public function setExpanda($expanda)
     {
         $this->expanda = $expanda;
         $this->apiParas["expanda"] = $expanda;
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

     private $expandc;

     public function getExpandc()
     {
         return $this->$expandc;
     }

     public function setExpandc($expandc)
     {
         $this->expandc = $expandc;
         $this->apiParas["expandc"] = $expandc;
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

     private $creditresultid;

     public function getCreditresultid()
     {
         return $this->$creditresultid;
     }

     public function setCreditresultid($creditresultid)
     {
         $this->creditresultid = $creditresultid;
         $this->apiParas["creditresultid"] = $creditresultid;
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

     private $crmodeid;

     public function getCrmodeid()
     {
         return $this->$crmodeid;
     }

     public function setCrmodeid($crmodeid)
     {
         $this->crmodeid = $crmodeid;
         $this->apiParas["crmodeid"] = $crmodeid;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.order.service.kzhloanservice";
     }
     public function check()     {          }}
