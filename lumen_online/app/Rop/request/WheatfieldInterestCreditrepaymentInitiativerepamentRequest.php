<?php
class WheatfieldInterestCreditrepaymentInitiativerepamentRequest
{
     private $apiParas = array();

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

     private $providerid;

     public function getProviderid()
     {
         return $this->$providerid;
     }

     public function setProviderid($providerid)
     {
         $this->providerid = $providerid;
         $this->apiParas["providerid"] = $providerid;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.interest.creditrepayment.initiativerepament";
     }
     public function check()     {          }}
