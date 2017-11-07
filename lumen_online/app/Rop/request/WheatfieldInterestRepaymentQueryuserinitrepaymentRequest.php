<?php
class WheatfieldInterestRepaymentQueryuserinitrepaymentRequest
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

     private $shouldrepaymentdate;

     public function getShouldrepaymentdate()
     {
         return $this->$shouldrepaymentdate;
     }

     public function setShouldrepaymentdate($shouldrepaymentdate)
     {
         $this->shouldrepaymentdate = $shouldrepaymentdate;
         $this->apiParas["shouldrepaymentdate"] = $shouldrepaymentdate;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.interest.repayment.queryuserinitrepayment";
     }
     public function check()     {          }}
