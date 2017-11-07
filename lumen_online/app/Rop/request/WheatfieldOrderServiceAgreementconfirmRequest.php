<?php
class WheatfieldOrderServiceAgreementconfirmRequest
{
     private $apiParas = array();

     private $urlkeyd;

     public function getUrlkeyd()
     {
         return $this->$urlkeyd;
     }

     public function setUrlkeyd($urlkeyd)
     {
         $this->urlkeyd = $urlkeyd;
         $this->apiParas["urlkeyd"] = $urlkeyd;
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

     private $urlkeya;

     public function getUrlkeya()
     {
         return $this->$urlkeya;
     }

     public function setUrlkeya($urlkeya)
     {
         $this->urlkeya = $urlkeya;
         $this->apiParas["urlkeya"] = $urlkeya;
     }

     private $urlkeyb;

     public function getUrlkeyb()
     {
         return $this->$urlkeyb;
     }

     public function setUrlkeyb($urlkeyb)
     {
         $this->urlkeyb = $urlkeyb;
         $this->apiParas["urlkeyb"] = $urlkeyb;
     }

     private $urlkeyc;

     public function getUrlkeyc()
     {
         return $this->$urlkeyc;
     }

     public function setUrlkeyc($urlkeyc)
     {
         $this->urlkeyc = $urlkeyc;
         $this->apiParas["urlkeyc"] = $urlkeyc;
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

     private $merchanturlkey;

     public function getMerchanturlkey()
     {
         return $this->$merchanturlkey;
     }

     public function setMerchanturlkey($merchanturlkey)
     {
         $this->merchanturlkey = $merchanturlkey;
         $this->apiParas["merchanturlkey"] = $merchanturlkey;
     }

     private $murlkeya;

     public function getMurlkeya()
     {
         return $this->$murlkeya;
     }

     public function setMurlkeya($murlkeya)
     {
         $this->murlkeya = $murlkeya;
         $this->apiParas["murlkeya"] = $murlkeya;
     }

     private $userflag;

     public function getUserflag()
     {
         return $this->$userflag;
     }

     public function setUserflag($userflag)
     {
         $this->userflag = $userflag;
         $this->apiParas["userflag"] = $userflag;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.order.service.agreementconfirm";
     }
     public function check()     {          }}
