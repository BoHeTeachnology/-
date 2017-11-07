<?php
class FengnianItemAttrAddRequest
{
     private $apiParas = array();

     private $attr_name;

     public function getAttrName()
     {
         return $this->$attr_name;
     }

     public function setAttrName($attr_name)
     {
         $this->attr_name = $attr_name;
         $this->apiParas["attr_name"] = $attr_name;
     }

     private $attr_value;

     public function getAttrValue()
     {
         return $this->$attr_value;
     }

     public function setAttrValue($attr_value)
     {
         $this->attr_value = $attr_value;
         $this->apiParas["attr_value"] = $attr_value;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.item.attr.add";
     }
     public function check()     {          }}
