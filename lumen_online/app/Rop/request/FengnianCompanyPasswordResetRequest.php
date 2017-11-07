<?php
class FengnianCompanyPasswordResetRequest
{
     private $apiParas = array();

     private $password;

     public function getPassword()
     {
         return $this->$password;
     }

     public function setPassword($password)
     {
         $this->password = $password;
         $this->apiParas["password"] = $password;
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
         return "ruixue.fengnian.company.password.reset";
     }
     public function check()     {          }}
