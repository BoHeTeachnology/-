<?php
class FengnianCouponTicketQueryRequest
{
     private $apiParas = array();

     private $ticketname;

     public function getTicketname()
     {
         return $this->$ticketname;
     }

     public function setTicketname($ticketname)
     {
         $this->ticketname = $ticketname;
         $this->apiParas["ticketname"] = $ticketname;
     }

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
         return "ruixue.fengnian.coupon.ticket.query";
     }
     public function check()     {          }}
