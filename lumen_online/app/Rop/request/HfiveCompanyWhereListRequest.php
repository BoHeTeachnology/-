<?php
class HfiveCompanyWhereListRequest
{
     private $apiParas = array();

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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.company.where.list";
     }
     public function check()     {          }}
