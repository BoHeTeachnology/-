<?php
class WheatfieldInterestRepaymentQueryadvanceRequest
{
     private $apiParas = array();

     private $advancedate;

     public function getAdvancedate()
     {
         return $this->$advancedate;
     }

     public function setAdvancedate($advancedate)
     {
         $this->advancedate = $advancedate;
         $this->apiParas["advancedate"] = $advancedate;
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

     private $advancetype;

     public function getAdvancetype()
     {
         return $this->$advancetype;
     }

     public function setAdvancetype($advancetype)
     {
         $this->advancetype = $advancetype;
         $this->apiParas["advancetype"] = $advancetype;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.interest.repayment.queryadvance";
     }
     public function check()     {          }}
