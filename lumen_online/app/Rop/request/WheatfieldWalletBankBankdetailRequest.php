<?php
class WheatfieldWalletBankBankdetailRequest
{
     private $apiParas = array();

     private $token;

     public function getToken()
     {
         return $this->$token;
     }

     public function setToken($token)
     {
         $this->token = $token;
         $this->apiParas["token"] = $token;
     }

     private $bankcardnum;

     public function getBankcardnum()
     {
         return $this->$bankcardnum;
     }

     public function setBankcardnum($bankcardnum)
     {
         $this->bankcardnum = $bankcardnum;
         $this->apiParas["bankcardnum"] = $bankcardnum;
     }

     private $userid;

     public function getUserid()
     {
         return $this->$userid;
     }

     public function setUserid($userid)
     {
         $this->userid = $userid;
         $this->apiParas["userid"] = $userid;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.wallet.bank.bankdetail";
     }
     public function check()     {          }}
