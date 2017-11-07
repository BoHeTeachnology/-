<?php
class FengnianBusinessMessagePushRequest
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

     private $source;

     public function getSource()
     {
         return $this->$source;
     }

     public function setSource($source)
     {
         $this->source = $source;
         $this->apiParas["source"] = $source;
     }

     private $range;

     public function getRange()
     {
         return $this->$range;
     }

     public function setRange($range)
     {
         $this->range = $range;
         $this->apiParas["range"] = $range;
     }

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

     private $link;

     public function getLink()
     {
         return $this->$link;
     }

     public function setLink($link)
     {
         $this->link = $link;
         $this->apiParas["link"] = $link;
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
         return "ruixue.fengnian.business.message.push";
     }
     public function check()     {          }}
