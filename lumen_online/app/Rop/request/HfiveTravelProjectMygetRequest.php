<?php
class HfiveTravelProjectMygetRequest
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

     private $open_id;

     public function getOpenId()
     {
         return $this->$open_id;
     }

     public function setOpenId($open_id)
     {
         $this->open_id = $open_id;
         $this->apiParas["open_id"] = $open_id;
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

     private $lq_bw_code;

     public function getLqBwCode()
     {
         return $this->$lq_bw_code;
     }

     public function setLqBwCode($lq_bw_code)
     {
         $this->lq_bw_code = $lq_bw_code;
         $this->apiParas["lq_bw_code"] = $lq_bw_code;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.travel.project.myget";
     }
     public function check()     {          }}
