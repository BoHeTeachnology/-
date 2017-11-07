<?php
class FengnianDeliveryCompDeleteRequest
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.delivery.comp.delete";
     }
     public function check()     {          }}
