<?php
class XingeIosMessagePushRequest
{
     private $apiParas = array();

     private $message_loop_times;

     public function getMessageLoopTimes()
     {
         return $this->$message_loop_times;
     }

     public function setMessageLoopTimes($message_loop_times)
     {
         $this->message_loop_times = $message_loop_times;
         $this->apiParas["message_loop_times"] = $message_loop_times;
     }

     private $message_send_time;

     public function getMessageSendTime()
     {
         return $this->$message_send_time;
     }

     public function setMessageSendTime($message_send_time)
     {
         $this->message_send_time = $message_send_time;
         $this->apiParas["message_send_time"] = $message_send_time;
     }

     private $message_custom;

     public function getMessageCustom()
     {
         return $this->$message_custom;
     }

     public function setMessageCustom($message_custom)
     {
         $this->message_custom = $message_custom;
         $this->apiParas["message_custom"] = $message_custom;
     }

     private $account;

     public function getAccount()
     {
         return $this->$account;
     }

     public function setAccount($account)
     {
         $this->account = $account;
         $this->apiParas["account"] = $account;
     }

     private $message_alert;

     public function getMessageAlert()
     {
         return $this->$message_alert;
     }

     public function setMessageAlert($message_alert)
     {
         $this->message_alert = $message_alert;
         $this->apiParas["message_alert"] = $message_alert;
     }

     private $message_acceptime_end_hour;

     public function getMessageAcceptimeEndHour()
     {
         return $this->$message_acceptime_end_hour;
     }

     public function setMessageAcceptimeEndHour($message_acceptime_end_hour)
     {
         $this->message_acceptime_end_hour = $message_acceptime_end_hour;
         $this->apiParas["message_acceptime_end_hour"] = $message_acceptime_end_hour;
     }

     private $message_expire_time;

     public function getMessageExpireTime()
     {
         return $this->$message_expire_time;
     }

     public function setMessageExpireTime($message_expire_time)
     {
         $this->message_expire_time = $message_expire_time;
         $this->apiParas["message_expire_time"] = $message_expire_time;
     }

     private $message_acceptime_start_hour;

     public function getMessageAcceptimeStartHour()
     {
         return $this->$message_acceptime_start_hour;
     }

     public function setMessageAcceptimeStartHour($message_acceptime_start_hour)
     {
         $this->message_acceptime_start_hour = $message_acceptime_start_hour;
         $this->apiParas["message_acceptime_start_hour"] = $message_acceptime_start_hour;
     }

     private $tag_value;

     public function getTagValue()
     {
         return $this->$tag_value;
     }

     public function setTagValue($tag_value)
     {
         $this->tag_value = $tag_value;
         $this->apiParas["tag_value"] = $tag_value;
     }

     private $message_badge;

     public function getMessageBadge()
     {
         return $this->$message_badge;
     }

     public function setMessageBadge($message_badge)
     {
         $this->message_badge = $message_badge;
         $this->apiParas["message_badge"] = $message_badge;
     }

     private $access_id;

     public function getAccessId()
     {
         return $this->$access_id;
     }

     public function setAccessId($access_id)
     {
         $this->access_id = $access_id;
         $this->apiParas["access_id"] = $access_id;
     }

     private $device_token;

     public function getDeviceToken()
     {
         return $this->$device_token;
     }

     public function setDeviceToken($device_token)
     {
         $this->device_token = $device_token;
         $this->apiParas["device_token"] = $device_token;
     }

     private $message_acceptime_start_min;

     public function getMessageAcceptimeStartMin()
     {
         return $this->$message_acceptime_start_min;
     }

     public function setMessageAcceptimeStartMin($message_acceptime_start_min)
     {
         $this->message_acceptime_start_min = $message_acceptime_start_min;
         $this->apiParas["message_acceptime_start_min"] = $message_acceptime_start_min;
     }

     private $message_sound;

     public function getMessageSound()
     {
         return $this->$message_sound;
     }

     public function setMessageSound($message_sound)
     {
         $this->message_sound = $message_sound;
         $this->apiParas["message_sound"] = $message_sound;
     }

     private $message_acceptime_end_min;

     public function getMessageAcceptimeEndMin()
     {
         return $this->$message_acceptime_end_min;
     }

     public function setMessageAcceptimeEndMin($message_acceptime_end_min)
     {
         $this->message_acceptime_end_min = $message_acceptime_end_min;
         $this->apiParas["message_acceptime_end_min"] = $message_acceptime_end_min;
     }

     private $secret_key;

     public function getSecretKey()
     {
         return $this->$secret_key;
     }

     public function setSecretKey($secret_key)
     {
         $this->secret_key = $secret_key;
         $this->apiParas["secret_key"] = $secret_key;
     }

     private $tag_op;

     public function getTagOp()
     {
         return $this->$tag_op;
     }

     public function setTagOp($tag_op)
     {
         $this->tag_op = $tag_op;
         $this->apiParas["tag_op"] = $tag_op;
     }

     private $environment;

     public function getEnvironment()
     {
         return $this->$environment;
     }

     public function setEnvironment($environment)
     {
         $this->environment = $environment;
         $this->apiParas["environment"] = $environment;
     }

     private $message_loop_interval;

     public function getMessageLoopInterval()
     {
         return $this->$message_loop_interval;
     }

     public function setMessageLoopInterval($message_loop_interval)
     {
         $this->message_loop_interval = $message_loop_interval;
         $this->apiParas["message_loop_interval"] = $message_loop_interval;
     }

     private $message_category;

     public function getMessageCategory()
     {
         return $this->$message_category;
     }

     public function setMessageCategory($message_category)
     {
         $this->message_category = $message_category;
         $this->apiParas["message_category"] = $message_category;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.xinge.ios.message.push";
     }
     public function check()     {          }}
