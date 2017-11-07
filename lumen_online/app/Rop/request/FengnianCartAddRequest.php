<?php
class FengnianCartAddRequest
{
     private $apiParas = array();

     private $order_all_money;

     public function getOrderAllMoney()
     {
         return $this->$order_all_money;
     }

     public function setOrderAllMoney($order_all_money)
     {
         $this->order_all_money = $order_all_money;
         $this->apiParas["order_all_money"] = $order_all_money;
     }

     private $user_id;

     public function getUserId()
     {
         return $this->$user_id;
     }

     public function setUserId($user_id)
     {
         $this->user_id = $user_id;
         $this->apiParas["user_id"] = $user_id;
     }

     private $item_sku;

     public function getItemSku()
     {
         return $this->$item_sku;
     }

     public function setItemSku($item_sku)
     {
         $this->item_sku = $item_sku;
         $this->apiParas["item_sku"] = $item_sku;
     }

     private $sell_count;

     public function getSellCount()
     {
         return $this->$sell_count;
     }

     public function setSellCount($sell_count)
     {
         $this->sell_count = $sell_count;
         $this->apiParas["sell_count"] = $sell_count;
     }

     private $item_tpl_name;

     public function getItemTplName()
     {
         return $this->$item_tpl_name;
     }

     public function setItemTplName($item_tpl_name)
     {
         $this->item_tpl_name = $item_tpl_name;
         $this->apiParas["item_tpl_name"] = $item_tpl_name;
     }

     private $item_tpl_price;

     public function getItemTplPrice()
     {
         return $this->$item_tpl_price;
     }

     public function setItemTplPrice($item_tpl_price)
     {
         $this->item_tpl_price = $item_tpl_price;
         $this->apiParas["item_tpl_price"] = $item_tpl_price;
     }

     private $img;

     public function getImg()
     {
         return $this->$img;
     }

     public function setImg($img)
     {
         $this->img = $img;
         $this->apiParas["img"] = $img;
     }

     private $item_discount;

     public function getItemDiscount()
     {
         return $this->$item_discount;
     }

     public function setItemDiscount($item_discount)
     {
         $this->item_discount = $item_discount;
         $this->apiParas["item_discount"] = $item_discount;
     }

     private $buy_userid;

     public function getBuyUserid()
     {
         return $this->$buy_userid;
     }

     public function setBuyUserid($buy_userid)
     {
         $this->buy_userid = $buy_userid;
         $this->apiParas["buy_userid"] = $buy_userid;
     }

     private $item_price;

     public function getItemPrice()
     {
         return $this->$item_price;
     }

     public function setItemPrice($item_price)
     {
         $this->item_price = $item_price;
         $this->apiParas["item_price"] = $item_price;
     }

     private $weight;

     public function getWeight()
     {
         return $this->$weight;
     }

     public function setWeight($weight)
     {
         $this->weight = $weight;
         $this->apiParas["weight"] = $weight;
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

     private $item_points;

     public function getItemPoints()
     {
         return $this->$item_points;
     }

     public function setItemPoints($item_points)
     {
         $this->item_points = $item_points;
         $this->apiParas["item_points"] = $item_points;
     }

     private $type;

     public function getType()
     {
         return $this->$type;
     }

     public function setType($type)
     {
         $this->type = $type;
         $this->apiParas["type"] = $type;
     }

     private $item_tpl_id;

     public function getItemTplId()
     {
         return $this->$item_tpl_id;
     }

     public function setItemTplId($item_tpl_id)
     {
         $this->item_tpl_id = $item_tpl_id;
         $this->apiParas["item_tpl_id"] = $item_tpl_id;
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

     private $points;

     public function getPoints()
     {
         return $this->$points;
     }

     public function setPoints($points)
     {
         $this->points = $points;
         $this->apiParas["points"] = $points;
     }

     private $shop_name;

     public function getShopName()
     {
         return $this->$shop_name;
     }

     public function setShopName($shop_name)
     {
         $this->shop_name = $shop_name;
         $this->apiParas["shop_name"] = $shop_name;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.cart.add";
     }
     public function check()     {          }}
