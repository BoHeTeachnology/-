<?php
class WheatfieldEarlyrepaymentQueryRequest
{
     private $apiParas = array();

     private $rootinstid;

     public function getRootinstid()
     {
         return $this->$rootinstid;
     }

     public function setRootinstid($rootinstid)
     {
         $this->rootinstid = $rootinstid;
         $this->apiParas["rootinstid"] = $rootinstid;
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

     private $userorderid;

     public function getUserorderid()
     {
         return $this->$userorderid;
     }

     public function setUserorderid($userorderid)
     {
         $this->userorderid = $userorderid;
         $this->apiParas["userorderid"] = $userorderid;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.earlyrepayment.query";
     }
     public function check()     {          }}
