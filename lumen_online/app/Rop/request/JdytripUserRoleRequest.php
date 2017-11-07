<?php
class JdytripUserRoleRequest
{
     private $apiParas = array();

     private $uid;

     public function getUid()
     {
         return $this->$uid;
     }

     public function setUid($uid)
     {
         $this->uid = $uid;
         $this->apiParas["uid"] = $uid;
     }

     private $appid;

     public function getAppid()
     {
         return $this->$appid;
     }

     public function setAppid($appid)
     {
         $this->appid = $appid;
         $this->apiParas["appid"] = $appid;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.jdytrip.user.role";
     }
     public function check()     {          }}
