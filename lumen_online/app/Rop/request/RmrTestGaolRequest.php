<?php
class RmrTestGaolRequest
{
     private $apiParas = array();

     private $a;

     public function getA()
     {
         return $this->$a;
     }

     public function setA($a)
     {
         $this->a = $a;
         $this->apiParas["a"] = $a;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.rmr.test.gaol";
     }
     public function check()     {          }}
