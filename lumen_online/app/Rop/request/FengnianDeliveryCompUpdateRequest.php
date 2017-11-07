<?php
class FengnianDeliveryCompUpdateRequest
{
     private $apiParas = array();

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

     private $delivery_comp_id;

     public function getDeliveryCompId()
     {
         return $this->$delivery_comp_id;
     }

     public function setDeliveryCompId($delivery_comp_id)
     {
         $this->delivery_comp_id = $delivery_comp_id;
         $this->apiParas["delivery_comp_id"] = $delivery_comp_id;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.delivery.comp.update";
     }
     public function check()     {          }}
