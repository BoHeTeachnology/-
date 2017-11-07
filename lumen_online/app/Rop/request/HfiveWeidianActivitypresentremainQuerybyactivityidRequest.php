<?php
class HfiveWeidianActivitypresentremainQuerybyactivityidRequest
{
     private $apiParas = array();

     private $activity_id;

     public function getActivityId()
     {
         return $this->$activity_id;
     }

     public function setActivityId($activity_id)
     {
         $this->activity_id = $activity_id;
         $this->apiParas["activity_id"] = $activity_id;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.weidian.activitypresentremain.querybyactivityid";
     }
     public function check()     {          }}
