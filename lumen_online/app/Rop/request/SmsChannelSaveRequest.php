<?php
class SmsChannelSaveRequest
{
     private $apiParas = array();

     private $test;

     public function getTest()
     {
         return $this->$test;
     }

     public function setTest($test)
     {
         $this->test = $test;
         $this->apiParas["test"] = $test;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.sms.channel.save";
     }
     public function check()     {          }}
