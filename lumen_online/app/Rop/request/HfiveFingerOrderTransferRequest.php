<?php
class HfiveFingerOrderTransferRequest
{
     private $apiParas = array();

     private $json;

     public function getJson()
     {
         return $this->$json;
     }

     public function setJson($json)
     {
         $this->json = $json;
         $this->apiParas["json"] = $json;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.finger.order.transfer";
     }
     public function check()     {          }}
