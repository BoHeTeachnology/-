<?php
class FengnianCouponTicketUserquerypageRequest
{
     private $apiParas = array();

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
         return "ruixue.fengnian.coupon.ticket.userquerypage";
     }
     public function check()     {          }}
