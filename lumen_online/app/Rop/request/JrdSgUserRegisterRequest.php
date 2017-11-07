<?php
class JrdSgUserRegisterRequest
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

     private $channelid;

     public function getChannelid()
     {
         return $this->$channelid;
     }

     public function setChannelid($channelid)
     {
         $this->channelid = $channelid;
         $this->apiParas["channelid"] = $channelid;
     }

     private $phone;

     public function getPhone()
     {
         return $this->$phone;
     }

     public function setPhone($phone)
     {
         $this->phone = $phone;
         $this->apiParas["phone"] = $phone;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.jrd.sg.user.register";
     }
     public function check()     {          }}
