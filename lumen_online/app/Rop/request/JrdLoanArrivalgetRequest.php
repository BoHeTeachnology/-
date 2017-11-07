<?php
class JrdLoanArrivalgetRequest
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.jrd.loan.arrivalget";
     }
     public function check()     {          }}
