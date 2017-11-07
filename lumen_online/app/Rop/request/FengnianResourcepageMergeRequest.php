<?php
class FengnianResourcepageMergeRequest
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

     private $data;

     public function getData()
     {
         return $this->$data;
     }

     public function setData($data)
     {
         $this->data = $data;
         $this->apiParas["data"] = $data;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.resourcepage.merge";
     }
     public function check()     {          }}
