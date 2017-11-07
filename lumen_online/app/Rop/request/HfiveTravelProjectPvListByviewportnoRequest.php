<?php
class HfiveTravelProjectPvListByviewportnoRequest
{
     private $apiParas = array();

     private $item_no;

     public function getItemNo()
     {
         return $this->$item_no;
     }

     public function setItemNo($item_no)
     {
         $this->item_no = $item_no;
         $this->apiParas["item_no"] = $item_no;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.travel.project.pv.list.byviewportno";
     }
     public function check()     {          }}
