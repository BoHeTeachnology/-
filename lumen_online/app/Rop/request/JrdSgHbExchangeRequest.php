<?php
class JrdSgHbExchangeRequest
{
     private $apiParas = array();

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

     private $channelid;

     public function getChannelid()
     {
         return $this->$channelid;
     }

     public function setChannelid($channelid)
     {
         $this->channelid = $channelid;
         $this->apiParas["channelid"] = $channelid;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.jrd.sg.hb.exchange";
     }
     public function check()     {          }}
