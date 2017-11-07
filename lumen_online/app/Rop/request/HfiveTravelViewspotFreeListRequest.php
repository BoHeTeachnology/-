<?php
class HfiveTravelViewspotFreeListRequest
{
     private $apiParas = array();

     private $page_length;

     public function getPageLength()
     {
         return $this->$page_length;
     }

     public function setPageLength($page_length)
     {
         $this->page_length = $page_length;
         $this->apiParas["page_length"] = $page_length;
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

     private $page_index;

     public function getPageIndex()
     {
         return $this->$page_index;
     }

     public function setPageIndex($page_index)
     {
         $this->page_index = $page_index;
         $this->apiParas["page_index"] = $page_index;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.travel.viewspot.free.list";
     }
     public function check()     {          }}
