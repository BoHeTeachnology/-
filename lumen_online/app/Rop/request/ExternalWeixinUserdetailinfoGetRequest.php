<?php
class ExternalWeixinUserdetailinfoGetRequest
{
     private $apiParas = array();

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

     private $open_id;

     public function getOpenId()
     {
         return $this->$open_id;
     }

     public function setOpenId($open_id)
     {
         $this->open_id = $open_id;
         $this->apiParas["open_id"] = $open_id;
     }

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
         return "ruixue.external.weixin.userdetailinfo.get";
     }
     public function check()     {          }}
