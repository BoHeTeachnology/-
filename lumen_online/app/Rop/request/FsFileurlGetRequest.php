<?php
class FsFileurlGetRequest
{
     private $apiParas = array();

     private $url_key;

     public function getUrlKey()
     {
         return $this->$url_key;
     }

     public function setUrlKey($url_key)
     {
         $this->url_key = $url_key;
         $this->apiParas["url_key"] = $url_key;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fs.fileurl.get";
     }
     public function check()     {          }}
