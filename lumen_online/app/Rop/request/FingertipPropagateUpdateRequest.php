<?php
class FingertipPropagateUpdateRequest
{
     private $apiParas = array();

     private $propagates;

     public function getPropagates()
     {
         return $this->$propagates;
     }

     public function setPropagates($propagates)
     {
         $this->propagates = $propagates;
         $this->apiParas["propagates"] = $propagates;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fingertip.propagate.update";
     }
     public function check()     {          }}
