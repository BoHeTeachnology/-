<?php
class JrdEventownOrdergetRequest
{
     private $apiParas = array();

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

     private $micename;

     public function getMicename()
     {
         return $this->$micename;
     }

     public function setMicename($micename)
     {
         $this->micename = $micename;
         $this->apiParas["micename"] = $micename;
     }

     private $orderpurpose;

     public function getOrderpurpose()
     {
         return $this->$orderpurpose;
     }

     public function setOrderpurpose($orderpurpose)
     {
         $this->orderpurpose = $orderpurpose;
         $this->apiParas["orderpurpose"] = $orderpurpose;
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

     private $norderstatus;

     public function getNorderstatus()
     {
         return $this->$norderstatus;
     }

     public function setNorderstatus($norderstatus)
     {
         $this->norderstatus = $norderstatus;
         $this->apiParas["norderstatus"] = $norderstatus;
     }

     private $orgid;

     public function getOrgid()
     {
         return $this->$orgid;
     }

     public function setOrgid($orgid)
     {
         $this->orgid = $orgid;
         $this->apiParas["orgid"] = $orgid;
     }

     private $miceid;

     public function getMiceid()
     {
         return $this->$miceid;
     }

     public function setMiceid($miceid)
     {
         $this->miceid = $miceid;
         $this->apiParas["miceid"] = $miceid;
     }

     private $businesstype;

     public function getBusinesstype()
     {
         return $this->$businesstype;
     }

     public function setBusinesstype($businesstype)
     {
         $this->businesstype = $businesstype;
         $this->apiParas["businesstype"] = $businesstype;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.jrd.eventown.orderget";
     }
     public function check()     {          }}
