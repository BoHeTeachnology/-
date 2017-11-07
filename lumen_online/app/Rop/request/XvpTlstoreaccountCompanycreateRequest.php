<?php
class XvpTlstoreaccountCompanycreateRequest
{
     private $apiParas = array();

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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.xvp.tlstoreaccount.companycreate";
     }
     public function check()     {          }}
