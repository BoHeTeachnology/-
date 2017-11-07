<?php
class FengnianItemCateOptionRemoveRequest
{
     private $apiParas = array();

     private $option_id;

     public function getOptionId()
     {
         return $this->$option_id;
     }

     public function setOptionId($option_id)
     {
         $this->option_id = $option_id;
         $this->apiParas["option_id"] = $option_id;
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
         return "ruixue.fengnian.item.cate.option.remove";
     }
     public function check()     {          }}
