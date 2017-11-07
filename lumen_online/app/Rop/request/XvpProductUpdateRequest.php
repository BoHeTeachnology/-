<?php
class XvpProductUpdateRequest
{
     private $apiParas = array();

     private $pics;

     public function getPics()
     {
         return $this->$pics;
     }

     public function setPics($pics)
     {
         $this->pics = $pics;
         $this->apiParas["pics"] = $pics;
     }

     private $product_no;

     public function getProductNo()
     {
         return $this->$product_no;
     }

     public function setProductNo($product_no)
     {
         $this->product_no = $product_no;
         $this->apiParas["product_no"] = $product_no;
     }

     private $logistics_fee;

     public function getLogisticsFee()
     {
         return $this->$logistics_fee;
     }

     public function setLogisticsFee($logistics_fee)
     {
         $this->logistics_fee = $logistics_fee;
         $this->apiParas["logistics_fee"] = $logistics_fee;
     }

     private $name;

     public function getName()
     {
         return $this->$name;
     }

     public function setName($name)
     {
         $this->name = $name;
         $this->apiParas["name"] = $name;
     }

     private $extend_fields;

     public function getExtendFields()
     {
         return $this->$extend_fields;
     }

     public function setExtendFields($extend_fields)
     {
         $this->extend_fields = $extend_fields;
         $this->apiParas["extend_fields"] = $extend_fields;
     }

     private $virtual_flg;

     public function getVirtualFlg()
     {
         return $this->$virtual_flg;
     }

     public function setVirtualFlg($virtual_flg)
     {
         $this->virtual_flg = $virtual_flg;
         $this->apiParas["virtual_flg"] = $virtual_flg;
     }

     private $pay_type;

     public function getPayType()
     {
         return $this->$pay_type;
     }

     public function setPayType($pay_type)
     {
         $this->pay_type = $pay_type;
         $this->apiParas["pay_type"] = $pay_type;
     }

     private $product_detail;

     public function getProductDetail()
     {
         return $this->$product_detail;
     }

     public function setProductDetail($product_detail)
     {
         $this->product_detail = $product_detail;
         $this->apiParas["product_detail"] = $product_detail;
     }

     private $categ_outer_id;

     public function getCategOuterId()
     {
         return $this->$categ_outer_id;
     }

     public function setCategOuterId($categ_outer_id)
     {
         $this->categ_outer_id = $categ_outer_id;
         $this->apiParas["categ_outer_id"] = $categ_outer_id;
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

     private $product_desc;

     public function getProductDesc()
     {
         return $this->$product_desc;
     }

     public function setProductDesc($product_desc)
     {
         $this->product_desc = $product_desc;
         $this->apiParas["product_desc"] = $product_desc;
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
         return "ruixue.xvp.product.update";
     }
     public function check()     {          }}
