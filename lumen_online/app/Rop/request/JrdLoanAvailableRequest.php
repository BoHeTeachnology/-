<?php
class JrdLoanAvailableRequest
{
     private $apiParas = array();

     private $cpamount;

     public function getCpamount()
     {
         return $this->$cpamount;
     }

     public function setCpamount($cpamount)
     {
         $this->cpamount = $cpamount;
         $this->apiParas["cpamount"] = $cpamount;
     }

     private $mercaporderid;

     public function getMercaporderid()
     {
         return $this->$mercaporderid;
     }

     public function setMercaporderid($mercaporderid)
     {
         $this->mercaporderid = $mercaporderid;
         $this->apiParas["mercaporderid"] = $mercaporderid;
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

     private $merprovider;

     public function getMerprovider()
     {
         return $this->$merprovider;
     }

     public function setMerprovider($merprovider)
     {
         $this->merprovider = $merprovider;
         $this->apiParas["merprovider"] = $merprovider;
     }

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

     private $cplaunchtime;

     public function getCplaunchtime()
     {
         return $this->$cplaunchtime;
     }

     public function setCplaunchtime($cplaunchtime)
     {
         $this->cplaunchtime = $cplaunchtime;
         $this->apiParas["cplaunchtime"] = $cplaunchtime;
     }

     private $crmodeid;

     public function getCrmodeid()
     {
         return $this->$crmodeid;
     }

     public function setCrmodeid($crmodeid)
     {
         $this->crmodeid = $crmodeid;
         $this->apiParas["crmodeid"] = $crmodeid;
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
         return "ruixue.jrd.loan.available";
     }
     public function check()     {          }}
