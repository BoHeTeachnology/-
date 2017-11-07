<?php
class FengnianItemCateAddRequest
{
     private $apiParas = array();

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

     private $cate_name;

     public function getCateName()
     {
         return $this->$cate_name;
     }

     public function setCateName($cate_name)
     {
         $this->cate_name = $cate_name;
         $this->apiParas["cate_name"] = $cate_name;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.item.cate.add";
     }
     public function check()     {          }}
