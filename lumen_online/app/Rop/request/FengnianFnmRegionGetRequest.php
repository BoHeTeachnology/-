<?php
class FengnianFnmRegionGetRequest
{
     private $apiParas = array();

     private $cityid;

     public function getCityid()
     {
         return $this->$cityid;
     }

     public function setCityid($cityid)
     {
         $this->cityid = $cityid;
         $this->apiParas["cityid"] = $cityid;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.fnm.region.get";
     }
     public function check()     {          }}
