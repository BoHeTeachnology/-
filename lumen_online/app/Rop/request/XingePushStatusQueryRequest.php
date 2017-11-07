<?php
class XingePushStatusQueryRequest
{
     private $apiParas = array();

     private $push_ids;

     public function getPushIds()
     {
         return $this->$push_ids;
     }

     public function setPushIds($push_ids)
     {
         $this->push_ids = $push_ids;
         $this->apiParas["push_ids"] = $push_ids;
     }

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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.xinge.push.status.query";
     }
     public function check()     {          }}
