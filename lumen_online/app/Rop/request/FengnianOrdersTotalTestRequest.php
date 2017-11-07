<?php
class FengnianOrdersTotalTestRequest
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
         return "ruixue.fengnian.orders.total.test";
     }
     public function check()     {          }}
