<?php
class RopUserInfoGetRequest
{
     private $apiParas = array();

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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.rop.user.info.get";
     }
     public function check()     {          }}
