<?php
class WheatfieldOrderEcmorderinmanagerOrderintostockRequest
{
     private $apiParas = array();

     private $lostproductnum;

     public function getLostproductnum()
     {
         return $this->$lostproductnum;
     }

     public function setLostproductnum($lostproductnum)
     {
         $this->lostproductnum = $lostproductnum;
         $this->apiParas["lostproductnum"] = $lostproductnum;
     }

     private $parytype;

     public function getParytype()
     {
         return $this->$parytype;
     }

     public function setParytype($parytype)
     {
         $this->parytype = $parytype;
         $this->apiParas["parytype"] = $parytype;
     }

     private $checkorderusername;

     public function getCheckorderusername()
     {
         return $this->$checkorderusername;
     }

     public function setCheckorderusername($checkorderusername)
     {
         $this->checkorderusername = $checkorderusername;
         $this->apiParas["checkorderusername"] = $checkorderusername;
     }

     private $tostocksubjectcode;

     public function getTostocksubjectcode()
     {
         return $this->$tostocksubjectcode;
     }

     public function setTostocksubjectcode($tostocksubjectcode)
     {
         $this->tostocksubjectcode = $tostocksubjectcode;
         $this->apiParas["tostocksubjectcode"] = $tostocksubjectcode;
     }

     private $channelcodefk;

     public function getChannelcodefk()
     {
         return $this->$channelcodefk;
     }

     public function setChannelcodefk($channelcodefk)
     {
         $this->channelcodefk = $channelcodefk;
         $this->apiParas["channelcodefk"] = $channelcodefk;
     }

     private $materialflowamount;

     public function getMaterialflowamount()
     {
         return $this->$materialflowamount;
     }

     public function setMaterialflowamount($materialflowamount)
     {
         $this->materialflowamount = $materialflowamount;
         $this->apiParas["materialflowamount"] = $materialflowamount;
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

     private $fromstocksubjectcode;

     public function getFromstocksubjectcode()
     {
         return $this->$fromstocksubjectcode;
     }

     public function setFromstocksubjectcode($fromstocksubjectcode)
     {
         $this->fromstocksubjectcode = $fromstocksubjectcode;
         $this->apiParas["fromstocksubjectcode"] = $fromstocksubjectcode;
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

     private $paynum;

     public function getPaynum()
     {
         return $this->$paynum;
     }

     public function setPaynum($paynum)
     {
         $this->paynum = $paynum;
         $this->apiParas["paynum"] = $paynum;
     }

     private $createorderusercode;

     public function getCreateorderusercode()
     {
         return $this->$createorderusercode;
     }

     public function setCreateorderusercode($createorderusercode)
     {
         $this->createorderusercode = $createorderusercode;
         $this->apiParas["createorderusercode"] = $createorderusercode;
     }

     private $otherdutyordercode;

     public function getOtherdutyordercode()
     {
         return $this->$otherdutyordercode;
     }

     public function setOtherdutyordercode($otherdutyordercode)
     {
         $this->otherdutyordercode = $otherdutyordercode;
         $this->apiParas["otherdutyordercode"] = $otherdutyordercode;
     }

     private $createordertime;

     public function getCreateordertime()
     {
         return $this->$createordertime;
     }

     public function setCreateordertime($createordertime)
     {
         $this->createordertime = $createordertime;
         $this->apiParas["createordertime"] = $createordertime;
     }

     private $payordercode;

     public function getPayordercode()
     {
         return $this->$payordercode;
     }

     public function setPayordercode($payordercode)
     {
         $this->payordercode = $payordercode;
         $this->apiParas["payordercode"] = $payordercode;
     }

     private $orderdets;

     public function getOrderdets()
     {
         return $this->$orderdets;
     }

     public function setOrderdets($orderdets)
     {
         $this->orderdets = $orderdets;
         $this->apiParas["orderdets"] = $orderdets;
     }

     private $createorderusername;

     public function getCreateorderusername()
     {
         return $this->$createorderusername;
     }

     public function setCreateorderusername($createorderusername)
     {
         $this->createorderusername = $createorderusername;
         $this->apiParas["createorderusername"] = $createorderusername;
     }

     private $losttype;

     public function getLosttype()
     {
         return $this->$losttype;
     }

     public function setLosttype($losttype)
     {
         $this->losttype = $losttype;
         $this->apiParas["losttype"] = $losttype;
     }

     private $checkorderusercode;

     public function getCheckorderusercode()
     {
         return $this->$checkorderusercode;
     }

     public function setCheckorderusercode($checkorderusercode)
     {
         $this->checkorderusercode = $checkorderusercode;
         $this->apiParas["checkorderusercode"] = $checkorderusercode;
     }

     private $verifysignkey;

     public function getVerifysignkey()
     {
         return $this->$verifysignkey;
     }

     public function setVerifysignkey($verifysignkey)
     {
         $this->verifysignkey = $verifysignkey;
         $this->apiParas["verifysignkey"] = $verifysignkey;
     }

     private $ordertype;

     public function getOrdertype()
     {
         return $this->$ordertype;
     }

     public function setOrdertype($ordertype)
     {
         $this->ordertype = $ordertype;
         $this->apiParas["ordertype"] = $ordertype;
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

     private $lostproductamount;

     public function getLostproductamount()
     {
         return $this->$lostproductamount;
     }

     public function setLostproductamount($lostproductamount)
     {
         $this->lostproductamount = $lostproductamount;
         $this->apiParas["lostproductamount"] = $lostproductamount;
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

     private $checkordertime;

     public function getCheckordertime()
     {
         return $this->$checkordertime;
     }

     public function setCheckordertime($checkordertime)
     {
         $this->checkordertime = $checkordertime;
         $this->apiParas["checkordertime"] = $checkordertime;
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

     private $payamount;

     public function getPayamount()
     {
         return $this->$payamount;
     }

     public function setPayamount($payamount)
     {
         $this->payamount = $payamount;
         $this->apiParas["payamount"] = $payamount;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.order.ecmorderinmanager.orderintostock";
     }
     public function check()     {          }}
