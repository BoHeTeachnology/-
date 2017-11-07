<?php
class WheatfieldBankaccountInfoupdateRequest
{
     private $apiParas = array();

     private $bank_branch;

     public function getBankBranch()
     {
         return $this->$bank_branch;
     }

     public function setBankBranch($bank_branch)
     {
         $this->bank_branch = $bank_branch;
         $this->apiParas["bank_branch"] = $bank_branch;
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

     private $bank_city;

     public function getBankCity()
     {
         return $this->$bank_city;
     }

     public function setBankCity($bank_city)
     {
         $this->bank_city = $bank_city;
         $this->apiParas["bank_city"] = $bank_city;
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

     private $bank_province;

     public function getBankProvince()
     {
         return $this->$bank_province;
     }

     public function setBankProvince($bank_province)
     {
         $this->bank_province = $bank_province;
         $this->apiParas["bank_province"] = $bank_province;
     }

     private $referuserid;

     public function getReferuserid()
     {
         return $this->$referuserid;
     }

     public function setReferuserid($referuserid)
     {
         $this->referuserid = $referuserid;
         $this->apiParas["referuserid"] = $referuserid;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.bankaccount.infoupdate";
     }
     public function check()     {          }}
