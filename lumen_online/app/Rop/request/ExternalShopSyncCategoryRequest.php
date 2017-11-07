<?php
class ExternalShopSyncCategoryRequest
{
     private $apiParas = array();

     private $create_time;

     public function getCreateTime()
     {
         return $this->$create_time;
     }

     public function setCreateTime($create_time)
     {
         $this->create_time = $create_time;
         $this->apiParas["create_time"] = $create_time;
     }

     private $category_name;

     public function getCategoryName()
     {
         return $this->$category_name;
     }

     public function setCategoryName($category_name)
     {
         $this->category_name = $category_name;
         $this->apiParas["category_name"] = $category_name;
     }

     private $is_leaf;

     public function getIsLeaf()
     {
         return $this->$is_leaf;
     }

     public function setIsLeaf($is_leaf)
     {
         $this->is_leaf = $is_leaf;
         $this->apiParas["is_leaf"] = $is_leaf;
     }

     private $opera;

     public function getOpera()
     {
         return $this->$opera;
     }

     public function setOpera($opera)
     {
         $this->opera = $opera;
         $this->apiParas["opera"] = $opera;
     }

     private $parent_id;

     public function getParentId()
     {
         return $this->$parent_id;
     }

     public function setParentId($parent_id)
     {
         $this->parent_id = $parent_id;
         $this->apiParas["parent_id"] = $parent_id;
     }

     private $creator;

     public function getCreator()
     {
         return $this->$creator;
     }

     public function setCreator($creator)
     {
         $this->creator = $creator;
         $this->apiParas["creator"] = $creator;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.external.shop.sync.category";
     }
     public function check()     {          }}
