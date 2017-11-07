<?php
class HfiveFingerProductsGetRequest
{
     private $apiParas = array();

     private $product_name;

     public function getProductName()
     {
         return $this->$product_name;
     }

     public function setProductName($product_name)
     {
         $this->product_name = $product_name;
         $this->apiParas["product_name"] = $product_name;
     }

     private $page_size;

     public function getPageSize()
     {
         return $this->$page_size;
     }

     public function setPageSize($page_size)
     {
         $this->page_size = $page_size;
         $this->apiParas["page_size"] = $page_size;
     }

     private $page_num;

     public function getPageNum()
     {
         return $this->$page_num;
     }

     public function setPageNum($page_num)
     {
         $this->page_num = $page_num;
         $this->apiParas["page_num"] = $page_num;
     }

     private $group_id;

     public function getGroupId()
     {
         return $this->$group_id;
     }

     public function setGroupId($group_id)
     {
         $this->group_id = $group_id;
         $this->apiParas["group_id"] = $group_id;
     }

     private $uid;

     public function getUid()
     {
         return $this->$uid;
     }

     public function setUid($uid)
     {
         $this->uid = $uid;
         $this->apiParas["uid"] = $uid;
     }

     private $product_code;

     public function getProductCode()
     {
         return $this->$product_code;
     }

     public function setProductCode($product_code)
     {
         $this->product_code = $product_code;
         $this->apiParas["product_code"] = $product_code;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.finger.products.get";
     }
     public function check()     {          }}
