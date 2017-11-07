<?php
class JdytripProductsDetailRequest
{
     private $apiParas = array();

     private $p_id;

     public function getPId()
     {
         return $this->$p_id;
     }

     public function setPId($p_id)
     {
         $this->p_id = $p_id;
         $this->apiParas["p_id"] = $p_id;
     }

     private $city_code;

     public function getCityCode()
     {
         return $this->$city_code;
     }

     public function setCityCode($city_code)
     {
         $this->city_code = $city_code;
         $this->apiParas["city_code"] = $city_code;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.jdytrip.products.detail";
     }
     public function check()     {          }}
