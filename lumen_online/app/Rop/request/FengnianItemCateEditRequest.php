<?php
class FengnianItemCateEditRequest
{
     private $apiParas = array();

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

     private $cate_id;

     public function getCateId()
     {
         return $this->$cate_id;
     }

     public function setCateId($cate_id)
     {
         $this->cate_id = $cate_id;
         $this->apiParas["cate_id"] = $cate_id;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.item.cate.edit";
     }
     public function check()     {          }}
