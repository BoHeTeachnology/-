<?php
class HandlecarWechatbBmyorderlistGetRequest
{
     private $apiParas = array();

     private $tabtype;

     public function getTabtype()
     {
         return $this->$tabtype;
     }

     public function setTabtype($tabtype)
     {
         $this->tabtype = $tabtype;
         $this->apiParas["tabtype"] = $tabtype;
     }

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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.handlecar.wechatb.bmyorderlist.get";
     }
     public function check()     {          }}
