<?php
class FengnianCircleMessagePushRequest
{
     private $apiParas = array();

     private $money;

     public function getMoney()
     {
         return $this->$money;
     }

     public function setMoney($money)
     {
         $this->money = $money;
         $this->apiParas["money"] = $money;
     }

     private $message_type;

     public function getMessageType()
     {
         return $this->$message_type;
     }

     public function setMessageType($message_type)
     {
         $this->message_type = $message_type;
         $this->apiParas["message_type"] = $message_type;
     }

     private $user_id;

     public function getUserId()
     {
         return $this->$user_id;
     }

     public function setUserId($user_id)
     {
         $this->user_id = $user_id;
         $this->apiParas["user_id"] = $user_id;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.circle.message.push";
     }
     public function check()     {          }}
