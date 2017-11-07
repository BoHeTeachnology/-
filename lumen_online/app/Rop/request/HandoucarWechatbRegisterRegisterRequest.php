<?php
class HandoucarWechatbRegisterRegisterRequest
{
     private $apiParas = array();

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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.handoucar.wechatb.register.register";
     }
     public function check()     {          }}
