<?php
class FengnianCouponTicketDetailRequest
{
     private $apiParas = array();

     private $ticketid;

     public function getTicketid()
     {
         return $this->$ticketid;
     }

     public function setTicketid($ticketid)
     {
         $this->ticketid = $ticketid;
         $this->apiParas["ticketid"] = $ticketid;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.coupon.ticket.detail";
     }
     public function check()     {          }}
