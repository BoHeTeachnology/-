<?php
class HandlecarWechatbAddworkorderRequest
{
     private $apiParas = array();

     private $poiitemid;

     public function getPoiitemid()
     {
         return $this->$poiitemid;
     }

     public function setPoiitemid($poiitemid)
     {
         $this->poiitemid = $poiitemid;
         $this->apiParas["poiitemid"] = $poiitemid;
     }

     private $poiwoid;

     public function getPoiwoid()
     {
         return $this->$poiwoid;
     }

     public function setPoiwoid($poiwoid)
     {
         $this->poiwoid = $poiwoid;
         $this->apiParas["poiwoid"] = $poiwoid;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.handlecar.wechatb.addworkorder";
     }
     public function check()     {          }}
