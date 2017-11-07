<?php
class JrdLlllsgUserTxpwdCheckRequest
{
     private $apiParas = array();

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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.jrd.llllsg.user.txpwd.check";
     }
     public function check()     {          }}
