<?php
class RmrLogcollectConfigSetRequest
{
     private $apiParas = array();

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

     private $row_key;

     public function getRowKey()
     {
         return $this->$row_key;
     }

     public function setRowKey($row_key)
     {
         $this->row_key = $row_key;
         $this->apiParas["row_key"] = $row_key;
     }

     private $row_key_seperator;

     public function getRowKeySeperator()
     {
         return $this->$row_key_seperator;
     }

     public function setRowKeySeperator($row_key_seperator)
     {
         $this->row_key_seperator = $row_key_seperator;
         $this->apiParas["row_key_seperator"] = $row_key_seperator;
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

     private $remark;

     public function getRemark()
     {
         return $this->$remark;
     }

     public function setRemark($remark)
     {
         $this->remark = $remark;
         $this->apiParas["remark"] = $remark;
     }

     private $log_collect_name;

     public function getLogCollectName()
     {
         return $this->$log_collect_name;
     }

     public function setLogCollectName($log_collect_name)
     {
         $this->log_collect_name = $log_collect_name;
         $this->apiParas["log_collect_name"] = $log_collect_name;
     }

     private $dtls;

     public function getDtls()
     {
         return $this->$dtls;
     }

     public function setDtls($dtls)
     {
         $this->dtls = $dtls;
         $this->apiParas["dtls"] = $dtls;
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
         return "ruixue.rmr.logcollect.config.set";
     }
     public function check()     {          }}
