<?php
class WheatfieldInterestCreditrepaymentQueryaccountinfoRequest
{
     private $apiParas = array();

     private $instcode;

     public function getInstcode()
     {
         return $this->$instcode;
     }

     public function setInstcode($instcode)
     {
         $this->instcode = $instcode;
         $this->apiParas["instcode"] = $instcode;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.interest.creditrepayment.queryaccountinfo";
     }
     public function check()     {          }}
