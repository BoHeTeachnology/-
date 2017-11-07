<?php
class JrdWalletReditinquiryRequest
{
     private $apiParas = array();

     private $userids;

     public function getUserids()
     {
         return $this->$userids;
     }

     public function setUserids($userids)
     {
         $this->userids = $userids;
         $this->apiParas["userids"] = $userids;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.jrd.wallet.reditinquiry";
     }
     public function check()     {          }}
