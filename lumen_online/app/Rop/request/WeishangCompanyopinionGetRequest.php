<?php
class WeishangCompanyopinionGetRequest
{
     private $apiParas = array();

     private $opinion_id;

     public function getOpinionId()
     {
         return $this->$opinion_id;
     }

     public function setOpinionId($opinion_id)
     {
         $this->opinion_id = $opinion_id;
         $this->apiParas["opinion_id"] = $opinion_id;
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
         return "ruixue.weishang.companyopinion.get";
     }
     public function check()     {          }}
