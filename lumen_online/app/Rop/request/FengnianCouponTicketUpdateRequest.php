<?php
class FengnianCouponTicketUpdateRequest
{
     private $apiParas = array();

     private $reason;

     public function getReason()
     {
         return $this->$reason;
     }

     public function setReason($reason)
     {
         $this->reason = $reason;
         $this->apiParas["reason"] = $reason;
     }

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

     private $auditpersonid;

     public function getAuditpersonid()
     {
         return $this->$auditpersonid;
     }

     public function setAuditpersonid($auditpersonid)
     {
         $this->auditpersonid = $auditpersonid;
         $this->apiParas["auditpersonid"] = $auditpersonid;
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
         return "ruixue.fengnian.coupon.ticket.update";
     }
     public function check()     {          }}
