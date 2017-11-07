<?php
class ExternalFailedlogSearchRequest
{
     private $apiParas = array();

     private $endtime;

     public function getEndtime()
     {
         return $this->$endtime;
     }

     public function setEndtime($endtime)
     {
         $this->endtime = $endtime;
         $this->apiParas["endtime"] = $endtime;
     }

     private $begintime;

     public function getBegintime()
     {
         return $this->$begintime;
     }

     public function setBegintime($begintime)
     {
         $this->begintime = $begintime;
         $this->apiParas["begintime"] = $begintime;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.external.failedlog.search";
     }
     public function check()     {          }}
