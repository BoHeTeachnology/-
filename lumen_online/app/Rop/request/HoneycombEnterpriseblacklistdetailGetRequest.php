<?php
class HoneycombEnterpriseblacklistdetailGetRequest
{
     private $apiParas = array();

     private $id;

     public function getId()
     {
         return $this->$id;
     }

     public function setId($id)
     {
         $this->id = $id;
         $this->apiParas["id"] = $id;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.honeycomb.enterpriseblacklistdetail.get";
     }
     public function check()     {          }}
