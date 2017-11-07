<?php
class FengnianBusinessBooklistGetdetailinfoRequest
{
     private $apiParas = array();

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

     private $telno;

     public function getTelno()
     {
         return $this->$telno;
     }

     public function setTelno($telno)
     {
         $this->telno = $telno;
         $this->apiParas["telno"] = $telno;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.business.booklist.getdetailinfo";
     }
     public function check()     {          }}
