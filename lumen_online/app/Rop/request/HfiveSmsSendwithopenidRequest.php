<?php
class HfiveSmsSendwithopenidRequest
{
     private $apiParas = array();

     private $open_id;

     public function getOpenId()
     {
         return $this->$open_id;
     }

     public function setOpenId($open_id)
     {
         $this->open_id = $open_id;
         $this->apiParas["open_id"] = $open_id;
     }

     private $channel_code;

     public function getChannelCode()
     {
         return $this->$channel_code;
     }

     public function setChannelCode($channel_code)
     {
         $this->channel_code = $channel_code;
         $this->apiParas["channel_code"] = $channel_code;
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

     private $append_code;

     public function getAppendCode()
     {
         return $this->$append_code;
     }

     public function setAppendCode($append_code)
     {
         $this->append_code = $append_code;
         $this->apiParas["append_code"] = $append_code;
     }

     private $content;

     public function getContent()
     {
         return $this->$content;
     }

     public function setContent($content)
     {
         $this->content = $content;
         $this->apiParas["content"] = $content;
     }

     private $expire_time;

     public function getExpireTime()
     {
         return $this->$expire_time;
     }

     public function setExpireTime($expire_time)
     {
         $this->expire_time = $expire_time;
         $this->apiParas["expire_time"] = $expire_time;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.sms.sendwithopenid";
     }
     public function check()     {          }}
