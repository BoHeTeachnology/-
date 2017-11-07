<?php
class HandlecarWechatbRegisterRegisterRequest
{
     private $apiParas = array();

     private $phone;

     public function getPhone()
     {
         return $this->$phone;
     }

     public function setPhone($phone)
     {
         $this->phone = $phone;
         $this->apiParas["phone"] = $phone;
     }

     private $vercode;

     public function getVercode()
     {
         return $this->$vercode;
     }

     public function setVercode($vercode)
     {
         $this->vercode = $vercode;
         $this->apiParas["vercode"] = $vercode;
     }

     private $carbrand_id;

     public function getCarbrandId()
     {
         return $this->$carbrand_id;
     }

     public function setCarbrandId($carbrand_id)
     {
         $this->carbrand_id = $carbrand_id;
         $this->apiParas["carbrand_id"] = $carbrand_id;
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

     private $cartype_id;

     public function getCartypeId()
     {
         return $this->$cartype_id;
     }

     public function setCartypeId($cartype_id)
     {
         $this->cartype_id = $cartype_id;
         $this->apiParas["cartype_id"] = $cartype_id;
     }

     private $shopid;

     public function getShopid()
     {
         return $this->$shopid;
     }

     public function setShopid($shopid)
     {
         $this->shopid = $shopid;
         $this->apiParas["shopid"] = $shopid;
     }

     private $name;

     public function getName()
     {
         return $this->$name;
     }

     public function setName($name)
     {
         $this->name = $name;
         $this->apiParas["name"] = $name;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.handlecar.wechatb.register.register";
     }
     public function check()     {          }}
