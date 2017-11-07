<?php
class WheatfieldWalletBankValidatebankRequest
{
     private $apiParas = array();

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

     private $idcard;

     public function getIdcard()
     {
         return $this->$idcard;
     }

     public function setIdcard($idcard)
     {
         $this->idcard = $idcard;
         $this->apiParas["idcard"] = $idcard;
     }

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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.wallet.bank.validatebank";
     }
     public function check()     {          }}
