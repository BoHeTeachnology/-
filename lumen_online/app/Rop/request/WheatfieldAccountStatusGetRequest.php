<?php
class WheatfieldAccountStatusGetRequest
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.account.status.get";
     }
     public function check()     {          }}
