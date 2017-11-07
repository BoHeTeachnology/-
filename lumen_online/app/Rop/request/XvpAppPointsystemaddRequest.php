<?php
class XvpAppPointsystemaddRequest
{
     private $apiParas = array();

     private $sign_key;

     public function getSignKey()
     {
         return $this->$sign_key;
     }

     public function setSignKey($sign_key)
     {
         $this->sign_key = $sign_key;
         $this->apiParas["sign_key"] = $sign_key;
     }

     private $sign_secret;

     public function getSignSecret()
     {
         return $this->$sign_secret;
     }

     public function setSignSecret($sign_secret)
     {
         $this->sign_secret = $sign_secret;
         $this->apiParas["sign_secret"] = $sign_secret;
     }

     private $deduct_point_url;

     public function getDeductPointUrl()
     {
         return $this->$deduct_point_url;
     }

     public function setDeductPointUrl($deduct_point_url)
     {
         $this->deduct_point_url = $deduct_point_url;
         $this->apiParas["deduct_point_url"] = $deduct_point_url;
     }

     private $name;

     public function getName()
     {
         return $this->$name;
     }

     public function setName($name)
     {
         $this->name = $name;
         $this->apiParas["name"] = $name;
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
         return "ruixue.xvp.app.pointsystemadd";
     }
     public function check()     {          }}
