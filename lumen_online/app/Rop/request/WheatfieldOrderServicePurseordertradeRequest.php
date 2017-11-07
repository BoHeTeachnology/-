<?php
class WheatfieldOrderServicePurseordertradeRequest
{
     private $apiParas = array();

     private $rolecode;

     public function getRolecode()
     {
         return $this->$rolecode;
     }

     public function setRolecode($rolecode)
     {
         $this->rolecode = $rolecode;
         $this->apiParas["rolecode"] = $rolecode;
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

     private $intoproductid;

     public function getIntoproductid()
     {
         return $this->$intoproductid;
     }

     public function setIntoproductid($intoproductid)
     {
         $this->intoproductid = $intoproductid;
         $this->apiParas["intoproductid"] = $intoproductid;
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

     private $interuserid;

     public function getInteruserid()
     {
         return $this->$interuserid;
     }

     public function setInteruserid($interuserid)
     {
         $this->interuserid = $interuserid;
         $this->apiParas["interuserid"] = $interuserid;
     }

     private $otheramount;

     public function getOtheramount()
     {
         return $this->$otheramount;
     }

     public function setOtheramount($otheramount)
     {
         $this->otheramount = $otheramount;
         $this->apiParas["otheramount"] = $otheramount;
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

     private $usertype;

     public function getUsertype()
     {
         return $this->$usertype;
     }

     public function setUsertype($usertype)
     {
         $this->usertype = $usertype;
         $this->apiParas["usertype"] = $usertype;
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

     private $ordercount;

     public function getOrdercount()
     {
         return $this->$ordercount;
     }

     public function setOrdercount($ordercount)
     {
         $this->ordercount = $ordercount;
         $this->apiParas["ordercount"] = $ordercount;
     }

     private $intorootinstcd;

     public function getIntorootinstcd()
     {
         return $this->$intorootinstcd;
     }

     public function setIntorootinstcd($intorootinstcd)
     {
         $this->intorootinstcd = $intorootinstcd;
         $this->apiParas["intorootinstcd"] = $intorootinstcd;
     }

     private $inusertype;

     public function getInusertype()
     {
         return $this->$inusertype;
     }

     public function setInusertype($inusertype)
     {
         $this->inusertype = $inusertype;
         $this->apiParas["inusertype"] = $inusertype;
     }

     private $dealproductcode;

     public function getDealproductcode()
     {
         return $this->$dealproductcode;
     }

     public function setDealproductcode($dealproductcode)
     {
         $this->dealproductcode = $dealproductcode;
         $this->apiParas["dealproductcode"] = $dealproductcode;
     }

     private $interrolecode;

     public function getInterrolecode()
     {
         return $this->$interrolecode;
     }

     public function setInterrolecode($interrolecode)
     {
         $this->interrolecode = $interrolecode;
         $this->apiParas["interrolecode"] = $interrolecode;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.order.service.purseordertrade";
     }
     public function check()     {          }}
