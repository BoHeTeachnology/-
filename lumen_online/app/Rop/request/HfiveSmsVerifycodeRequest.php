<?php
class HfiveSmsVerifycodeRequest
{
     private $apiParas = array();

     private $send_code;

     public function getSendCode()
     {
         return $this->$send_code;
     }

     public function setSendCode($send_code)
     {
         $this->send_code = $send_code;
         $this->apiParas["send_code"] = $send_code;
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

     private $mobile;

     public function getMobile()
     {
         return $this->$mobile;
     }

     public function setMobile($mobile)
     {
         $this->mobile = $mobile;
         $this->apiParas["mobile"] = $mobile;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.sms.verifycode";
     }
     public function check()     {          }}
