<?php
class HfiveTravelProjectCodeAuthRequest
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

     private $code;

     public function getCode()
     {
         return $this->$code;
     }

     public function setCode($code)
     {
         $this->code = $code;
         $this->apiParas["code"] = $code;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.travel.project.code.auth";
     }
     public function check()     {          }}
