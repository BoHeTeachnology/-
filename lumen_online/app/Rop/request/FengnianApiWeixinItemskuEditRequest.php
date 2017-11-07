<?php
class FengnianApiWeixinItemskuEditRequest
{
     private $apiParas = array();

     private $is_status;

     public function getIsStatus()
     {
         return $this->$is_status;
     }

     public function setIsStatus($is_status)
     {
         $this->is_status = $is_status;
         $this->apiParas["is_status"] = $is_status;
     }

     private $sku_stock;

     public function getSkuStock()
     {
         return $this->$sku_stock;
     }

     public function setSkuStock($sku_stock)
     {
         $this->sku_stock = $sku_stock;
         $this->apiParas["sku_stock"] = $sku_stock;
     }

     private $sku_weight;

     public function getSkuWeight()
     {
         return $this->$sku_weight;
     }

     public function setSkuWeight($sku_weight)
     {
         $this->sku_weight = $sku_weight;
         $this->apiParas["sku_weight"] = $sku_weight;
     }

     private $sku_market_price;

     public function getSkuMarketPrice()
     {
         return $this->$sku_market_price;
     }

     public function setSkuMarketPrice($sku_market_price)
     {
         $this->sku_market_price = $sku_market_price;
         $this->apiParas["sku_market_price"] = $sku_market_price;
     }

     private $item_id;

     public function getItemId()
     {
         return $this->$item_id;
     }

     public function setItemId($item_id)
     {
         $this->item_id = $item_id;
         $this->apiParas["item_id"] = $item_id;
     }

     private $sku_attr_list;

     public function getSkuAttrList()
     {
         return $this->$sku_attr_list;
     }

     public function setSkuAttrList($sku_attr_list)
     {
         $this->sku_attr_list = $sku_attr_list;
         $this->apiParas["sku_attr_list"] = $sku_attr_list;
     }

     private $sku_img_url;

     public function getSkuImgUrl()
     {
         return $this->$sku_img_url;
     }

     public function setSkuImgUrl($sku_img_url)
     {
         $this->sku_img_url = $sku_img_url;
         $this->apiParas["sku_img_url"] = $sku_img_url;
     }

     private $sku_user_id;

     public function getSkuUserId()
     {
         return $this->$sku_user_id;
     }

     public function setSkuUserId($sku_user_id)
     {
         $this->sku_user_id = $sku_user_id;
         $this->apiParas["sku_user_id"] = $sku_user_id;
     }

     private $sku_name;

     public function getSkuName()
     {
         return $this->$sku_name;
     }

     public function setSkuName($sku_name)
     {
         $this->sku_name = $sku_name;
         $this->apiParas["sku_name"] = $sku_name;
     }

     private $sku_plate_price;

     public function getSkuPlatePrice()
     {
         return $this->$sku_plate_price;
     }

     public function setSkuPlatePrice($sku_plate_price)
     {
         $this->sku_plate_price = $sku_plate_price;
         $this->apiParas["sku_plate_price"] = $sku_plate_price;
     }

     private $company_key;

     public function getCompanyKey()
     {
         return $this->$company_key;
     }

     public function setCompanyKey($company_key)
     {
         $this->company_key = $company_key;
         $this->apiParas["company_key"] = $company_key;
     }

     private $sku_no;

     public function getSkuNo()
     {
         return $this->$sku_no;
     }

     public function setSkuNo($sku_no)
     {
         $this->sku_no = $sku_no;
         $this->apiParas["sku_no"] = $sku_no;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.api.weixin.itemsku.edit";
     }
     public function check()     {          }}
