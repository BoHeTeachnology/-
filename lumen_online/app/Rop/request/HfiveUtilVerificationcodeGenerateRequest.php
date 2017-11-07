<?php
class HfiveUtilVerificationcodeGenerateRequest
{
     private $apiParas = array();

     private $expired;

     public function getExpired()
     {
         return $this->$expired;
     }

     public function setExpired($expired)
     {
         $this->expired = $expired;
         $this->apiParas["expired"] = $expired;
     }

     private $img_h;

     public function getImgH()
     {
         return $this->$img_h;
     }

     public function setImgH($img_h)
     {
         $this->img_h = $img_h;
         $this->apiParas["img_h"] = $img_h;
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

     private $digits;

     public function getDigits()
     {
         return $this->$digits;
     }

     public function setDigits($digits)
     {
         $this->digits = $digits;
         $this->apiParas["digits"] = $digits;
     }

     private $img_w;

     public function getImgW()
     {
         return $this->$img_w;
     }

     public function setImgW($img_w)
     {
         $this->img_w = $img_w;
         $this->apiParas["img_w"] = $img_w;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.util.verificationcode.generate";
     }
     public function check()     {          }}
