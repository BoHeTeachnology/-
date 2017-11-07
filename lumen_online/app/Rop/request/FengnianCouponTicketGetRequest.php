<?php
class FengnianCouponTicketGetRequest
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

     private $tenantid;

     public function getTenantid()
     {
         return $this->$tenantid;
     }

     public function setTenantid($tenantid)
     {
         $this->tenantid = $tenantid;
         $this->apiParas["tenantid"] = $tenantid;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.coupon.ticket.get";
     }
     public function check()     {          }}
