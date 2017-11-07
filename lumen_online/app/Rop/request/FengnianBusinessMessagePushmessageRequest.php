<?php
class FengnianBusinessMessagePushmessageRequest
{
     private $apiParas = array();

     private $title;

     public function getTitle()
     {
         return $this->$title;
     }

     public function setTitle($title)
     {
         $this->title = $title;
         $this->apiParas["title"] = $title;
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

     private $message_typy;

     public function getMessageTypy()
     {
         return $this->$message_typy;
     }

     public function setMessageTypy($message_typy)
     {
         $this->message_typy = $message_typy;
         $this->apiParas["message_typy"] = $message_typy;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.business.message.pushmessage";
     }
     public function check()     {          }}
