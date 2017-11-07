<?php
class SmsNoteSendRequest
{
     private $apiParas = array();

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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.sms.note.send";
     }
     public function check()     {          }}
