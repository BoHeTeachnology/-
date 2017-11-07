<?php
class WheatfieldOrderServiceSingleprepaymentRequest
{
     private $apiParas = array();

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

     private $prepaymenttype;

     public function getPrepaymenttype()
     {
         return $this->$prepaymenttype;
     }

     public function setPrepaymenttype($prepaymenttype)
     {
         $this->prepaymenttype = $prepaymenttype;
         $this->apiParas["prepaymenttype"] = $prepaymenttype;
     }

     private $prepaydate;

     public function getPrepaydate()
     {
         return $this->$prepaydate;
     }

     public function setPrepaydate($prepaydate)
     {
         $this->prepaydate = $prepaydate;
         $this->apiParas["prepaydate"] = $prepaydate;
     }

     private $roottype;

     public function getRoottype()
     {
         return $this->$roottype;
     }

     public function setRoottype($roottype)
     {
         $this->roottype = $roottype;
         $this->apiParas["roottype"] = $roottype;
     }

     private $prepayamount;

     public function getPrepayamount()
     {
         return $this->$prepayamount;
     }

     public function setPrepayamount($prepayamount)
     {
         $this->prepayamount = $prepayamount;
         $this->apiParas["prepayamount"] = $prepayamount;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.order.service.singleprepayment";
     }
     public function check()     {          }}
