<?php
class JrdLoanRetreatlassperationRequest
{
     private $apiParas = array();

     private $meruser;

     public function getMeruser()
     {
         return $this->$meruser;
     }

     public function setMeruser($meruser)
     {
         $this->meruser = $meruser;
         $this->apiParas["meruser"] = $meruser;
     }

     private $merloanorderid;

     public function getMerloanorderid()
     {
         return $this->$merloanorderid;
     }

     public function setMerloanorderid($merloanorderid)
     {
         $this->merloanorderid = $merloanorderid;
         $this->apiParas["merloanorderid"] = $merloanorderid;
     }

     private $merid;

     public function getMerid()
     {
         return $this->$merid;
     }

     public function setMerid($merid)
     {
         $this->merid = $merid;
         $this->apiParas["merid"] = $merid;
     }

     private $accountloanorderid;

     public function getAccountloanorderid()
     {
         return $this->$accountloanorderid;
     }

     public function setAccountloanorderid($accountloanorderid)
     {
         $this->accountloanorderid = $accountloanorderid;
         $this->apiParas["accountloanorderid"] = $accountloanorderid;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.jrd.loan.retreatlassperation";
     }
     public function check()     {          }}
