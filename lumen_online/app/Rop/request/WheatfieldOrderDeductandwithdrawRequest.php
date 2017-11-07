<?php
class WheatfieldOrderDeductandwithdrawRequest
{
     private $apiParas = array();

     private $userrelateid;

     public function getUserrelateid()
     {
         return $this->$userrelateid;
     }

     public function setUserrelateid($userrelateid)
     {
         $this->userrelateid = $userrelateid;
         $this->apiParas["userrelateid"] = $userrelateid;
     }

     private $deductfunccode;

     public function getDeductfunccode()
     {
         return $this->$deductfunccode;
     }

     public function setDeductfunccode($deductfunccode)
     {
         $this->deductfunccode = $deductfunccode;
         $this->apiParas["deductfunccode"] = $deductfunccode;
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

     private $withdrawproductid;

     public function getWithdrawproductid()
     {
         return $this->$withdrawproductid;
     }

     public function setWithdrawproductid($withdrawproductid)
     {
         $this->withdrawproductid = $withdrawproductid;
         $this->apiParas["withdrawproductid"] = $withdrawproductid;
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

     private $requesttime;

     public function getRequesttime()
     {
         return $this->$requesttime;
     }

     public function setRequesttime($requesttime)
     {
         $this->requesttime = $requesttime;
         $this->apiParas["requesttime"] = $requesttime;
     }

     private $useripaddress;

     public function getUseripaddress()
     {
         return $this->$useripaddress;
     }

     public function setUseripaddress($useripaddress)
     {
         $this->useripaddress = $useripaddress;
         $this->apiParas["useripaddress"] = $useripaddress;
     }

     private $deductfee;

     public function getDeductfee()
     {
         return $this->$deductfee;
     }

     public function setDeductfee($deductfee)
     {
         $this->deductfee = $deductfee;
         $this->apiParas["deductfee"] = $deductfee;
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

     private $withdrawfee;

     public function getWithdrawfee()
     {
         return $this->$withdrawfee;
     }

     public function setWithdrawfee($withdrawfee)
     {
         $this->withdrawfee = $withdrawfee;
         $this->apiParas["withdrawfee"] = $withdrawfee;
     }

     private $deductproductid;

     public function getDeductproductid()
     {
         return $this->$deductproductid;
     }

     public function setDeductproductid($deductproductid)
     {
         $this->deductproductid = $deductproductid;
         $this->apiParas["deductproductid"] = $deductproductid;
     }

     private $remark;

     public function getRemark()
     {
         return $this->$remark;
     }

     public function setRemark($remark)
     {
         $this->remark = $remark;
         $this->apiParas["remark"] = $remark;
     }

     private $userorderid;

     public function getUserorderid()
     {
         return $this->$userorderid;
     }

     public function setUserorderid($userorderid)
     {
         $this->userorderid = $userorderid;
         $this->apiParas["userorderid"] = $userorderid;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.order.deductandwithdraw";
     }
     public function check()     {          }}
