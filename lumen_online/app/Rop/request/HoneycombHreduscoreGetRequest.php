<?php
class HoneycombHreduscoreGetRequest
{
     private $apiParas = array();

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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.honeycomb.hreduscore.get";
     }
     public function check()     {          }}
