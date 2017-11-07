<?php
class XvpProductMaintainproductcategoryRequest
{
     private $apiParas = array();

     private $app_id;

     public function getAppId()
     {
         return $this->$app_id;
     }

     public function setAppId($app_id)
     {
         $this->app_id = $app_id;
         $this->apiParas["app_id"] = $app_id;
     }

     private $data;

     public function getData()
     {
         return $this->$data;
     }

     public function setData($data)
     {
         $this->data = $data;
         $this->apiParas["data"] = $data;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.xvp.product.maintainproductcategory";
     }
     public function check()     {          }}
