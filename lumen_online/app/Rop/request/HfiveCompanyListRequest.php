<?php
class HfiveCompanyListRequest
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
         return "ruixue.hfive.company.list";
     }
     public function check()     {          }}
