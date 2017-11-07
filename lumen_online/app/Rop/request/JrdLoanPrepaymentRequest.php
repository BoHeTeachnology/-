<?php
class JrdLoanPrepaymentRequest
{
     private $apiParas = array();

     private $prerepayapplyorderid;

     public function getPrerepayapplyorderid()
     {
         return $this->$prerepayapplyorderid;
     }

     public function setPrerepayapplyorderid($prerepayapplyorderid)
     {
         $this->prerepayapplyorderid = $prerepayapplyorderid;
         $this->apiParas["prerepayapplyorderid"] = $prerepayapplyorderid;
     }

     private $prerepaydate;

     public function getPrerepaydate()
     {
         return $this->$prerepaydate;
     }

     public function setPrerepaydate($prerepaydate)
     {
         $this->prerepaydate = $prerepaydate;
         $this->apiParas["prerepaydate"] = $prerepaydate;
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

     private $prerepayapplydate;

     public function getPrerepayapplydate()
     {
         return $this->$prerepayapplydate;
     }

     public function setPrerepayapplydate($prerepayapplydate)
     {
         $this->prerepayapplydate = $prerepayapplydate;
         $this->apiParas["prerepayapplydate"] = $prerepayapplydate;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.jrd.loan.prepayment";
     }
     public function check()     {          }}
