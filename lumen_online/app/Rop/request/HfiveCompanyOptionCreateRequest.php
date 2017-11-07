<?php
class HfiveCompanyOptionCreateRequest
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

     private $option_content;

     public function getOptionContent()
     {
         return $this->$option_content;
     }

     public function setOptionContent($option_content)
     {
         $this->option_content = $option_content;
         $this->apiParas["option_content"] = $option_content;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.company.option.create";
     }
     public function check()     {          }}
