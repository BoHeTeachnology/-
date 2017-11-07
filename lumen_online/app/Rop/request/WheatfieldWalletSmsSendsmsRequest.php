<?php
class WheatfieldWalletSmsSendsmsRequest
{
     private $apiParas = array();

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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.wallet.sms.sendsms";
     }
     public function check()     {          }}
