<?php
class XvpWxConfiggetRequest
{
     private $apiParas = array();

     private $base_url;

     public function getBaseUrl()
     {
         return $this->$base_url;
     }

     public function setBaseUrl($base_url)
     {
         $this->base_url = $base_url;
         $this->apiParas["base_url"] = $base_url;
     }

     private $app_id;

     public function getAppId()
     {
         return $this->$app_id;
     }

     public function setAppId($app_id)
     {
         $this->app_id = $app_id;
         $this->apiParas["app_id"] = $app_id;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.xvp.wx.configget";
     }
     public function check()     {          }}
