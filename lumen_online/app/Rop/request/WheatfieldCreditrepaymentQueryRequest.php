<?php
class WheatfieldCreditrepaymentQueryRequest
{
     private $apiParas = array();

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

     private $creditdate;

     public function getCreditdate()
     {
         return $this->$creditdate;
     }

     public function setCreditdate($creditdate)
     {
         $this->creditdate = $creditdate;
         $this->apiParas["creditdate"] = $creditdate;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.creditrepayment.query";
     }
     public function check()     {          }}
