<?php
class HfiveCompanyPasswordUpdateRequest
{
     private $apiParas = array();

     private $new_password;

     public function getNewPassword()
     {
         return $this->$new_password;
     }

     public function setNewPassword($new_password)
     {
         $this->new_password = $new_password;
         $this->apiParas["new_password"] = $new_password;
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

     private $old_password;

     public function getOldPassword()
     {
         return $this->$old_password;
     }

     public function setOldPassword($old_password)
     {
         $this->old_password = $old_password;
         $this->apiParas["old_password"] = $old_password;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.company.password.update";
     }
     public function check()     {          }}
