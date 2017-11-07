<?php
class XvpStoreCreateRequest
{
     private $apiParas = array();

     private $extend_fields;

     public function getExtendFields()
     {
         return $this->$extend_fields;
     }

     public function setExtendFields($extend_fields)
     {
         $this->extend_fields = $extend_fields;
         $this->apiParas["extend_fields"] = $extend_fields;
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

     private $store_name;

     public function getStoreName()
     {
         return $this->$store_name;
     }

     public function setStoreName($store_name)
     {
         $this->store_name = $store_name;
         $this->apiParas["store_name"] = $store_name;
     }

     private $owner_real_name;

     public function getOwnerRealName()
     {
         return $this->$owner_real_name;
     }

     public function setOwnerRealName($owner_real_name)
     {
         $this->owner_real_name = $owner_real_name;
         $this->apiParas["owner_real_name"] = $owner_real_name;
     }

     private $customer_service_phone;

     public function getCustomerServicePhone()
     {
         return $this->$customer_service_phone;
     }

     public function setCustomerServicePhone($customer_service_phone)
     {
         $this->customer_service_phone = $customer_service_phone;
         $this->apiParas["customer_service_phone"] = $customer_service_phone;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.xvp.store.create";
     }
     public function check()     {          }}
