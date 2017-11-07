<?php
class ExternalShopSyncVenderRequest
{
     private $apiParas = array();

     private $state;

     public function getState()
     {
         return $this->$state;
     }

     public function setState($state)
     {
         $this->state = $state;
         $this->apiParas["state"] = $state;
     }

     private $business_type;

     public function getBusinessType()
     {
         return $this->$business_type;
     }

     public function setBusinessType($business_type)
     {
         $this->business_type = $business_type;
         $this->apiParas["business_type"] = $business_type;
     }

     private $company_phone;

     public function getCompanyPhone()
     {
         return $this->$company_phone;
     }

     public function setCompanyPhone($company_phone)
     {
         $this->company_phone = $company_phone;
         $this->apiParas["company_phone"] = $company_phone;
     }

     private $opera;

     public function getOpera()
     {
         return $this->$opera;
     }

     public function setOpera($opera)
     {
         $this->opera = $opera;
         $this->apiParas["opera"] = $opera;
     }

     private $contacts_phone;

     public function getContactsPhone()
     {
         return $this->$contacts_phone;
     }

     public function setContactsPhone($contacts_phone)
     {
         $this->contacts_phone = $contacts_phone;
         $this->apiParas["contacts_phone"] = $contacts_phone;
     }

     private $company_addr;

     public function getCompanyAddr()
     {
         return $this->$company_addr;
     }

     public function setCompanyAddr($company_addr)
     {
         $this->company_addr = $company_addr;
         $this->apiParas["company_addr"] = $company_addr;
     }

     private $verder_name;

     public function getVerderName()
     {
         return $this->$verder_name;
     }

     public function setVerderName($verder_name)
     {
         $this->verder_name = $verder_name;
         $this->apiParas["verder_name"] = $verder_name;
     }

     private $area;

     public function getArea()
     {
         return $this->$area;
     }

     public function setArea($area)
     {
         $this->area = $area;
         $this->apiParas["area"] = $area;
     }

     private $contacts;

     public function getContacts()
     {
         return $this->$contacts;
     }

     public function setContacts($contacts)
     {
         $this->contacts = $contacts;
         $this->apiParas["contacts"] = $contacts;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.external.shop.sync.vender";
     }
     public function check()     {          }}
