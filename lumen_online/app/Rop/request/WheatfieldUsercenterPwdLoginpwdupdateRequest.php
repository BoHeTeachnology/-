<?php
class WheatfieldUsercenterPwdLoginpwdupdateRequest
{
     private $apiParas = array();

     private $newpwd;

     public function getNewpwd()
     {
         return $this->$newpwd;
     }

     public function setNewpwd($newpwd)
     {
         $this->newpwd = $newpwd;
         $this->apiParas["newpwd"] = $newpwd;
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

     private $userid;

     public function getUserid()
     {
         return $this->$userid;
     }

     public function setUserid($userid)
     {
         $this->userid = $userid;
         $this->apiParas["userid"] = $userid;
     }

     private $token;

     public function getToken()
     {
         return $this->$token;
     }

     public function setToken($token)
     {
         $this->token = $token;
         $this->apiParas["token"] = $token;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.usercenter.pwd.loginpwdupdate";
     }
     public function check()     {          }}
