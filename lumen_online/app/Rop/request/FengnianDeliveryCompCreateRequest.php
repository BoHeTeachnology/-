<?php
class FengnianDeliveryCompCreateRequest
{
     private $apiParas = array();

     private $delivery_comp_name;

     public function getDeliveryCompName()
     {
         return $this->$delivery_comp_name;
     }

     public function setDeliveryCompName($delivery_comp_name)
     {
         $this->delivery_comp_name = $delivery_comp_name;
         $this->apiParas["delivery_comp_name"] = $delivery_comp_name;
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

     private $delivery_comp_code;

     public function getDeliveryCompCode()
     {
         return $this->$delivery_comp_code;
     }

     public function setDeliveryCompCode($delivery_comp_code)
     {
         $this->delivery_comp_code = $delivery_comp_code;
         $this->apiParas["delivery_comp_code"] = $delivery_comp_code;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.delivery.comp.create";
     }
     public function check()     {          }}
