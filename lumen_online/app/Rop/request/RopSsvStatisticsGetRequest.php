<?php
class RopSsvStatisticsGetRequest
{
     private $apiParas = array();

     private $user_code;

     public function getUserCode()
     {
         return $this->$user_code;
     }

     public function setUserCode($user_code)
     {
         $this->user_code = $user_code;
         $this->apiParas["user_code"] = $user_code;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.rop.ssv.statistics.get";
     }
     public function check()     {          }}
