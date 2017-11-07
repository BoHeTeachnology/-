<?php
class JrdWechatUnbindweixinRequest
{
     private $apiParas = array();

     private $verifycode;

     public function getVerifycode()
     {
         return $this->$verifycode;
     }

     public function setVerifycode($verifycode)
     {
         $this->verifycode = $verifycode;
         $this->apiParas["verifycode"] = $verifycode;
     }

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

     private $passwd;

     public function getPasswd()
     {
         return $this->$passwd;
     }

     public function setPasswd($passwd)
     {
         $this->passwd = $passwd;
         $this->apiParas["passwd"] = $passwd;
     }

     private $openid;

     public function getOpenid()
     {
         return $this->$openid;
     }

     public function setOpenid($openid)
     {
         $this->openid = $openid;
         $this->apiParas["openid"] = $openid;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.jrd.wechat.unbindweixin";
     }
     public function check()     {          }}
