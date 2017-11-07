<?php
class HandlecarWechatbSodetailRequest
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

     private $sono;

     public function getSono()
     {
         return $this->$sono;
     }

     public function setSono($sono)
     {
         $this->sono = $sono;
         $this->apiParas["sono"] = $sono;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.handlecar.wechatb.sodetail";
     }
     public function check()     {          }}
