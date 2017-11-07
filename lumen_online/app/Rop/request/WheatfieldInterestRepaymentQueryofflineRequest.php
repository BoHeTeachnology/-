<?php
class WheatfieldInterestRepaymentQueryofflineRequest
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

     private $repaidrepaymentdate;

     public function getRepaidrepaymentdate()
     {
         return $this->$repaidrepaymentdate;
     }

     public function setRepaidrepaymentdate($repaidrepaymentdate)
     {
         $this->repaidrepaymentdate = $repaidrepaymentdate;
         $this->apiParas["repaidrepaymentdate"] = $repaidrepaymentdate;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.interest.repayment.queryoffline";
     }
     public function check()     {          }}
