<?php
class FengnianTransactionOrdertypeGetRequest
{
     private $apiParas = array();

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

     private $type_name;

     public function getTypeName()
     {
         return $this->$type_name;
     }

     public function setTypeName($type_name)
     {
         $this->type_name = $type_name;
         $this->apiParas["type_name"] = $type_name;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.transaction.ordertype.get";
     }
     public function check()     {          }}
