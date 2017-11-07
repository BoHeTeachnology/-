<?php
class FingerShopSyncCategoryRequest
{
     private $apiParas = array();

     private $ctg_name;

     public function getCtgName()
     {
         return $this->$ctg_name;
     }

     public function setCtgName($ctg_name)
     {
         $this->ctg_name = $ctg_name;
         $this->apiParas["ctg_name"] = $ctg_name;
     }

     private $ctg_id;

     public function getCtgId()
     {
         return $this->$ctg_id;
     }

     public function setCtgId($ctg_id)
     {
         $this->ctg_id = $ctg_id;
         $this->apiParas["ctg_id"] = $ctg_id;
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

     private $p_ctg_id;

     public function getPCtgId()
     {
         return $this->$p_ctg_id;
     }

     public function setPCtgId($p_ctg_id)
     {
         $this->p_ctg_id = $p_ctg_id;
         $this->apiParas["p_ctg_id"] = $p_ctg_id;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.finger.shop.sync.category";
     }
     public function check()     {          }}
