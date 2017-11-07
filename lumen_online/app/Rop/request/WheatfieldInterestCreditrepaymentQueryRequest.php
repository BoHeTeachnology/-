<?php
class WheatfieldInterestCreditrepaymentQueryRequest
{
     private $apiParas = array();

     private $repaymenttype;

     public function getRepaymenttype()
     {
         return $this->$repaymenttype;
     }

     public function setRepaymenttype($repaymenttype)
     {
         $this->repaymenttype = $repaymenttype;
         $this->apiParas["repaymenttype"] = $repaymenttype;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.interest.creditrepayment.query";
     }
     public function check()     {          }}
