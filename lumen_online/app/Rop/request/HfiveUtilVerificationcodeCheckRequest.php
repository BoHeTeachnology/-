<?php
class HfiveUtilVerificationcodeCheckRequest
{
     private $apiParas = array();

     private $code_val;

     public function getCodeVal()
     {
         return $this->$code_val;
     }

     public function setCodeVal($code_val)
     {
         $this->code_val = $code_val;
         $this->apiParas["code_val"] = $code_val;
     }

     private $code_id;

     public function getCodeId()
     {
         return $this->$code_id;
     }

     public function setCodeId($code_id)
     {
         $this->code_id = $code_id;
         $this->apiParas["code_id"] = $code_id;
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
         return "ruixue.hfive.util.verificationcode.check";
     }
     public function check()     {          }}
