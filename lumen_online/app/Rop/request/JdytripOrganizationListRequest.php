<?php
class JdytripOrganizationListRequest
{
     private $apiParas = array();

     private $org_id;

     public function getOrgId()
     {
         return $this->$org_id;
     }

     public function setOrgId($org_id)
     {
         $this->org_id = $org_id;
         $this->apiParas["org_id"] = $org_id;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.jdytrip.organization.list";
     }
     public function check()     {          }}
