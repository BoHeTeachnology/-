<?php
class HfiveTravelBwStatisticRequest
{
     private $apiParas = array();

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

     private $location;

     public function getLocation()
     {
         return $this->$location;
     }

     public function setLocation($location)
     {
         $this->location = $location;
         $this->apiParas["location"] = $location;
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

     private $finished;

     public function getFinished()
     {
         return $this->$finished;
     }

     public function setFinished($finished)
     {
         $this->finished = $finished;
         $this->apiParas["finished"] = $finished;
     }

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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.travel.bw.statistic";
     }
     public function check()     {          }}
