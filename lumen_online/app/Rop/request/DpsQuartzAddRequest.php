<?php
class DpsQuartzAddRequest
{
     private $apiParas = array();

     private $user_token;

     public function getUserToken()
     {
         return $this->$user_token;
     }

     public function setUserToken($user_token)
     {
         $this->user_token = $user_token;
         $this->apiParas["user_token"] = $user_token;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.dps.quartz.add";
     }
     public function check()     {          }}
