<?php
class ExternalWeixinDatabaseConnectGetRequest
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

     private $weixin_account;

     public function getWeixinAccount()
     {
         return $this->$weixin_account;
     }

     public function setWeixinAccount($weixin_account)
     {
         $this->weixin_account = $weixin_account;
         $this->apiParas["weixin_account"] = $weixin_account;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.external.weixin.database.connect.get";
     }
     public function check()     {          }}
