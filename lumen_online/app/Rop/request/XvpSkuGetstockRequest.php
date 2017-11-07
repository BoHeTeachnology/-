<?php
class XvpSkuGetstockRequest
{
     private $apiParas = array();

     private $sku_id;

     public function getSkuId()
     {
         return $this->$sku_id;
     }

     public function setSkuId($sku_id)
     {
         $this->sku_id = $sku_id;
         $this->apiParas["sku_id"] = $sku_id;
     }

     private $store_id;

     public function getStoreId()
     {
         return $this->$store_id;
     }

     public function setStoreId($store_id)
     {
         $this->store_id = $store_id;
         $this->apiParas["store_id"] = $store_id;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.xvp.sku.getstock";
     }
     public function check()     {          }}
