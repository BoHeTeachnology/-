<?php
class FingerShopSyncVenderRequest
{
     private $apiParas = array();

     private $opera_range;

     public function getOperaRange()
     {
         return $this->$opera_range;
     }

     public function setOperaRange($opera_range)
     {
         $this->opera_range = $opera_range;
         $this->apiParas["opera_range"] = $opera_range;
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

     private $vender_name;

     public function getVenderName()
     {
         return $this->$vender_name;
     }

     public function setVenderName($vender_name)
     {
         $this->vender_name = $vender_name;
         $this->apiParas["vender_name"] = $vender_name;
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

     private $vender_id;

     public function getVenderId()
     {
         return $this->$vender_id;
     }

     public function setVenderId($vender_id)
     {
         $this->vender_id = $vender_id;
         $this->apiParas["vender_id"] = $vender_id;
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

     private $comp_addr;

     public function getCompAddr()
     {
         return $this->$comp_addr;
     }

     public function setCompAddr($comp_addr)
     {
         $this->comp_addr = $comp_addr;
         $this->apiParas["comp_addr"] = $comp_addr;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.finger.shop.sync.vender";
     }
     public function check()     {          }}
