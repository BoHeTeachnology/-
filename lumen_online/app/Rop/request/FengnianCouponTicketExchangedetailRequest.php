<?php
class FengnianCouponTicketExchangedetailRequest
{
     private $apiParas = array();

     private $userticketid;

     public function getUserticketid()
     {
         return $this->$userticketid;
     }

     public function setUserticketid($userticketid)
     {
         $this->userticketid = $userticketid;
         $this->apiParas["userticketid"] = $userticketid;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.coupon.ticket.exchangedetail";
     }
     public function check()     {          }}
