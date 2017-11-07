<?php
class WheatfieldOrderMixserviceCreditapplicationRequest
{
     private $apiParas = array();

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

     private $orderplatformname;

     public function getOrderplatformname()
     {
         return $this->$orderplatformname;
     }

     public function setOrderplatformname($orderplatformname)
     {
         $this->orderplatformname = $orderplatformname;
         $this->apiParas["orderplatformname"] = $orderplatformname;
     }

     private $creditype;

     public function getCreditype()
     {
         return $this->$creditype;
     }

     public function setCreditype($creditype)
     {
         $this->creditype = $creditype;
         $this->apiParas["creditype"] = $creditype;
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

     private $ratetemplrate;

     public function getRatetemplrate()
     {
         return $this->$ratetemplrate;
     }

     public function setRatetemplrate($ratetemplrate)
     {
         $this->ratetemplrate = $ratetemplrate;
         $this->apiParas["ratetemplrate"] = $ratetemplrate;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.order.mixservice.creditapplication";
     }
     public function check()     {          }}
