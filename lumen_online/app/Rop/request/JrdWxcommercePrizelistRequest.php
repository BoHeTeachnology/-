<?php
class JrdWxcommercePrizelistRequest
{
     private $apiParas = array();

     private $channel;

     public function getChannel()
     {
         return $this->$channel;
     }

     public function setChannel($channel)
     {
         $this->channel = $channel;
         $this->apiParas["channel"] = $channel;
     }

     private $openid;

     public function getOpenid()
     {
         return $this->$openid;
     }

     public function setOpenid($openid)
     {
         $this->openid = $openid;
         $this->apiParas["openid"] = $openid;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.jrd.wxcommerce.prizelist";
     }
     public function check()     {          }}
