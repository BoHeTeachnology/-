<?php
class JrdHuitangOrdergetRequest
{
     private $apiParas = array();

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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.jrd.huitang.orderget";
     }
     public function check()     {          }}
