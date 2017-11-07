<?php
class XvpProductOnsaleproductRequest
{
     private $apiParas = array();

     private $product_id;

     public function getProductId()
     {
         return $this->$product_id;
     }

     public function setProductId($product_id)
     {
         $this->product_id = $product_id;
         $this->apiParas["product_id"] = $product_id;
     }

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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.xvp.product.onsaleproduct";
     }
     public function check()     {          }}
