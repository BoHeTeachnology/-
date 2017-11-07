<?php
class XvpProductCreateRequest
{
     private $apiParas = array();

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

     private $xvp_point_id;

     public function getXvpPointId()
     {
         return $this->$xvp_point_id;
     }

     public function setXvpPointId($xvp_point_id)
     {
         $this->xvp_point_id = $xvp_point_id;
         $this->apiParas["xvp_point_id"] = $xvp_point_id;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.xvp.product.create";
     }
     public function check()     {          }}
