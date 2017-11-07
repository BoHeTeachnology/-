<?php
class XingeTimingCancelRequest
{
     private $apiParas = array();

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

     private $push_id;

     public function getPushId()
     {
         return $this->$push_id;
     }

     public function setPushId($push_id)
     {
         $this->push_id = $push_id;
         $this->apiParas["push_id"] = $push_id;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.xinge.timing.cancel";
     }
     public function check()     {          }}
