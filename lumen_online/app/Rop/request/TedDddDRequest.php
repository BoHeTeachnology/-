<?php
class TedDddDRequest
{
     private $apiParas = array();

     private $fd;

     public function getFd()
     {
         return $this->$fd;
     }

     public function setFd($fd)
     {
         $this->fd = $fd;
         $this->apiParas["fd"] = $fd;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.ted.ddd.d";
     }
     public function check()     {          }}
