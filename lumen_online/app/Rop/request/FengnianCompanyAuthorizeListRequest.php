<?php
class FengnianCompanyAuthorizeListRequest
{
     private $apiParas = array();

     private $status;

     public function getStatus()
     {
         return $this->$status;
     }

     public function setStatus($status)
     {
         $this->status = $status;
         $this->apiParas["status"] = $status;
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

     private $cname;

     public function getCname()
     {
         return $this->$cname;
     }

     public function setCname($cname)
     {
         $this->cname = $cname;
         $this->apiParas["cname"] = $cname;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.company.authorize.list";
     }
     public function check()     {          }}
