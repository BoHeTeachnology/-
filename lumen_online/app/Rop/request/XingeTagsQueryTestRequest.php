<?php
class XingeTagsQueryTestRequest
{
     private $apiParas = array();

     private $access_id;

     public function getAccessId()
     {
         return $this->$access_id;
     }

     public function setAccessId($access_id)
     {
         $this->access_id = $access_id;
         $this->apiParas["access_id"] = $access_id;
     }

     private $start;

     public function getStart()
     {
         return $this->$start;
     }

     public function setStart($start)
     {
         $this->start = $start;
         $this->apiParas["start"] = $start;
     }

     private $secret_key;

     public function getSecretKey()
     {
         return $this->$secret_key;
     }

     public function setSecretKey($secret_key)
     {
         $this->secret_key = $secret_key;
         $this->apiParas["secret_key"] = $secret_key;
     }

     private $limit;

     public function getLimit()
     {
         return $this->$limit;
     }

     public function setLimit($limit)
     {
         $this->limit = $limit;
         $this->apiParas["limit"] = $limit;
     }

     private $device_token;

     public function getDeviceToken()
     {
         return $this->$device_token;
     }

     public function setDeviceToken($device_token)
     {
         $this->device_token = $device_token;
         $this->apiParas["device_token"] = $device_token;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.xinge.tags.query.test";
     }
     public function check()     {          }}
