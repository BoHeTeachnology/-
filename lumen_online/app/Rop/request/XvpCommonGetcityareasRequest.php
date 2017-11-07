<?php
class XvpCommonGetcityareasRequest
{
     private $apiParas = array();

     private $province_code;

     public function getProvinceCode()
     {
         return $this->$province_code;
     }

     public function setProvinceCode($province_code)
     {
         $this->province_code = $province_code;
         $this->apiParas["province_code"] = $province_code;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.xvp.common.getcityareas";
     }
     public function check()     {          }}
