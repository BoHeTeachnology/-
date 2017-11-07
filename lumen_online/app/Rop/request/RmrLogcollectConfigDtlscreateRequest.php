<?php
class RmrLogcollectConfigDtlscreateRequest
{
     private $apiParas = array();

     private $log_sample;

     public function getLogSample()
     {
         return $this->$log_sample;
     }

     public function setLogSample($log_sample)
     {
         $this->log_sample = $log_sample;
         $this->apiParas["log_sample"] = $log_sample;
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

     private $key_value_seperator;

     public function getKeyValueSeperator()
     {
         return $this->$key_value_seperator;
     }

     public function setKeyValueSeperator($key_value_seperator)
     {
         $this->key_value_seperator = $key_value_seperator;
         $this->apiParas["key_value_seperator"] = $key_value_seperator;
     }

     private $business_rule;

     public function getBusinessRule()
     {
         return $this->$business_rule;
     }

     public function setBusinessRule($business_rule)
     {
         $this->business_rule = $business_rule;
         $this->apiParas["business_rule"] = $business_rule;
     }

     private $collect_format;

     public function getCollectFormat()
     {
         return $this->$collect_format;
     }

     public function setCollectFormat($collect_format)
     {
         $this->collect_format = $collect_format;
         $this->apiParas["collect_format"] = $collect_format;
     }

     private $seperator;

     public function getSeperator()
     {
         return $this->$seperator;
     }

     public function setSeperator($seperator)
     {
         $this->seperator = $seperator;
         $this->apiParas["seperator"] = $seperator;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.rmr.logcollect.config.dtlscreate";
     }
     public function check()     {          }}
