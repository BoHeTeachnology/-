<?php
class RmrRapidInvisibilityMessageRequest
{
     private $apiParas = array();

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

     private $user_account;

     public function getUserAccount()
     {
         return $this->$user_account;
     }

     public function setUserAccount($user_account)
     {
         $this->user_account = $user_account;
         $this->apiParas["user_account"] = $user_account;
     }

     private $message;

     public function getMessage()
     {
         return $this->$message;
     }

     public function setMessage($message)
     {
         $this->message = $message;
         $this->apiParas["message"] = $message;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.rmr.rapid.invisibility.message";
     }
     public function check()     {          }}
