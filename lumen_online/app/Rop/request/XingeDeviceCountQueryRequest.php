<?php
class XingeDeviceCountQueryRequest
{
     private $apiParas = array();

     private $tag;

     public function getTag()
     {
         return $this->$tag;
     }

     public function setTag($tag)
     {
         $this->tag = $tag;
         $this->apiParas["tag"] = $tag;
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
         return "ruixue.xinge.device.count.query";
     }
     public function check()     {          }}
