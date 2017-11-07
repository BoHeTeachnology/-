<?php
class HfiveTravelVerificationcodeGetRequest
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

     private $verification_code;

     public function getVerificationCode()
     {
         return $this->$verification_code;
     }

     public function setVerificationCode($verification_code)
     {
         $this->verification_code = $verification_code;
         $this->apiParas["verification_code"] = $verification_code;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.travel.verificationcode.get";
     }
     public function check()     {          }}
