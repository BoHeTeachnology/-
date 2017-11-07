<?php
class FengnianItemSkuDeleteRequest
{
     private $apiParas = array();

     private $item_nums;

     public function getItemNums()
     {
         return $this->$item_nums;
     }

     public function setItemNums($item_nums)
     {
         $this->item_nums = $item_nums;
         $this->apiParas["item_nums"] = $item_nums;
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
         return "ruixue.fengnian.item.sku.delete";
     }
     public function check()     {          }}
