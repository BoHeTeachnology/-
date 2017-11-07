<?php
class JrdLlllsgQbInRechargeparamRequest
{
     private $apiParas = array();

     private $txpwd;

     public function getTxpwd()
     {
         return $this->$txpwd;
     }

     public function setTxpwd($txpwd)
     {
         $this->txpwd = $txpwd;
         $this->apiParas["txpwd"] = $txpwd;
     }

     private $money;

     public function getMoney()
     {
         return $this->$money;
     }

     public function setMoney($money)
     {
         $this->money = $money;
         $this->apiParas["money"] = $money;
     }

     private $uid;

     public function getUid()
     {
         return $this->$uid;
     }

     public function setUid($uid)
     {
         $this->uid = $uid;
         $this->apiParas["uid"] = $uid;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.jrd.llllsg.qb.in.rechargeparam";
     }
     public function check()     {          }}
