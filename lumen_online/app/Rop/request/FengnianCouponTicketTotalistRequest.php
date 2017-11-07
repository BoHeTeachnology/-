<?php
class FengnianCouponTicketTotalistRequest
{
     private $apiParas = array();

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
         return "ruixue.fengnian.coupon.ticket.totalist";
     }
     public function check()     {          }}
