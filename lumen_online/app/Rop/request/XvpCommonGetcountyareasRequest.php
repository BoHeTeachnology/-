<?php
class XvpCommonGetcountyareasRequest
{
     private $apiParas = array();

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
         return "ruixue.xvp.common.getcountyareas";
     }
     public function check()     {          }}
