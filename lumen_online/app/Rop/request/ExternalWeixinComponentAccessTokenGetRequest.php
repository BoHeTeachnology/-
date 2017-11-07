<?php
class ExternalWeixinComponentAccessTokenGetRequest
{
     private $apiParas = array();

     private $component_appid;

     public function getComponentAppid()
     {
         return $this->$component_appid;
     }

     public function setComponentAppid($component_appid)
     {
         $this->component_appid = $component_appid;
         $this->apiParas["component_appid"] = $component_appid;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.external.weixin.component.access.token.get";
     }
     public function check()     {          }}
