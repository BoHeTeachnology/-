<?php
class HandlecarWechatbVehicleGetRequest
{
     private $apiParas = array();

     private $mcid;

     public function getMcid()
     {
         return $this->$mcid;
     }

     public function setMcid($mcid)
     {
         $this->mcid = $mcid;
         $this->apiParas["mcid"] = $mcid;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.handlecar.wechatb.vehicle.get";
     }
     public function check()     {          }}
