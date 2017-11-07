<?php
class FengnianCouponTicketExchangeRequest
{
     private $apiParas = array();

     private $status;

     public function getStatus()
     {
         return $this->$status;
     }

     public function setStatus($status)
     {
         $this->status = $status;
         $this->apiParas["status"] = $status;
     }

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

     private $username;

     public function getUsername()
     {
         return $this->$username;
     }

     public function setUsername($username)
     {
         $this->username = $username;
         $this->apiParas["username"] = $username;
     }

     private $belongid;

     public function getBelongid()
     {
         return $this->$belongid;
     }

     public function setBelongid($belongid)
     {
         $this->belongid = $belongid;
         $this->apiParas["belongid"] = $belongid;
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
         return "ruixue.fengnian.coupon.ticket.exchange";
     }
     public function check()     {          }}
