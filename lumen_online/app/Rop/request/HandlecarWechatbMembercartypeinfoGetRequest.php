<?php
class HandlecarWechatbMembercartypeinfoGetRequest
{
     private $apiParas = array();

     private $carplate;

     public function getCarplate()
     {
         return $this->$carplate;
     }

     public function setCarplate($carplate)
     {
         $this->carplate = $carplate;
         $this->apiParas["carplate"] = $carplate;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.handlecar.wechatb.membercartypeinfo.get";
     }
     public function check()     {          }}
