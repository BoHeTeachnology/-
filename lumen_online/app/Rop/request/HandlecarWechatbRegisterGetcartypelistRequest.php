<?php
class HandlecarWechatbRegisterGetcartypelistRequest
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.handlecar.wechatb.register.getcartypelist";
     }
     public function check()     {          }}
