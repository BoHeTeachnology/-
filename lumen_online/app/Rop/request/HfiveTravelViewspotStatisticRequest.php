<?php
class HfiveTravelViewspotStatisticRequest
{
     private $apiParas = array();

     private $lq_jq_code;

     public function getLqJqCode()
     {
         return $this->$lq_jq_code;
     }

     public function setLqJqCode($lq_jq_code)
     {
         $this->lq_jq_code = $lq_jq_code;
         $this->apiParas["lq_jq_code"] = $lq_jq_code;
     }

     private $end_date;

     public function getEndDate()
     {
         return $this->$end_date;
     }

     public function setEndDate($end_date)
     {
         $this->end_date = $end_date;
         $this->apiParas["end_date"] = $end_date;
     }

     private $start_date;

     public function getStartDate()
     {
         return $this->$start_date;
     }

     public function setStartDate($start_date)
     {
         $this->start_date = $start_date;
         $this->apiParas["start_date"] = $start_date;
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
         return "ruixue.hfive.travel.viewspot.statistic";
     }
     public function check()     {          }}
