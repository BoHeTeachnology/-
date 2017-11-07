<?php
class WheatfieldBankQueryRequest
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.bank.query";
     }
     public function check()     {          }}
