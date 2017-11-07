<?php
class FengnianMobileLoginuserinfoCreateRequest
{
     private $apiParas = array();

     private $qq;

     public function getQq()
     {
         return $this->$qq;
     }

     public function setQq($qq)
     {
         $this->qq = $qq;
         $this->apiParas["qq"] = $qq;
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

     private $login_name;

     public function getLoginName()
     {
         return $this->$login_name;
     }

     public function setLoginName($login_name)
     {
         $this->login_name = $login_name;
         $this->apiParas["login_name"] = $login_name;
     }

     private $tel;

     public function getTel()
     {
         return $this->$tel;
     }

     public function setTel($tel)
     {
         $this->tel = $tel;
         $this->apiParas["tel"] = $tel;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.mobile.loginuserinfo.create";
     }
     public function check()     {          }}
