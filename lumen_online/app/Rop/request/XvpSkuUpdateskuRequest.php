<?php
class XvpSkuUpdateskuRequest
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

     private $original_stock;

     public function getOriginalStock()
     {
         return $this->$original_stock;
     }

     public function setOriginalStock($original_stock)
     {
         $this->original_stock = $original_stock;
         $this->apiParas["original_stock"] = $original_stock;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.xvp.sku.updatesku";
     }
     public function check()     {          }}
