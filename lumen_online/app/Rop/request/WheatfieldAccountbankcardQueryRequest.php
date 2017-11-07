<?php
class WheatfieldAccountbankcardQueryRequest
{
     private $apiParas = array();

     private $status;

     public function getStatus()
     {
         return $this->$status;
     }

     public function setStatus($status)
     {
         $this->status = $status;
         $this->apiParas["status"] = $status;
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

     private $openaccountenddate;

     public function getOpenaccountenddate()
     {
         return $this->$openaccountenddate;
     }

     public function setOpenaccountenddate($openaccountenddate)
     {
         $this->openaccountenddate = $openaccountenddate;
         $this->apiParas["openaccountenddate"] = $openaccountenddate;
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

     private $accountproperty;

     public function getAccountproperty()
     {
         return $this->$accountproperty;
     }

     public function setAccountproperty($accountproperty)
     {
         $this->accountproperty = $accountproperty;
         $this->apiParas["accountproperty"] = $accountproperty;
     }

     private $createdendtime;

     public function getCreatedendtime()
     {
         return $this->$createdendtime;
     }

     public function setCreatedendtime($createdendtime)
     {
         $this->createdendtime = $createdendtime;
         $this->apiParas["createdendtime"] = $createdendtime;
     }

     private $openaccountstartdate;

     public function getOpenaccountstartdate()
     {
         return $this->$openaccountstartdate;
     }

     public function setOpenaccountstartdate($openaccountstartdate)
     {
         $this->openaccountstartdate = $openaccountstartdate;
         $this->apiParas["openaccountstartdate"] = $openaccountstartdate;
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

     private $accounttypeid;

     public function getAccounttypeid()
     {
         return $this->$accounttypeid;
     }

     public function setAccounttypeid($accounttypeid)
     {
         $this->accounttypeid = $accounttypeid;
         $this->apiParas["accounttypeid"] = $accounttypeid;
     }

     private $createdstarttime;

     public function getCreatedstarttime()
     {
         return $this->$createdstarttime;
     }

     public function setCreatedstarttime($createdstarttime)
     {
         $this->createdstarttime = $createdstarttime;
         $this->apiParas["createdstarttime"] = $createdstarttime;
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

     private $accountname;

     public function getAccountname()
     {
         return $this->$accountname;
     }

     public function setAccountname($accountname)
     {
         $this->accountname = $accountname;
         $this->apiParas["accountname"] = $accountname;
     }

     private $accountpurpose;

     public function getAccountpurpose()
     {
         return $this->$accountpurpose;
     }

     public function setAccountpurpose($accountpurpose)
     {
         $this->accountpurpose = $accountpurpose;
         $this->apiParas["accountpurpose"] = $accountpurpose;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.accountbankcard.query";
     }
     public function check()     {          }}
