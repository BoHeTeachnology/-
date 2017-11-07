<?php
class WheatfieldInterestepaymentQueryRequest
{
     private $apiParas = array();

     private $orderid;

     public function getOrderid()
     {
         return $this->$orderid;
     }

     public function setOrderid($orderid)
     {
         $this->orderid = $orderid;
         $this->apiParas["orderid"] = $orderid;
     }

     private $interid;

     public function getInterid()
     {
         return $this->$interid;
     }

     public function setInterid($interid)
     {
         $this->interid = $interid;
         $this->apiParas["interid"] = $interid;
     }

     private $statusid;

     public function getStatusid()
     {
         return $this->$statusid;
     }

     public function setStatusid($statusid)
     {
         $this->statusid = $statusid;
         $this->apiParas["statusid"] = $statusid;
     }

     private $overdueflag;

     public function getOverdueflag()
     {
         return $this->$overdueflag;
     }

     public function setOverdueflag($overdueflag)
     {
         $this->overdueflag = $overdueflag;
         $this->apiParas["overdueflag"] = $overdueflag;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.interestepayment.query";
     }
     public function check()     {          }}
