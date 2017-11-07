<?php
class RopAppKeyResetRequest
{
     private $apiParas = array();

     private $app_code;

     public function getAppCode()
     {
         return $this->$app_code;
     }

     public function setAppCode($app_code)
     {
         $this->app_code = $app_code;
         $this->apiParas["app_code"] = $app_code;
     }

     private $isv_user_account;

     public function getIsvUserAccount()
     {
         return $this->$isv_user_account;
     }

     public function setIsvUserAccount($isv_user_account)
     {
         $this->isv_user_account = $isv_user_account;
         $this->apiParas["isv_user_account"] = $isv_user_account;
     }

     private $reset_type;

     public function getResetType()
     {
         return $this->$reset_type;
     }

     public function setResetType($reset_type)
     {
         $this->reset_type = $reset_type;
         $this->apiParas["reset_type"] = $reset_type;
     }

     private $app_name;

     public function getAppName()
     {
         return $this->$app_name;
     }

     public function setAppName($app_name)
     {
         $this->app_name = $app_name;
         $this->apiParas["app_name"] = $app_name;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.rop.app.key.reset";
     }
     public function check()     {          }}
