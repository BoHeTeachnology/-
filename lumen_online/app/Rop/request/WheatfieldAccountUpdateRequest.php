<?php
class WheatfieldAccountUpdateRequest
{
     private $apiParas = array();

     private $constid;

     public function getConstid()
     {
         return $this->$constid;
     }

     public function setConstid($constid)
     {
         $this->constid = $constid;
         $this->apiParas["constid"] = $constid;
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

     private $role;

     public function getRole()
     {
         return $this->$role;
     }

     public function setRole($role)
     {
         $this->role = $role;
         $this->apiParas["role"] = $role;
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

     private $accountid;

     public function getAccountid()
     {
         return $this->$accountid;
     }

     public function setAccountid($accountid)
     {
         $this->accountid = $accountid;
         $this->apiParas["accountid"] = $accountid;
     }

     private $hankheadname;

     public function getHankheadname()
     {
         return $this->$hankheadname;
     }

     public function setHankheadname($hankheadname)
     {
         $this->hankheadname = $hankheadname;
         $this->apiParas["hankheadname"] = $hankheadname;
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

     private $bankprovinec;

     public function getBankprovinec()
     {
         return $this->$bankprovinec;
     }

     public function setBankprovinec($bankprovinec)
     {
         $this->bankprovinec = $bankprovinec;
         $this->apiParas["bankprovinec"] = $bankprovinec;
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

     private $usertype;

     public function getUsertype()
     {
         return $this->$usertype;
     }

     public function setUsertype($usertype)
     {
         $this->usertype = $usertype;
         $this->apiParas["usertype"] = $usertype;
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

     private $hankbranchname;

     public function getHankbranchname()
     {
         return $this->$hankbranchname;
     }

     public function setHankbranchname($hankbranchname)
     {
         $this->hankbranchname = $hankbranchname;
         $this->apiParas["hankbranchname"] = $hankbranchname;
     }

     private $hankbranch;

     public function getHankbranch()
     {
         return $this->$hankbranch;
     }

     public function setHankbranch($hankbranch)
     {
         $this->hankbranch = $hankbranch;
         $this->apiParas["hankbranch"] = $hankbranch;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.account.update";
     }
     public function check()     {          }}
