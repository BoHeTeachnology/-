<?php
class FengnianCouponTicketDaymoneyofmonthRequest
{
     private $apiParas = array();

     private $userid;

     public function getUserid()
     {
         return $this->$userid;
     }

     public function setUserid($userid)
     {
         $this->userid = $userid;
         $this->apiParas["userid"] = $userid;
     }

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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.coupon.ticket.daymoneyofmonth";
     }
     public function check()     {          }}
