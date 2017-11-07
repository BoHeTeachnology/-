<?php
class FengnianCompanyUnlockRequest
{
     private $apiParas = array();

     private $account;

     public function getAccount()
     {
         return $this->$account;
     }

     public function setAccount($account)
     {
         $this->account = $account;
         $this->apiParas["account"] = $account;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.company.unlock";
     }
     public function check()     {          }}
