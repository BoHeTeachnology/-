<?php
class TestSxhRelaxRequest
{
     private $apiParas = array();

     private $fda;

     public function getFda()
     {
         return $this->$fda;
     }

     public function setFda($fda)
     {
         $this->fda = $fda;
         $this->apiParas["fda"] = $fda;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.test.sxh.relax";
     }
     public function check()     {          }}
