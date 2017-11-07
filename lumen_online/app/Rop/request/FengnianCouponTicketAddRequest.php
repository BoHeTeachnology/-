<?php
class FengnianCouponTicketAddRequest
{
     private $apiParas = array();

     private $endtime;

     public function getEndtime()
     {
         return $this->$endtime;
     }

     public function setEndtime($endtime)
     {
         $this->endtime = $endtime;
         $this->apiParas["endtime"] = $endtime;
     }

     private $tickettype;

     public function getTickettype()
     {
         return $this->$tickettype;
     }

     public function setTickettype($tickettype)
     {
         $this->tickettype = $tickettype;
         $this->apiParas["tickettype"] = $tickettype;
     }

     private $tenantname;

     public function getTenantname()
     {
         return $this->$tenantname;
     }

     public function setTenantname($tenantname)
     {
         $this->tenantname = $tenantname;
         $this->apiParas["tenantname"] = $tenantname;
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

     private $imgurl;

     public function getImgurl()
     {
         return $this->$imgurl;
     }

     public function setImgurl($imgurl)
     {
         $this->imgurl = $imgurl;
         $this->apiParas["imgurl"] = $imgurl;
     }

     private $ticketunitprice;

     public function getTicketunitprice()
     {
         return $this->$ticketunitprice;
     }

     public function setTicketunitprice($ticketunitprice)
     {
         $this->ticketunitprice = $ticketunitprice;
         $this->apiParas["ticketunitprice"] = $ticketunitprice;
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

     private $starttime;

     public function getStarttime()
     {
         return $this->$starttime;
     }

     public function setStarttime($starttime)
     {
         $this->starttime = $starttime;
         $this->apiParas["starttime"] = $starttime;
     }

     private $ticketoriginnum;

     public function getTicketoriginnum()
     {
         return $this->$ticketoriginnum;
     }

     public function setTicketoriginnum($ticketoriginnum)
     {
         $this->ticketoriginnum = $ticketoriginnum;
         $this->apiParas["ticketoriginnum"] = $ticketoriginnum;
     }

     private $description;

     public function getDescription()
     {
         return $this->$description;
     }

     public function setDescription($description)
     {
         $this->description = $description;
         $this->apiParas["description"] = $description;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.coupon.ticket.add";
     }
     public function check()     {          }}
