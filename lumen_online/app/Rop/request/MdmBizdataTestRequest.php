<?php
class MdmBizdataTestRequest
{
     private $apiParas = array();

     private $gd;

     public function getGd()
     {
         return $this->$gd;
     }

     public function setGd($gd)
     {
         $this->gd = $gd;
         $this->apiParas["gd"] = $gd;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.mdm.bizdata.test";
     }
     public function check()     {          }}
