<?php
class FengnianCouponTicketTotalmoneydayRequest
{
     private $apiParas = array();

     private $date;

     public function getDate()
     {
         return $this->$date;
     }

     public function setDate($date)
     {
         $this->date = $date;
         $this->apiParas["date"] = $date;
     }

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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.coupon.ticket.totalmoneyday";
     }
     public function check()     {          }}
