<?php
class FengnianItemCateoptionQuickListRequest
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

     private $option_ids;

     public function getOptionIds()
     {
         return $this->$option_ids;
     }

     public function setOptionIds($option_ids)
     {
         $this->option_ids = $option_ids;
         $this->apiParas["option_ids"] = $option_ids;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.item.cateoption.quick.list";
     }
     public function check()     {          }}
