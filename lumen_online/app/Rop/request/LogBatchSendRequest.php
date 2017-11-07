<?php
class LogBatchSendRequest
{
     private $apiParas = array();

     private $log_details;

     public function getLogDetails()
     {
         return $this->$log_details;
     }

     public function setLogDetails($log_details)
     {
         $this->log_details = $log_details;
         $this->apiParas["log_details"] = $log_details;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.log.batch.send";
     }
     public function check()     {          }}
