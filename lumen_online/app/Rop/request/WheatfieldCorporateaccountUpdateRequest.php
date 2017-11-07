<?php
class WheatfieldCorporateaccountUpdateRequest
{
     private $apiParas = array();

     private $bankcity;

     public function getBankcity()
     {
         return $this->$bankcity;
     }

     public function setBankcity($bankcity)
     {
         $this->bankcity = $bankcity;
         $this->apiParas["bankcity"] = $bankcity;
     }

     private $openaccountdate;

     public function getOpenaccountdate()
     {
         return $this->$openaccountdate;
     }

     public function setOpenaccountdate($openaccountdate)
     {
         $this->openaccountdate = $openaccountdate;
         $this->apiParas["openaccountdate"] = $openaccountdate;
     }

     private $currency;

     public function getCurrency()
     {
         return $this->$currency;
     }

     public function setCurrency($currency)
     {
         $this->currency = $currency;
         $this->apiParas["currency"] = $currency;
     }

     private $accountnumber;

     public function getAccountnumber()
     {
         return $this->$accountnumber;
     }

     public function setAccountnumber($accountnumber)
     {
         $this->accountnumber = $accountnumber;
         $this->apiParas["accountnumber"] = $accountnumber;
     }

     private $bankbranchname;

     public function getBankbranchname()
     {
         return $this->$bankbranchname;
     }

     public function setBankbranchname($bankbranchname)
     {
         $this->bankbranchname = $bankbranchname;
         $this->apiParas["bankbranchname"] = $bankbranchname;
     }

     private $openaccountdescription;

     public function getOpenaccountdescription()
     {
         return $this->$openaccountdescription;
     }

     public function setOpenaccountdescription($openaccountdescription)
     {
         $this->openaccountdescription = $openaccountdescription;
         $this->apiParas["openaccountdescription"] = $openaccountdescription;
     }

     private $corporateaccountid;

     public function getCorporateaccountid()
     {
         return $this->$corporateaccountid;
     }

     public function setCorporateaccountid($corporateaccountid)
     {
         $this->corporateaccountid = $corporateaccountid;
         $this->apiParas["corporateaccountid"] = $corporateaccountid;
     }

     private $certificatetype;

     public function getCertificatetype()
     {
         return $this->$certificatetype;
     }

     public function setCertificatetype($certificatetype)
     {
         $this->certificatetype = $certificatetype;
         $this->apiParas["certificatetype"] = $certificatetype;
     }

     private $accountrealname;

     public function getAccountrealname()
     {
         return $this->$accountrealname;
     }

     public function setAccountrealname($accountrealname)
     {
         $this->accountrealname = $accountrealname;
         $this->apiParas["accountrealname"] = $accountrealname;
     }

     private $bankhead;

     public function getBankhead()
     {
         return $this->$bankhead;
     }

     public function setBankhead($bankhead)
     {
         $this->bankhead = $bankhead;
         $this->apiParas["bankhead"] = $bankhead;
     }

     private $bankprovince;

     public function getBankprovince()
     {
         return $this->$bankprovince;
     }

     public function setBankprovince($bankprovince)
     {
         $this->bankprovince = $bankprovince;
         $this->apiParas["bankprovince"] = $bankprovince;
     }

     private $certificatenumber;

     public function getCertificatenumber()
     {
         return $this->$certificatenumber;
     }

     public function setCertificatenumber($certificatenumber)
     {
         $this->certificatenumber = $certificatenumber;
         $this->apiParas["certificatenumber"] = $certificatenumber;
     }

     private $bankbranch;

     public function getBankbranch()
     {
         return $this->$bankbranch;
     }

     public function setBankbranch($bankbranch)
     {
         $this->bankbranch = $bankbranch;
         $this->apiParas["bankbranch"] = $bankbranch;
     }

     private $bankheadname;

     public function getBankheadname()
     {
         return $this->$bankheadname;
     }

     public function setBankheadname($bankheadname)
     {
         $this->bankheadname = $bankheadname;
         $this->apiParas["bankheadname"] = $bankheadname;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.corporateaccount.update";
     }
     public function check()     {          }}
