<?php
class TestSxhMimlRequest
{
     private $apiParas = array();

     private $fads;

     public function getFads()
     {
         return $this->$fads;
     }

     public function setFads($fads)
     {
         $this->fads = $fads;
         $this->apiParas["fads"] = $fads;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.test.sxh.miml";
     }
     public function check()     {          }}
