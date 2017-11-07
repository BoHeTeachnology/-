<?php
class SmsBalanceGetRequest
{
     private $apiParas = array();

     private $channel_code;

     public function getChannelCode()
     {
         return $this->$channel_code;
     }

     public function setChannelCode($channel_code)
     {
         $this->channel_code = $channel_code;
         $this->apiParas["channel_code"] = $channel_code;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.sms.balance.get";
     }
     public function check()     {          }}
