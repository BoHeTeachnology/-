<?php
class WheatfieldCheckstandTestRequest
{
     private $apiParas = array();

     private $orderno;

     public function getOrderno()
     {
         return $this->$orderno;
     }

     public function setOrderno($orderno)
     {
         $this->orderno = $orderno;
         $this->apiParas["orderno"] = $orderno;
     }

     private $busicode;

     public function getBusicode()
     {
         return $this->$busicode;
     }

     public function setBusicode($busicode)
     {
         $this->busicode = $busicode;
         $this->apiParas["busicode"] = $busicode;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.checkstand.test";
     }
     public function check()     {          }}
