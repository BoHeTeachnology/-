<?php
class XvpStoreaccountGetcitycodeRequest
{
     private $apiParas = array();

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
         return "ruixue.xvp.storeaccount.getcitycode";
     }
     public function check()     {          }}
