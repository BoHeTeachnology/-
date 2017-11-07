<?php
class FengnianApiWeixinItemEditRequest
{
     private $apiParas = array();

     private $item_no;

     public function getItemNo()
     {
         return $this->$item_no;
     }

     public function setItemNo($item_no)
     {
         $this->item_no = $item_no;
         $this->apiParas["item_no"] = $item_no;
     }

     private $item_user_id;

     public function getItemUserId()
     {
         return $this->$item_user_id;
     }

     public function setItemUserId($item_user_id)
     {
         $this->item_user_id = $item_user_id;
         $this->apiParas["item_user_id"] = $item_user_id;
     }

     private $item_maket_price;

     public function getItemMaketPrice()
     {
         return $this->$item_maket_price;
     }

     public function setItemMaketPrice($item_maket_price)
     {
         $this->item_maket_price = $item_maket_price;
         $this->apiParas["item_maket_price"] = $item_maket_price;
     }

     private $item_img_url;

     public function getItemImgUrl()
     {
         return $this->$item_img_url;
     }

     public function setItemImgUrl($item_img_url)
     {
         $this->item_img_url = $item_img_url;
         $this->apiParas["item_img_url"] = $item_img_url;
     }

     private $item_name;

     public function getItemName()
     {
         return $this->$item_name;
     }

     public function setItemName($item_name)
     {
         $this->item_name = $item_name;
         $this->apiParas["item_name"] = $item_name;
     }

     private $item_cate_id;

     public function getItemCateId()
     {
         return $this->$item_cate_id;
     }

     public function setItemCateId($item_cate_id)
     {
         $this->item_cate_id = $item_cate_id;
         $this->apiParas["item_cate_id"] = $item_cate_id;
     }

     private $item_desc;

     public function getItemDesc()
     {
         return $this->$item_desc;
     }

     public function setItemDesc($item_desc)
     {
         $this->item_desc = $item_desc;
         $this->apiParas["item_desc"] = $item_desc;
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

     private $item_sale_price;

     public function getItemSalePrice()
     {
         return $this->$item_sale_price;
     }

     public function setItemSalePrice($item_sale_price)
     {
         $this->item_sale_price = $item_sale_price;
         $this->apiParas["item_sale_price"] = $item_sale_price;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.api.weixin.item.edit";
     }
     public function check()     {          }}
