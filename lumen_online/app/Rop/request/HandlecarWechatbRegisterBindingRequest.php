<?php
class HandlecarWechatbRegisterBindingRequest
{
     private $apiParas = array();

     private $wxopenid;

     public function getWxopenid()
     {
         return $this->$wxopenid;
     }

     public function setWxopenid($wxopenid)
     {
         $this->wxopenid = $wxopenid;
         $this->apiParas["wxopenid"] = $wxopenid;
     }

     private $para;

     public function getPara()
     {
         return $this->$para;
     }

     public function setPara($para)
     {
         $this->para = $para;
         $this->apiParas["para"] = $para;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.handlecar.wechatb.register.binding";
     }
     public function check()     {          }}
