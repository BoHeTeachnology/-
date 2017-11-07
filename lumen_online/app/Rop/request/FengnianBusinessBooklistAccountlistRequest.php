<?php
class FengnianBusinessBooklistAccountlistRequest
{
     private $apiParas = array();

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

     private $time;

     public function getTime()
     {
         return $this->$time;
     }

     public function setTime($time)
     {
         $this->time = $time;
         $this->apiParas["time"] = $time;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.business.booklist.accountlist";
     }
     public function check()     {          }}
