<?php
class FengnianItemAttrEditRequest
{
     private $apiParas = array();

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

     private $sku_id;

     public function getSkuId()
     {
         return $this->$sku_id;
     }

     public function setSkuId($sku_id)
     {
         $this->sku_id = $sku_id;
         $this->apiParas["sku_id"] = $sku_id;
     }

     private $sku_values;

     public function getSkuValues()
     {
         return $this->$sku_values;
     }

     public function setSkuValues($sku_values)
     {
         $this->sku_values = $sku_values;
         $this->apiParas["sku_values"] = $sku_values;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.item.attr.edit";
     }
     public function check()     {          }}
