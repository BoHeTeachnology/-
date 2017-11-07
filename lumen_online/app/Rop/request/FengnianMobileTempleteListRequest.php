<?php
class FengnianMobileTempleteListRequest
{
     private $apiParas = array();

     private $modle_cate;

     public function getModleCate()
     {
         return $this->$modle_cate;
     }

     public function setModleCate($modle_cate)
     {
         $this->modle_cate = $modle_cate;
         $this->apiParas["modle_cate"] = $modle_cate;
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

     private $modle_name;

     public function getModleName()
     {
         return $this->$modle_name;
     }

     public function setModleName($modle_name)
     {
         $this->modle_name = $modle_name;
         $this->apiParas["modle_name"] = $modle_name;
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

     private $sorting_term;

     public function getSortingTerm()
     {
         return $this->$sorting_term;
     }

     public function setSortingTerm($sorting_term)
     {
         $this->sorting_term = $sorting_term;
         $this->apiParas["sorting_term"] = $sorting_term;
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

     private $modle_cate_id;

     public function getModleCateId()
     {
         return $this->$modle_cate_id;
     }

     public function setModleCateId($modle_cate_id)
     {
         $this->modle_cate_id = $modle_cate_id;
         $this->apiParas["modle_cate_id"] = $modle_cate_id;
     }

     private $modle_status;

     public function getModleStatus()
     {
         return $this->$modle_status;
     }

     public function setModleStatus($modle_status)
     {
         $this->modle_status = $modle_status;
         $this->apiParas["modle_status"] = $modle_status;
     }

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

     private $modle_type;

     public function getModleType()
     {
         return $this->$modle_type;
     }

     public function setModleType($modle_type)
     {
         $this->modle_type = $modle_type;
         $this->apiParas["modle_type"] = $modle_type;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.mobile.templete.list";
     }
     public function check()     {          }}
