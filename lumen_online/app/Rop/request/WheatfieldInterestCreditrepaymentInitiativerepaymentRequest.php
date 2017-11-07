<?php
class WheatfieldInterestCreditrepaymentInitiativerepaymentRequest
{
     private $apiParas = array();

     private $repaymentinterest;

     public function getRepaymentinterest()
     {
         return $this->$repaymentinterest;
     }

     public function setRepaymentinterest($repaymentinterest)
     {
         $this->repaymentinterest = $repaymentinterest;
         $this->apiParas["repaymentinterest"] = $repaymentinterest;
     }

     private $currbillinterest;

     public function getCurrbillinterest()
     {
         return $this->$currbillinterest;
     }

     public function setCurrbillinterest($currbillinterest)
     {
         $this->currbillinterest = $currbillinterest;
         $this->apiParas["currbillinterest"] = $currbillinterest;
     }

     private $repaymentcapital;

     public function getRepaymentcapital()
     {
         return $this->$repaymentcapital;
     }

     public function setRepaymentcapital($repaymentcapital)
     {
         $this->repaymentcapital = $repaymentcapital;
         $this->apiParas["repaymentcapital"] = $repaymentcapital;
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

     private $currbillcapital;

     public function getCurrbillcapital()
     {
         return $this->$currbillcapital;
     }

     public function setCurrbillcapital($currbillcapital)
     {
         $this->currbillcapital = $currbillcapital;
         $this->apiParas["currbillcapital"] = $currbillcapital;
     }

     private $overduerepaymentcapital;

     public function getOverduerepaymentcapital()
     {
         return $this->$overduerepaymentcapital;
     }

     public function setOverduerepaymentcapital($overduerepaymentcapital)
     {
         $this->overduerepaymentcapital = $overduerepaymentcapital;
         $this->apiParas["overduerepaymentcapital"] = $overduerepaymentcapital;
     }

     private $overduerepaymentinterest;

     public function getOverduerepaymentinterest()
     {
         return $this->$overduerepaymentinterest;
     }

     public function setOverduerepaymentinterest($overduerepaymentinterest)
     {
         $this->overduerepaymentinterest = $overduerepaymentinterest;
         $this->apiParas["overduerepaymentinterest"] = $overduerepaymentinterest;
     }

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

     private $repaymentdate;

     public function getRepaymentdate()
     {
         return $this->$repaymentdate;
     }

     public function setRepaymentdate($repaymentdate)
     {
         $this->repaymentdate = $repaymentdate;
         $this->apiParas["repaymentdate"] = $repaymentdate;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.interest.creditrepayment.initiativerepayment";
     }
     public function check()     {          }}
