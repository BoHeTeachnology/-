<?php
class MdmRoleSetRequest
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

     private $end_created;

     public function getEndCreated()
     {
         return $this->$end_created;
     }

     public function setEndCreated($end_created)
     {
         $this->end_created = $end_created;
         $this->apiParas["end_created"] = $end_created;
     }

     private $mapping_info;

     public function getMappingInfo()
     {
         return $this->$mapping_info;
     }

     public function setMappingInfo($mapping_info)
     {
         $this->mapping_info = $mapping_info;
         $this->apiParas["mapping_info"] = $mapping_info;
     }

     private $start_created;

     public function getStartCreated()
     {
         return $this->$start_created;
     }

     public function setStartCreated($start_created)
     {
         $this->start_created = $start_created;
         $this->apiParas["start_created"] = $start_created;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.mdm.role.set";
     }
     public function check()     {          }}
