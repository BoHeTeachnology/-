<?php
class HfiveCompanyGetByaccountRequest
{
     private $apiParas = array();

     private $company_account;

     public function getCompanyAccount()
     {
         return $this->$company_account;
     }

     public function setCompanyAccount($company_account)
     {
         $this->company_account = $company_account;
         $this->apiParas["company_account"] = $company_account;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.company.get.byaccount";
     }
     public function check()     {          }}
