<?php
class HoneycombHrincomescoreGetRequest
{
     private $apiParas = array();

     private $name;

     public function getName()
     {
         return $this->$name;
     }

     public function setName($name)
     {
         $this->name = $name;
         $this->apiParas["name"] = $name;
     }

     private $mobilephone;

     public function getMobilephone()
     {
         return $this->$mobilephone;
     }

     public function setMobilephone($mobilephone)
     {
         $this->mobilephone = $mobilephone;
         $this->apiParas["mobilephone"] = $mobilephone;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.honeycomb.hrincomescore.get";
     }
     public function check()     {          }}
