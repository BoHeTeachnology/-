<?php
class DpsQuartzEditRequest
{
     private $apiParas = array();

     private $user_token;

     public function getUserToken()
     {
         return $this->$user_token;
     }

     public function setUserToken($user_token)
     {
         $this->user_token = $user_token;
         $this->apiParas["user_token"] = $user_token;
     }

     private $dps_post_body_content;

     public function getDpsPostBodyContent()
     {
         return $this->$dps_post_body_content;
     }

     public function setDpsPostBodyContent($dps_post_body_content)
     {
         $this->dps_post_body_content = $dps_post_body_content;
         $this->apiParas["dps_post_body_content"] = $dps_post_body_content;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.dps.quartz.edit";
     }
     public function check()     {          }}
