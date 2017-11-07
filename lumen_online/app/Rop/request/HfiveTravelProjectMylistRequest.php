<?php
class HfiveTravelProjectMylistRequest
{
     private $apiParas = array();

     private $show_verification_code;

     public function getShowVerificationCode()
     {
         return $this->$show_verification_code;
     }

     public function setShowVerificationCode($show_verification_code)
     {
         $this->show_verification_code = $show_verification_code;
         $this->apiParas["show_verification_code"] = $show_verification_code;
     }

     private $bw_status;

     public function getBwStatus()
     {
         return $this->$bw_status;
     }

     public function setBwStatus($bw_status)
     {
         $this->bw_status = $bw_status;
         $this->apiParas["bw_status"] = $bw_status;
     }

     private $open_id;

     public function getOpenId()
     {
         return $this->$open_id;
     }

     public function setOpenId($open_id)
     {
         $this->open_id = $open_id;
         $this->apiParas["open_id"] = $open_id;
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
         return "ruixue.hfive.travel.project.mylist";
     }
     public function check()     {          }}
