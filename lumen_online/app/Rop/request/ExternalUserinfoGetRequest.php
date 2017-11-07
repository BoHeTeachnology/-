<?php
class ExternalUserinfoGetRequest
{
     private $apiParas = array();

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
         return "ruixue.external.userinfo.get";
     }
     public function check()     {          }}
