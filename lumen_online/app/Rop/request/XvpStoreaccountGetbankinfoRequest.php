<?php
class XvpStoreaccountGetbankinfoRequest
{
     private $apiParas = array();

     private $bankcode;

     public function getBankcode()
     {
         return $this->$bankcode;
     }

     public function setBankcode($bankcode)
     {
         $this->bankcode = $bankcode;
         $this->apiParas["bankcode"] = $bankcode;
     }

     private $citycode;

     public function getCitycode()
     {
         return $this->$citycode;
     }

     public function setCitycode($citycode)
     {
         $this->citycode = $citycode;
         $this->apiParas["citycode"] = $citycode;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.xvp.storeaccount.getbankinfo";
     }
     public function check()     {          }}
