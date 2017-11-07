<?php
class XvpAppAddRequest
{
     private $apiParas = array();

     private $app_description;

     public function getAppDescription()
     {
         return $this->$app_description;
     }

     public function setAppDescription($app_description)
     {
         $this->app_description = $app_description;
         $this->apiParas["app_description"] = $app_description;
     }

     private $app_name;

     public function getAppName()
     {
         return $this->$app_name;
     }

     public function setAppName($app_name)
     {
         $this->app_name = $app_name;
         $this->apiParas["app_name"] = $app_name;
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
         return "ruixue.xvp.app.add";
     }
     public function check()     {          }}
