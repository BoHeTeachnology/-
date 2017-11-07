<?php
class FengnianMobileHtmlListRequest
{
     private $apiParas = array();

     private $page_size;

     public function getPageSize()
     {
         return $this->$page_size;
     }

     public function setPageSize($page_size)
     {
         $this->page_size = $page_size;
         $this->apiParas["page_size"] = $page_size;
     }

     private $html_name;

     public function getHtmlName()
     {
         return $this->$html_name;
     }

     public function setHtmlName($html_name)
     {
         $this->html_name = $html_name;
         $this->apiParas["html_name"] = $html_name;
     }

     private $status;

     public function getStatus()
     {
         return $this->$status;
     }

     public function setStatus($status)
     {
         $this->status = $status;
         $this->apiParas["status"] = $status;
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

     private $modle_id;

     public function getModleId()
     {
         return $this->$modle_id;
     }

     public function setModleId($modle_id)
     {
         $this->modle_id = $modle_id;
         $this->apiParas["modle_id"] = $modle_id;
     }

     private $page_num;

     public function getPageNum()
     {
         return $this->$page_num;
     }

     public function setPageNum($page_num)
     {
         $this->page_num = $page_num;
         $this->apiParas["page_num"] = $page_num;
     }

     private $sorting_field;

     public function getSortingField()
     {
         return $this->$sorting_field;
     }

     public function setSortingField($sorting_field)
     {
         $this->sorting_field = $sorting_field;
         $this->apiParas["sorting_field"] = $sorting_field;
     }

     private $cate;

     public function getCate()
     {
         return $this->$cate;
     }

     public function setCate($cate)
     {
         $this->cate = $cate;
         $this->apiParas["cate"] = $cate;
     }

     private $html_type;

     public function getHtmlType()
     {
         return $this->$html_type;
     }

     public function setHtmlType($html_type)
     {
         $this->html_type = $html_type;
         $this->apiParas["html_type"] = $html_type;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.mobile.html.list";
     }
     public function check()     {          }}
