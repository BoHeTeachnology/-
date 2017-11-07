<?php
class WheatfieldRopkeyOrderCommonTransferRequest
{
     private $apiParas = array();

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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.ropkey.order.common.transfer";
     }
     public function check()     {          }}
