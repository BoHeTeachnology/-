<?php
class HandlecarWechatbAddcarplateRequest
{
     private $apiParas = array();

     private $msrid;

     public function getMsrid()
     {
         return $this->$msrid;
     }

     public function setMsrid($msrid)
     {
         $this->msrid = $msrid;
         $this->apiParas["msrid"] = $msrid;
     }

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
         return "ruixue.handlecar.wechatb.addcarplate";
     }
     public function check()     {          }}
