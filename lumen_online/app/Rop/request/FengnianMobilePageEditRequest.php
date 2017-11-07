<?php
class FengnianMobilePageEditRequest
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

     private $html_id;

     public function getHtmlId()
     {
         return $this->$html_id;
     }

     public function setHtmlId($html_id)
     {
         $this->html_id = $html_id;
         $this->apiParas["html_id"] = $html_id;
     }

     private $html_status;

     public function getHtmlStatus()
     {
         return $this->$html_status;
     }

     public function setHtmlStatus($html_status)
     {
         $this->html_status = $html_status;
         $this->apiParas["html_status"] = $html_status;
     }

     private $html_title;

     public function getHtmlTitle()
     {
         return $this->$html_title;
     }

     public function setHtmlTitle($html_title)
     {
         $this->html_title = $html_title;
         $this->apiParas["html_title"] = $html_title;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.mobile.page.edit";
     }
     public function check()     {          }}
