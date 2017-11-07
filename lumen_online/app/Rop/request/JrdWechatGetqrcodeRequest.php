<?php
class JrdWechatGetqrcodeRequest
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.jrd.wechat.getqrcode";
     }
     public function check()     {          }}
