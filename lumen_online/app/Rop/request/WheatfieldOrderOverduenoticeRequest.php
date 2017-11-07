<?php
class WheatfieldOrderOverduenoticeRequest
{
     private $apiParas = array();

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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.order.overduenotice";
     }
     public function check()     {          }}
