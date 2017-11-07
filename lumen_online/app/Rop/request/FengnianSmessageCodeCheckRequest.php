<?php
class FengnianSmessageCodeCheckRequest
{
     private $apiParas = array();

     private $pincode;

     public function getPincode()
     {
         return $this->$pincode;
     }

     public function setPincode($pincode)
     {
         $this->pincode = $pincode;
         $this->apiParas["pincode"] = $pincode;
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
         return "ruixue.fengnian.smessage.code.check";
     }
     public function check()     {          }}
