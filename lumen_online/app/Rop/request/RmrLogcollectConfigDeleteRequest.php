<?php
class RmrLogcollectConfigDeleteRequest
{
     private $apiParas = array();

     private $log_config_code;

     public function getLogConfigCode()
     {
         return $this->$log_config_code;
     }

     public function setLogConfigCode($log_config_code)
     {
         $this->log_config_code = $log_config_code;
         $this->apiParas["log_config_code"] = $log_config_code;
     }

     private $user_key;

     public function getUserKey()
     {
         return $this->$user_key;
     }

     public function setUserKey($user_key)
     {
         $this->user_key = $user_key;
         $this->apiParas["user_key"] = $user_key;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.rmr.logcollect.config.delete";
     }
     public function check()     {          }}
