<?php
class WheatfieldCorporateaccountQueryRequest
{
     private $apiParas = array();

     private $createdtimeto;

     public function getCreatedtimeto()
     {
         return $this->$createdtimeto;
     }

     public function setCreatedtimeto($createdtimeto)
     {
         $this->createdtimeto = $createdtimeto;
         $this->apiParas["createdtimeto"] = $createdtimeto;
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

     private $createdtimefrom;

     public function getCreatedtimefrom()
     {
         return $this->$createdtimefrom;
     }

     public function setCreatedtimefrom($createdtimefrom)
     {
         $this->createdtimefrom = $createdtimefrom;
         $this->apiParas["createdtimefrom"] = $createdtimefrom;
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

     private $updatedtimeto;

     public function getUpdatedtimeto()
     {
         return $this->$updatedtimeto;
     }

     public function setUpdatedtimeto($updatedtimeto)
     {
         $this->updatedtimeto = $updatedtimeto;
         $this->apiParas["updatedtimeto"] = $updatedtimeto;
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

     private $updatedtimefrom;

     public function getUpdatedtimefrom()
     {
         return $this->$updatedtimefrom;
     }

     public function setUpdatedtimefrom($updatedtimefrom)
     {
         $this->updatedtimefrom = $updatedtimefrom;
         $this->apiParas["updatedtimefrom"] = $updatedtimefrom;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.corporateaccount.query";
     }
     public function check()     {          }}
