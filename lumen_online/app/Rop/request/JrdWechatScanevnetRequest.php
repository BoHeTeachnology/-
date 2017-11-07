<?php
class JrdWechatScanevnetRequest
{
     private $apiParas = array();

     private $sceneid;

     public function getSceneid()
     {
         return $this->$sceneid;
     }

     public function setSceneid($sceneid)
     {
         $this->sceneid = $sceneid;
         $this->apiParas["sceneid"] = $sceneid;
     }

     private $eventtype;

     public function getEventtype()
     {
         return $this->$eventtype;
     }

     public function setEventtype($eventtype)
     {
         $this->eventtype = $eventtype;
         $this->apiParas["eventtype"] = $eventtype;
     }

     private $openid;

     public function getOpenid()
     {
         return $this->$openid;
     }

     public function setOpenid($openid)
     {
         $this->openid = $openid;
         $this->apiParas["openid"] = $openid;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.jrd.wechat.scanevnet";
     }
     public function check()     {          }}
