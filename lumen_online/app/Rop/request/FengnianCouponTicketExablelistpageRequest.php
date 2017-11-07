<?php
class FengnianCouponTicketExablelistpageRequest
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.coupon.ticket.exablelistpage";
     }
     public function check()     {          }}
