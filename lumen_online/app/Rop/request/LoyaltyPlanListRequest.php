<?php
class LoyaltyPlanListRequest
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.loyalty.plan.list";
     }
     public function check()     {          }}
