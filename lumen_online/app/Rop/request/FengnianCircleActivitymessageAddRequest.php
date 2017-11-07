<?php
class FengnianCircleActivitymessageAddRequest
{
     private $apiParas = array();

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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.circle.activitymessage.add";
     }
     public function check()     {          }}
