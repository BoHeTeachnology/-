<?php
class FengnianAccountRegisterRequest
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

     private $pwd;

     public function getPwd()
     {
         return $this->$pwd;
     }

     public function setPwd($pwd)
     {
         $this->pwd = $pwd;
         $this->apiParas["pwd"] = $pwd;
     }

     private $mobile_checked;

     public function getMobileChecked()
     {
         return $this->$mobile_checked;
     }

     public function setMobileChecked($mobile_checked)
     {
         $this->mobile_checked = $mobile_checked;
         $this->apiParas["mobile_checked"] = $mobile_checked;
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

     private $email_checked;

     public function getEmailChecked()
     {
         return $this->$email_checked;
     }

     public function setEmailChecked($email_checked)
     {
         $this->email_checked = $email_checked;
         $this->apiParas["email_checked"] = $email_checked;
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
         return "ruixue.fengnian.account.register";
     }
     public function check()     {          }}
