<?php
class HandlecarWechatbCarplateSaveRequest
{
     private $apiParas = array();

     private $orderid;

     public function getOrderid()
     {
         return $this->$orderid;
     }

     public function setOrderid($orderid)
     {
         $this->orderid = $orderid;
         $this->apiParas["orderid"] = $orderid;
     }

     private $openid;

     public function getOpenid()
     {
         return $this->$openid;
     }

     public function setOpenid($openid)
     {
         $this->openid = $openid;
         $this->apiParas["openid"] = $openid;
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
         return "ruixue.handlecar.wechatb.carplate.save";
     }
     public function check()     {          }}
