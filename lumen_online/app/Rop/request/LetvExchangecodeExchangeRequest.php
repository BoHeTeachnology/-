<?php
class LetvExchangecodeExchangeRequest
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

     private $address;

     public function getAddress()
     {
         return $this->$address;
     }

     public function setAddress($address)
     {
         $this->address = $address;
         $this->apiParas["address"] = $address;
     }

     private $identify_code;

     public function getIdentifyCode()
     {
         return $this->$identify_code;
     }

     public function setIdentifyCode($identify_code)
     {
         $this->identify_code = $identify_code;
         $this->apiParas["identify_code"] = $identify_code;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.letv.exchangecode.exchange";
     }
     public function check()     {          }}
