<?php
class WheatfieldUsercenterUserLoginnameexistsRequest
{
     private $apiParas = array();

     private $username;

     public function getUsername()
     {
         return $this->$username;
     }

     public function setUsername($username)
     {
         $this->username = $username;
         $this->apiParas["username"] = $username;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.usercenter.user.loginnameexists";
     }
     public function check()     {          }}
