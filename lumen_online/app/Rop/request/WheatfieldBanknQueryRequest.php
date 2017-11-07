<?php
class WheatfieldBanknQueryRequest
{
     private $apiParas = array();

     private $status;

     public function getStatus()
     {
         return $this->$status;
     }

     public function setStatus($status)
     {
         $this->status = $status;
         $this->apiParas["status"] = $status;
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
         return "ruixue.wheatfield.bankn.query";
     }
     public function check()     {          }}
