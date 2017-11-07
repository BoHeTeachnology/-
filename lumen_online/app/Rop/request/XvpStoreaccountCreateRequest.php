<?php
class XvpStoreaccountCreateRequest
{
     private $apiParas = array();

     private $app_id;

     public function getAppId()
     {
         return $this->$app_id;
     }

     public function setAppId($app_id)
     {
         $this->app_id = $app_id;
         $this->apiParas["app_id"] = $app_id;
     }

     private $store_id;

     public function getStoreId()
     {
         return $this->$store_id;
     }

     public function setStoreId($store_id)
     {
         $this->store_id = $store_id;
         $this->apiParas["store_id"] = $store_id;
     }

     private $account_type;

     public function getAccountType()
     {
         return $this->$account_type;
     }

     public function setAccountType($account_type)
     {
         $this->account_type = $account_type;
         $this->apiParas["account_type"] = $account_type;
     }

     private $company_name;

     public function getCompanyName()
     {
         return $this->$company_name;
     }

     public function setCompanyName($company_name)
     {
         $this->company_name = $company_name;
         $this->apiParas["company_name"] = $company_name;
     }

     private $buslince;

     public function getBuslince()
     {
         return $this->$buslince;
     }

     public function setBuslince($buslince)
     {
         $this->buslince = $buslince;
         $this->apiParas["buslince"] = $buslince;
     }

     private $buslince_pic;

     public function getBuslincePic()
     {
         return $this->$buslince_pic;
     }

     public function setBuslincePic($buslince_pic)
     {
         $this->buslince_pic = $buslince_pic;
         $this->apiParas["buslince_pic"] = $buslince_pic;
     }

     private $certificate_number;

     public function getCertificateNumber()
     {
         return $this->$certificate_number;
     }

     public function setCertificateNumber($certificate_number)
     {
         $this->certificate_number = $certificate_number;
         $this->apiParas["certificate_number"] = $certificate_number;
     }

     private $user_name;

     public function getUserName()
     {
         return $this->$user_name;
     }

     public function setUserName($user_name)
     {
         $this->user_name = $user_name;
         $this->apiParas["user_name"] = $user_name;
     }

     private $certificate_type;

     public function getCertificateType()
     {
         return $this->$certificate_type;
     }

     public function setCertificateType($certificate_type)
     {
         $this->certificate_type = $certificate_type;
         $this->apiParas["certificate_type"] = $certificate_type;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.xvp.storeaccount.create";
     }
     public function check()     {          }}
