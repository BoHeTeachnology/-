<?php
class HoneycombHrbasetestGetRequest
{
     private $apiParas = array();

     private $realname;

     public function getRealname()
     {
         return $this->$realname;
     }

     public function setRealname($realname)
     {
         $this->realname = $realname;
         $this->apiParas["realname"] = $realname;
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
         return "ruixue.honeycomb.hrbasetest.get";
     }
     public function check()     {          }}
