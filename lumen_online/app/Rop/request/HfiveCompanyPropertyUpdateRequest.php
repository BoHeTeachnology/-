<?php
class HfiveCompanyPropertyUpdateRequest
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

     private $company_account;

     public function getCompanyAccount()
     {
         return $this->$company_account;
     }

     public function setCompanyAccount($company_account)
     {
         $this->company_account = $company_account;
         $this->apiParas["company_account"] = $company_account;
     }

     private $company_remark;

     public function getCompanyRemark()
     {
         return $this->$company_remark;
     }

     public function setCompanyRemark($company_remark)
     {
         $this->company_remark = $company_remark;
         $this->apiParas["company_remark"] = $company_remark;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.company.property.update";
     }
     public function check()     {          }}
