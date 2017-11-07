<?php
class ErpAdvancepaymentQueryRequest
{
     private $apiParas = array();

     private $time;

     public function getTime()
     {
         return $this->$time;
     }

     public function setTime($time)
     {
         $this->time = $time;
         $this->apiParas["time"] = $time;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.erp.advancepayment.query";
     }
     public function check()     {          }}
