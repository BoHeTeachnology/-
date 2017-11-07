<?php
class JrdWechatUserregisterRequest
{
     private $apiParas = array();

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

     private $mobile;

     public function getMobile()
     {
         return $this->$mobile;
     }

     public function setMobile($mobile)
     {
         $this->mobile = $mobile;
         $this->apiParas["mobile"] = $mobile;
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

     private $promcode;

     public function getPromcode()
     {
         return $this->$promcode;
     }

     public function setPromcode($promcode)
     {
         $this->promcode = $promcode;
         $this->apiParas["promcode"] = $promcode;
     }

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

     private $codeid;

     public function getCodeid()
     {
         return $this->$codeid;
     }

     public function setCodeid($codeid)
     {
         $this->codeid = $codeid;
         $this->apiParas["codeid"] = $codeid;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.jrd.wechat.userregister";
     }
     public function check()     {          }}
