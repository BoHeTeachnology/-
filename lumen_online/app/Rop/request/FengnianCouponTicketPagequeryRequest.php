<?php
class FengnianCouponTicketPagequeryRequest
{
     private $apiParas = array();

     private $pricerange;

     public function getPricerange()
     {
         return $this->$pricerange;
     }

     public function setPricerange($pricerange)
     {
         $this->pricerange = $pricerange;
         $this->apiParas["pricerange"] = $pricerange;
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

     private $regionflag;

     public function getRegionflag()
     {
         return $this->$regionflag;
     }

     public function setRegionflag($regionflag)
     {
         $this->regionflag = $regionflag;
         $this->apiParas["regionflag"] = $regionflag;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.coupon.ticket.pagequery";
     }
     public function check()     {          }}
