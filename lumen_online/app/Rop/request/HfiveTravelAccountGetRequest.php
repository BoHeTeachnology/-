<?php
class HfiveTravelAccountGetRequest
{
     private $apiParas = array();

     private $account_id;

     public function getAccountId()
     {
         return $this->$account_id;
     }

     public function setAccountId($account_id)
     {
         $this->account_id = $account_id;
         $this->apiParas["account_id"] = $account_id;
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
         return "ruixue.hfive.travel.account.get";
     }
     public function check()     {          }}
