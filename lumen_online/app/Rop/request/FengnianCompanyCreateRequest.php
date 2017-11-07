<?php
class FengnianCompanyCreateRequest
{
     private $apiParas = array();

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

     private $company_password;

     public function getCompanyPassword()
     {
         return $this->$company_password;
     }

     public function setCompanyPassword($company_password)
     {
         $this->company_password = $company_password;
         $this->apiParas["company_password"] = $company_password;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.company.create";
     }
     public function check()     {          }}
