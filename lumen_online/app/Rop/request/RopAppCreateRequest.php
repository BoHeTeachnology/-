<?php
class RopAppCreateRequest
{
     private $apiParas = array();

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
         return "ruixue.rop.app.create";
     }
     public function check()     {          }}
