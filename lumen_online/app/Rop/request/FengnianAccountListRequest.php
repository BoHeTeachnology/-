<?php
class FengnianAccountListRequest
{
     private $apiParas = array();

     private $mobile;

     public function getMobile()
     {
         return $this->$mobile;
     }

     public function setMobile($mobile)
     {
         $this->mobile = $mobile;
         $this->apiParas["mobile"] = $mobile;
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

     private $email;

     public function getEmail()
     {
         return $this->$email;
     }

     public function setEmail($email)
     {
         $this->email = $email;
         $this->apiParas["email"] = $email;
     }

     private $account_name;

     public function getAccountName()
     {
         return $this->$account_name;
     }

     public function setAccountName($account_name)
     {
         $this->account_name = $account_name;
         $this->apiParas["account_name"] = $account_name;
     }

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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.account.list";
     }
     public function check()     {          }}
