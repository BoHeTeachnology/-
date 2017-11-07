<?php
class FengnianCouponTicketChangequeryRequest
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

     private $ticketsourcetype;

     public function getTicketsourcetype()
     {
         return $this->$ticketsourcetype;
     }

     public function setTicketsourcetype($ticketsourcetype)
     {
         $this->ticketsourcetype = $ticketsourcetype;
         $this->apiParas["ticketsourcetype"] = $ticketsourcetype;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.coupon.ticket.changequery";
     }
     public function check()     {          }}
