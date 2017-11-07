<?php
class RongcapitalMtageisBalanceinfoGetlistRequest
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

     private $merchantcode;

     public function getMerchantcode()
     {
         return $this->$merchantcode;
     }

     public function setMerchantcode($merchantcode)
     {
         $this->merchantcode = $merchantcode;
         $this->apiParas["merchantcode"] = $merchantcode;
     }

     private $dealproductcode;

     public function getDealproductcode()
     {
         return $this->$dealproductcode;
     }

     public function setDealproductcode($dealproductcode)
     {
         $this->dealproductcode = $dealproductcode;
         $this->apiParas["dealproductcode"] = $dealproductcode;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.rongcapital.mtageis.balanceinfo.getlist";
     }
     public function check()     {          }}
