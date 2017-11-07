<?php
class FengnianOrdersTotalGetRequest
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

     private $type_id;

     public function getTypeId()
     {
         return $this->$type_id;
     }

     public function setTypeId($type_id)
     {
         $this->type_id = $type_id;
         $this->apiParas["type_id"] = $type_id;
     }

     private $status_id;

     public function getStatusId()
     {
         return $this->$status_id;
     }

     public function setStatusId($status_id)
     {
         $this->status_id = $status_id;
         $this->apiParas["status_id"] = $status_id;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.orders.total.get";
     }
     public function check()     {          }}
