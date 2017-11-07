<?php
class FengnianMobilePageStatusGetRequest
{
     private $apiParas = array();

     private $html_ids;

     public function getHtmlIds()
     {
         return $this->$html_ids;
     }

     public function setHtmlIds($html_ids)
     {
         $this->html_ids = $html_ids;
         $this->apiParas["html_ids"] = $html_ids;
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
         return "ruixue.fengnian.mobile.page.status.get";
     }
     public function check()     {          }}
