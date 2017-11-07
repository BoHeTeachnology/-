<?php
class FengnianFnmFeedbackInsertRequest
{
     private $apiParas = array();

     private $feedback_content;

     public function getFeedbackContent()
     {
         return $this->$feedback_content;
     }

     public function setFeedbackContent($feedback_content)
     {
         $this->feedback_content = $feedback_content;
         $this->apiParas["feedback_content"] = $feedback_content;
     }

     private $feedback_tater;

     public function getFeedbackTater()
     {
         return $this->$feedback_tater;
     }

     public function setFeedbackTater($feedback_tater)
     {
         $this->feedback_tater = $feedback_tater;
         $this->apiParas["feedback_tater"] = $feedback_tater;
     }

     private $feedback_title;

     public function getFeedbackTitle()
     {
         return $this->$feedback_title;
     }

     public function setFeedbackTitle($feedback_title)
     {
         $this->feedback_title = $feedback_title;
         $this->apiParas["feedback_title"] = $feedback_title;
     }

     private $feedback_source;

     public function getFeedbackSource()
     {
         return $this->$feedback_source;
     }

     public function setFeedbackSource($feedback_source)
     {
         $this->feedback_source = $feedback_source;
         $this->apiParas["feedback_source"] = $feedback_source;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.fnm.feedback.insert";
     }
     public function check()     {          }}
