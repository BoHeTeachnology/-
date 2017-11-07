<?php
class XvpStoreaccountCreatebycompanyRequest
{
     private $apiParas = array();

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

     private $xvp_uid;

     public function getXvpUid()
     {
         return $this->$xvp_uid;
     }

     public function setXvpUid($xvp_uid)
     {
         $this->xvp_uid = $xvp_uid;
         $this->apiParas["xvp_uid"] = $xvp_uid;
     }

     private $user_type;

     public function getUserType()
     {
         return $this->$user_type;
     }

     public function setUserType($user_type)
     {
         $this->user_type = $user_type;
         $this->apiParas["user_type"] = $user_type;
     }

     private $corporate_name;

     public function getCorporateName()
     {
         return $this->$corporate_name;
     }

     public function setCorporateName($corporate_name)
     {
         $this->corporate_name = $corporate_name;
         $this->apiParas["corporate_name"] = $corporate_name;
     }

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

     private $corporate_identity;

     public function getCorporateIdentity()
     {
         return $this->$corporate_identity;
     }

     public function setCorporateIdentity($corporate_identity)
     {
         $this->corporate_identity = $corporate_identity;
         $this->apiParas["corporate_identity"] = $corporate_identity;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.xvp.storeaccount.createbycompany";
     }
     public function check()     {          }}
