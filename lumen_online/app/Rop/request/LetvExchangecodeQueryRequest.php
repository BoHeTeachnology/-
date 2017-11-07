<?php
class LetvExchangecodeQueryRequest
{
     private $apiParas = array();

     private $exchange_code;

     public function getExchangeCode()
     {
         return $this->$exchange_code;
     }

     public function setExchangeCode($exchange_code)
     {
         $this->exchange_code = $exchange_code;
         $this->apiParas["exchange_code"] = $exchange_code;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.letv.exchangecode.query";
     }
     public function check()     {          }}
