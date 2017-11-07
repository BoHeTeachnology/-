<?php
class RopApiDataGetRequest
{
     private $apiParas = array();

     private $request_parameter;

     public function getRequestParameter()
     {
         return $this->$request_parameter;
     }

     public function setRequestParameter($request_parameter)
     {
         $this->request_parameter = $request_parameter;
         $this->apiParas["request_parameter"] = $request_parameter;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.rop.api.data.get";
     }
     public function check()     {          }}
