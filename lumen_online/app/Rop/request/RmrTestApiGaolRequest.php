<?php
class RmrTestApiGaolRequest
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

     private $b;

     public function getB()
     {
         return $this->$b;
     }

     public function setB($b)
     {
         $this->b = $b;
         $this->apiParas["b"] = $b;
     }

     private $c;

     public function getC()
     {
         return $this->$c;
     }

     public function setC($c)
     {
         $this->c = $c;
         $this->apiParas["c"] = $c;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.rmr.test.api.gaol";
     }
     public function check()     {          }}
