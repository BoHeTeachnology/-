<?php
class XvpPhoneVerfiycodeRequest
{
     private $apiParas = array();

     private $verify_code;

     public function getVerifyCode()
     {
         return $this->$verify_code;
     }

     public function setVerifyCode($verify_code)
     {
         $this->verify_code = $verify_code;
         $this->apiParas["verify_code"] = $verify_code;
     }

     private $app_id;

     public function getAppId()
     {
         return $this->$app_id;
     }

     public function setAppId($app_id)
     {
         $this->app_id = $app_id;
         $this->apiParas["app_id"] = $app_id;
     }

     private $sn;

     public function getSn()
     {
         return $this->$sn;
     }

     public function setSn($sn)
     {
         $this->sn = $sn;
         $this->apiParas["sn"] = $sn;
     }

     private $phone;

     public function getPhone()
     {
         return $this->$phone;
     }

     public function setPhone($phone)
     {
         $this->phone = $phone;
         $this->apiParas["phone"] = $phone;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.xvp.phone.verfiycode";
     }
     public function check()     {          }}
