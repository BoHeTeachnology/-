<?php
class WeishangCompanyAccountDeleteRequest
{
     private $apiParas = array();

     private $role;

     public function getRole()
     {
         return $this->$role;
     }

     public function setRole($role)
     {
         $this->role = $role;
         $this->apiParas["role"] = $role;
     }

     private $user_type;

     public function getUserType()
     {
         return $this->$user_type;
     }

     public function setUserType($user_type)
     {
         $this->user_type = $user_type;
         $this->apiParas["user_type"] = $user_type;
     }

     private $companykey;

     public function getCompanykey()
     {
         return $this->$companykey;
     }

     public function setCompanykey($companykey)
     {
         $this->companykey = $companykey;
         $this->apiParas["companykey"] = $companykey;
     }

     private $product_id;

     public function getProductId()
     {
         return $this->$product_id;
     }

     public function setProductId($product_id)
     {
         $this->product_id = $product_id;
         $this->apiParas["product_id"] = $product_id;
     }

     private $const_id;

     public function getConstId()
     {
         return $this->$const_id;
     }

     public function setConstId($const_id)
     {
         $this->const_id = $const_id;
         $this->apiParas["const_id"] = $const_id;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.weishang.company.account.delete";
     }
     public function check()     {          }}
