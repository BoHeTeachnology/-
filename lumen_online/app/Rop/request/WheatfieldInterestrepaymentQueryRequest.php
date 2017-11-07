<?php
class WheatfieldInterestrepaymentQueryRequest
{
     private $apiParas = array();

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

     private $statusid;

     public function getStatusid()
     {
         return $this->$statusid;
     }

     public function setStatusid($statusid)
     {
         $this->statusid = $statusid;
         $this->apiParas["statusid"] = $statusid;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.interestrepayment.query";
     }
     public function check()     {          }}
