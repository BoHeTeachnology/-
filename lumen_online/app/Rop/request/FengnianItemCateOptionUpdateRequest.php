<?php
class FengnianItemCateOptionUpdateRequest
{
     private $apiParas = array();

     private $option_value;

     public function getOptionValue()
     {
         return $this->$option_value;
     }

     public function setOptionValue($option_value)
     {
         $this->option_value = $option_value;
         $this->apiParas["option_value"] = $option_value;
     }

     private $option_title;

     public function getOptionTitle()
     {
         return $this->$option_title;
     }

     public function setOptionTitle($option_title)
     {
         $this->option_title = $option_title;
         $this->apiParas["option_title"] = $option_title;
     }

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

     private $option_type;

     public function getOptionType()
     {
         return $this->$option_type;
     }

     public function setOptionType($option_type)
     {
         $this->option_type = $option_type;
         $this->apiParas["option_type"] = $option_type;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.item.cate.option.update";
     }
     public function check()     {          }}
