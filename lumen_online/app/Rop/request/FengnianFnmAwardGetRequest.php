<?php
class FengnianFnmAwardGetRequest
{
     private $apiParas = array();

     private $consumption_amount;

     public function getConsumptionAmount()
     {
         return $this->$consumption_amount;
     }

     public function setConsumptionAmount($consumption_amount)
     {
         $this->consumption_amount = $consumption_amount;
         $this->apiParas["consumption_amount"] = $consumption_amount;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.fnm.award.get";
     }
     public function check()     {          }}
