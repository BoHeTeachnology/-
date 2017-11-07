<?php
class FengnianCompanyWhereListRequest
{
     private $apiParas = array();

     private $company_name;

     public function getCompanyName()
     {
         return $this->$company_name;
     }

     public function setCompanyName($company_name)
     {
         $this->company_name = $company_name;
         $this->apiParas["company_name"] = $company_name;
     }

     private $company_tel;

     public function getCompanyTel()
     {
         return $this->$company_tel;
     }

     public function setCompanyTel($company_tel)
     {
         $this->company_tel = $company_tel;
         $this->apiParas["company_tel"] = $company_tel;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.company.where.list";
     }
     public function check()     {          }}
