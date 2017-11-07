<?php
class WheatfieldOrderServiceNewloanapplyRequest
{
     private $apiParas = array();

     private $urlkey;

     public function getUrlkey()
     {
         return $this->$urlkey;
     }

     public function setUrlkey($urlkey)
     {
         $this->urlkey = $urlkey;
         $this->apiParas["urlkey"] = $urlkey;
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

     private $requestdate;

     public function getRequestdate()
     {
         return $this->$requestdate;
     }

     public function setRequestdate($requestdate)
     {
         $this->requestdate = $requestdate;
         $this->apiParas["requestdate"] = $requestdate;
     }

     private $ratetemplate;

     public function getRatetemplate()
     {
         return $this->$ratetemplate;
     }

     public function setRatetemplate($ratetemplate)
     {
         $this->ratetemplate = $ratetemplate;
         $this->apiParas["ratetemplate"] = $ratetemplate;
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

     private $reqesttime;

     public function getReqesttime()
     {
         return $this->$reqesttime;
     }

     public function setReqesttime($reqesttime)
     {
         $this->reqesttime = $reqesttime;
         $this->apiParas["reqesttime"] = $reqesttime;
     }

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

     private $username;

     public function getUsername()
     {
         return $this->$username;
     }

     public function setUsername($username)
     {
         $this->username = $username;
         $this->apiParas["username"] = $username;
     }

     private $jsondata;

     public function getJsondata()
     {
         return $this->$jsondata;
     }

     public function setJsondata($jsondata)
     {
         $this->jsondata = $jsondata;
         $this->apiParas["jsondata"] = $jsondata;
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
         return "ruixue.wheatfield.order.service.newloanapply";
     }
     public function check()     {          }}
