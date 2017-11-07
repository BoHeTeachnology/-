<?php
class XingeBatchTagDelRequest
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

     private $tag_token;

     public function getTagToken()
     {
         return $this->$tag_token;
     }

     public function setTagToken($tag_token)
     {
         $this->tag_token = $tag_token;
         $this->apiParas["tag_token"] = $tag_token;
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
         return "ruixue.xinge.batch.tag.del";
     }
     public function check()     {          }}
