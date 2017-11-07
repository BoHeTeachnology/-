<?php
class WheatfieldWalletSmsSendsmssettimeRequest
{
     private $apiParas = array();

     private $code;

     public function getCode()
     {
         return $this->$code;
     }

     public function setCode($code)
     {
         $this->code = $code;
         $this->apiParas["code"] = $code;
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

     private $telnum;

     public function getTelnum()
     {
         return $this->$telnum;
     }

     public function setTelnum($telnum)
     {
         $this->telnum = $telnum;
         $this->apiParas["telnum"] = $telnum;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.wallet.sms.sendsmssettime";
     }
     public function check()     {          }}
