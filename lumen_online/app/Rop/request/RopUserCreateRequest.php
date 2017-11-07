<?php
class RopUserCreateRequest
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

     private $user_qq;

     public function getUserQq()
     {
         return $this->$user_qq;
     }

     public function setUserQq($user_qq)
     {
         $this->user_qq = $user_qq;
         $this->apiParas["user_qq"] = $user_qq;
     }

     private $user_mobile;

     public function getUserMobile()
     {
         return $this->$user_mobile;
     }

     public function setUserMobile($user_mobile)
     {
         $this->user_mobile = $user_mobile;
         $this->apiParas["user_mobile"] = $user_mobile;
     }

     private $user_tel;

     public function getUserTel()
     {
         return $this->$user_tel;
     }

     public function setUserTel($user_tel)
     {
         $this->user_tel = $user_tel;
         $this->apiParas["user_tel"] = $user_tel;
     }

     private $user_email;

     public function getUserEmail()
     {
         return $this->$user_email;
     }

     public function setUserEmail($user_email)
     {
         $this->user_email = $user_email;
         $this->apiParas["user_email"] = $user_email;
     }

     private $user_password;

     public function getUserPassword()
     {
         return $this->$user_password;
     }

     public function setUserPassword($user_password)
     {
         $this->user_password = $user_password;
         $this->apiParas["user_password"] = $user_password;
     }

     private $depart_name;

     public function getDepartName()
     {
         return $this->$depart_name;
     }

     public function setDepartName($depart_name)
     {
         $this->depart_name = $depart_name;
         $this->apiParas["depart_name"] = $depart_name;
     }

     private $isv_user_account;

     public function getIsvUserAccount()
     {
         return $this->$isv_user_account;
     }

     public function setIsvUserAccount($isv_user_account)
     {
         $this->isv_user_account = $isv_user_account;
         $this->apiParas["isv_user_account"] = $isv_user_account;
     }

     private $user_name;

     public function getUserName()
     {
         return $this->$user_name;
     }

     public function setUserName($user_name)
     {
         $this->user_name = $user_name;
         $this->apiParas["user_name"] = $user_name;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.rop.user.create";
     }
     public function check()     {          }}
