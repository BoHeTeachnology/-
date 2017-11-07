<?php
class WheatfieldOrderCreateorderRequest
{
     private $apiParas = array();

     private $requestxml;

     public function getRequestxml()
     {
         return $this->$requestxml;
     }

     public function setRequestxml($requestxml)
     {
         $this->requestxml = $requestxml;
         $this->apiParas["requestxml"] = $requestxml;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.order.createorder";
     }
     public function check()     {          }}
