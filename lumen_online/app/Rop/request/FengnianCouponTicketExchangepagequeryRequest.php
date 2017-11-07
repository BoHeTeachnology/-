<?php
class FengnianCouponTicketExchangepagequeryRequest
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

     private $currentpageno;

     public function getCurrentpageno()
     {
         return $this->$currentpageno;
     }

     public function setCurrentpageno($currentpageno)
     {
         $this->currentpageno = $currentpageno;
         $this->apiParas["currentpageno"] = $currentpageno;
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

     private $pagesize;

     public function getPagesize()
     {
         return $this->$pagesize;
     }

     public function setPagesize($pagesize)
     {
         $this->pagesize = $pagesize;
         $this->apiParas["pagesize"] = $pagesize;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.coupon.ticket.exchangepagequery";
     }
     public function check()     {          }}
