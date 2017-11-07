<?php
class FengnianAhpFinanceStatisticsConsumeRequest
{
     private $apiParas = array();

     private $month;

     public function getMonth()
     {
         return $this->$month;
     }

     public function setMonth($month)
     {
         $this->month = $month;
         $this->apiParas["month"] = $month;
     }

     private $user_id;

     public function getUserId()
     {
         return $this->$user_id;
     }

     public function setUserId($user_id)
     {
         $this->user_id = $user_id;
         $this->apiParas["user_id"] = $user_id;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.ahp.finance.statistics.consume";
     }
     public function check()     {          }}
