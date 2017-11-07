<?php
class JrdWechatUserinfoRequest
{
     private $apiParas = array();

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

     private $userid;

     public function getUserid()
     {
         return $this->$userid;
     }

     public function setUserid($userid)
     {
         $this->userid = $userid;
         $this->apiParas["userid"] = $userid;
     }

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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.jrd.wechat.userinfo";
     }
     public function check()     {          }}
