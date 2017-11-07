<?php
class JrdLlllsgHbExchangeRequest
{
     private $apiParas = array();

     private $uid;

     public function getUid()
     {
         return $this->$uid;
     }

     public function setUid($uid)
     {
         $this->uid = $uid;
         $this->apiParas["uid"] = $uid;
     }

     private $hbid;

     public function getHbid()
     {
         return $this->$hbid;
     }

     public function setHbid($hbid)
     {
         $this->hbid = $hbid;
         $this->apiParas["hbid"] = $hbid;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.jrd.llllsg.hb.exchange";
     }
     public function check()     {          }}
