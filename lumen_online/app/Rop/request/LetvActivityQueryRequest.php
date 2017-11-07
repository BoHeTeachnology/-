<?php
class LetvActivityQueryRequest
{
     private $apiParas = array();

     private $activity_code;

     public function getActivityCode()
     {
         return $this->$activity_code;
     }

     public function setActivityCode($activity_code)
     {
         $this->activity_code = $activity_code;
         $this->apiParas["activity_code"] = $activity_code;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.letv.activity.query";
     }
     public function check()     {          }}
