<?php
class RopIsvStatisticsGetRequest
{
     private $apiParas = array();

     private $end_date;

     public function getEndDate()
     {
         return $this->$end_date;
     }

     public function setEndDate($end_date)
     {
         $this->end_date = $end_date;
         $this->apiParas["end_date"] = $end_date;
     }

     private $sandbox_type;

     public function getSandboxType()
     {
         return $this->$sandbox_type;
     }

     public function setSandboxType($sandbox_type)
     {
         $this->sandbox_type = $sandbox_type;
         $this->apiParas["sandbox_type"] = $sandbox_type;
     }

     private $isv_app_key;

     public function getIsvAppKey()
     {
         return $this->$isv_app_key;
     }

     public function setIsvAppKey($isv_app_key)
     {
         $this->isv_app_key = $isv_app_key;
         $this->apiParas["isv_app_key"] = $isv_app_key;
     }

     private $start_date;

     public function getStartDate()
     {
         return $this->$start_date;
     }

     public function setStartDate($start_date)
     {
         $this->start_date = $start_date;
         $this->apiParas["start_date"] = $start_date;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.rop.isv.statistics.get";
     }
     public function check()     {          }}
