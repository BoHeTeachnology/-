<?php
class WheatfieldUsercenterPwdLoginpwdbacknewRequest
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

     private $pwd;

     public function getPwd()
     {
         return $this->$pwd;
     }

     public function setPwd($pwd)
     {
         $this->pwd = $pwd;
         $this->apiParas["pwd"] = $pwd;
     }

     private $vcode;

     public function getVcode()
     {
         return $this->$vcode;
     }

     public function setVcode($vcode)
     {
         $this->vcode = $vcode;
         $this->apiParas["vcode"] = $vcode;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.usercenter.pwd.loginpwdbacknew";
     }
     public function check()     {          }}
