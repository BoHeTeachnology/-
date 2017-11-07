<?php
class FengnianBusinessInformationBriefGetRequest
{
     private $apiParas = array();

     private $business_id;

     public function getBusinessId()
     {
         return $this->$business_id;
     }

     public function setBusinessId($business_id)
     {
         $this->business_id = $business_id;
         $this->apiParas["business_id"] = $business_id;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.business.information.brief.get";
     }
     public function check()     {          }}
