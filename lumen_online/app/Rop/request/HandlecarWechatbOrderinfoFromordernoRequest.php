<?php
class HandlecarWechatbOrderinfoFromordernoRequest
{
     private $apiParas = array();

     private $orderno;

     public function getOrderno()
     {
         return $this->$orderno;
     }

     public function setOrderno($orderno)
     {
         $this->orderno = $orderno;
         $this->apiParas["orderno"] = $orderno;
     }

     private $url;

     public function getUrl()
     {
         return $this->$url;
     }

     public function setUrl($url)
     {
         $this->url = $url;
         $this->apiParas["url"] = $url;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.handlecar.wechatb.orderinfo.fromorderno";
     }
     public function check()     {          }}
