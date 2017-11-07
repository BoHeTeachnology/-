<?php
class WheatfieldWalletBankBindcardRequest
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

     private $bankname;

     public function getBankname()
     {
         return $this->$bankname;
     }

     public function setBankname($bankname)
     {
         $this->bankname = $bankname;
         $this->apiParas["bankname"] = $bankname;
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

     private $username;

     public function getUsername()
     {
         return $this->$username;
     }

     public function setUsername($username)
     {
         $this->username = $username;
         $this->apiParas["username"] = $username;
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

     private $vcode;

     public function getVcode()
     {
         return $this->$vcode;
     }

     public function setVcode($vcode)
     {
         $this->vcode = $vcode;
         $this->apiParas["vcode"] = $vcode;
     }

     private $bankcode;

     public function getBankcode()
     {
         return $this->$bankcode;
     }

     public function setBankcode($bankcode)
     {
         $this->bankcode = $bankcode;
         $this->apiParas["bankcode"] = $bankcode;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.wallet.bank.bindcard";
     }
     public function check()     {          }}
