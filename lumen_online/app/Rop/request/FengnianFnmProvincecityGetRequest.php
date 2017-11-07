<?php
class FengnianFnmProvincecityGetRequest
{
     private $apiParas = array();

     private $regionid;

     public function getRegionid()
     {
         return $this->$regionid;
     }

     public function setRegionid($regionid)
     {
         $this->regionid = $regionid;
         $this->apiParas["regionid"] = $regionid;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.fnm.provincecity.get";
     }
     public function check()     {          }}
