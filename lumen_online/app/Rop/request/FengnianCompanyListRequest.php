<?php
class FengnianCompanyListRequest
{
     private $apiParas = array();

     private $uri;

     public function getUri()
     {
         return $this->$uri;
     }

     public function setUri($uri)
     {
         $this->uri = $uri;
         $this->apiParas["uri"] = $uri;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.company.list";
     }
     public function check()     {          }}
