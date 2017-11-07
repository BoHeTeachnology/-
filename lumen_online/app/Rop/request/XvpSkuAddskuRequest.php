<?php
class XvpSkuAddskuRequest
{
     private $apiParas = array();

     private $sku_str;

     public function getSkuStr()
     {
         return $this->$sku_str;
     }

     public function setSkuStr($sku_str)
     {
         $this->sku_str = $sku_str;
         $this->apiParas["sku_str"] = $sku_str;
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

     private $sku_pic;

     public function getSkuPic()
     {
         return $this->$sku_pic;
     }

     public function setSkuPic($sku_pic)
     {
         $this->sku_pic = $sku_pic;
         $this->apiParas["sku_pic"] = $sku_pic;
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

     private $price;

     public function getPrice()
     {
         return $this->$price;
     }

     public function setPrice($price)
     {
         $this->price = $price;
         $this->apiParas["price"] = $price;
     }

     private $expends_fields;

     public function getExpendsFields()
     {
         return $this->$expends_fields;
     }

     public function setExpendsFields($expends_fields)
     {
         $this->expends_fields = $expends_fields;
         $this->apiParas["expends_fields"] = $expends_fields;
     }

     private $outer_sku_id;

     public function getOuterSkuId()
     {
         return $this->$outer_sku_id;
     }

     public function setOuterSkuId($outer_sku_id)
     {
         $this->outer_sku_id = $outer_sku_id;
         $this->apiParas["outer_sku_id"] = $outer_sku_id;
     }

     private $stock;

     public function getStock()
     {
         return $this->$stock;
     }

     public function setStock($stock)
     {
         $this->stock = $stock;
         $this->apiParas["stock"] = $stock;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.xvp.sku.addsku";
     }
     public function check()     {          }}
