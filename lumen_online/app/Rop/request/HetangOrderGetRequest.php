<?php
class HetangOrderGetRequest
{
     private $apiParas = array();

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

     private $mobile;

     public function getMobile()
     {
         return $this->$mobile;
     }

     public function setMobile($mobile)
     {
         $this->mobile = $mobile;
         $this->apiParas["mobile"] = $mobile;
     }

     private $min_money;

     public function getMinMoney()
     {
         return $this->$min_money;
     }

     public function setMinMoney($min_money)
     {
         $this->min_money = $min_money;
         $this->apiParas["min_money"] = $min_money;
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
         return "ruixue.hetang.order.get";
     }
     public function check()     {          }}
