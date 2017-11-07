<?php
class HandlecarWechatbServiceorderCancelRequest
{
     private $apiParas = array();

     private $soid;

     public function getSoid()
     {
         return $this->$soid;
     }

     public function setSoid($soid)
     {
         $this->soid = $soid;
         $this->apiParas["soid"] = $soid;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.handlecar.wechatb.serviceorder.cancel";
     }
     public function check()     {          }}
