<?php
class WheatfieldAccountCreditRequest
{
     private $apiParas = array();

     private $credittypeid;

     public function getCredittypeid()
     {
         return $this->$credittypeid;
     }

     public function setCredittypeid($credittypeid)
     {
         $this->credittypeid = $credittypeid;
         $this->apiParas["credittypeid"] = $credittypeid;
     }

     private $agmtname;

     public function getAgmtname()
     {
         return $this->$agmtname;
     }

     public function setAgmtname($agmtname)
     {
         $this->agmtname = $agmtname;
         $this->apiParas["agmtname"] = $agmtname;
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

     private $agmtcode;

     public function getAgmtcode()
     {
         return $this->$agmtcode;
     }

     public function setAgmtcode($agmtcode)
     {
         $this->agmtcode = $agmtcode;
         $this->apiParas["agmtcode"] = $agmtcode;
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

     private $rate;

     public function getRate()
     {
         return $this->$rate;
     }

     public function setRate($rate)
     {
         $this->rate = $rate;
         $this->apiParas["rate"] = $rate;
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

     private $provideruserid;

     public function getProvideruserid()
     {
         return $this->$provideruserid;
     }

     public function setProvideruserid($provideruserid)
     {
         $this->provideruserid = $provideruserid;
         $this->apiParas["provideruserid"] = $provideruserid;
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

     private $amount;

     public function getAmount()
     {
         return $this->$amount;
     }

     public function setAmount($amount)
     {
         $this->amount = $amount;
         $this->apiParas["amount"] = $amount;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.account.credit";
     }
     public function check()     {          }}
