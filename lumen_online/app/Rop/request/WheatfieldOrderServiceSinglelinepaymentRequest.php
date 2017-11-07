<?php
class WheatfieldOrderServiceSinglelinepaymentRequest
{
     private $apiParas = array();

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

     private $realamount;

     public function getRealamount()
     {
         return $this->$realamount;
     }

     public function setRealamount($realamount)
     {
         $this->realamount = $realamount;
         $this->apiParas["realamount"] = $realamount;
     }

     private $shouldpaymentdate;

     public function getShouldpaymentdate()
     {
         return $this->$shouldpaymentdate;
     }

     public function setShouldpaymentdate($shouldpaymentdate)
     {
         $this->shouldpaymentdate = $shouldpaymentdate;
         $this->apiParas["shouldpaymentdate"] = $shouldpaymentdate;
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

     private $paymentdate;

     public function getPaymentdate()
     {
         return $this->$paymentdate;
     }

     public function setPaymentdate($paymentdate)
     {
         $this->paymentdate = $paymentdate;
         $this->apiParas["paymentdate"] = $paymentdate;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.order.service.singlelinepayment";
     }
     public function check()     {          }}
