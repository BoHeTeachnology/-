<?php
class FengnianMobileLoginCheckRequest
{
     private $apiParas = array();

     private $user_pwd;

     public function getUserPwd()
     {
         return $this->$user_pwd;
     }

     public function setUserPwd($user_pwd)
     {
         $this->user_pwd = $user_pwd;
         $this->apiParas["user_pwd"] = $user_pwd;
     }

     private $user_name;

     public function getUserName()
     {
         return $this->$user_name;
     }

     public function setUserName($user_name)
     {
         $this->user_name = $user_name;
         $this->apiParas["user_name"] = $user_name;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.mobile.login.check";
     }
     public function check()     {          }}
