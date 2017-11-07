<?php
class WheatfieldWalletTransferGetwhitelistRequest
{
     private $apiParas = array();

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

     private $appid;

     public function getAppid()
     {
         return $this->$appid;
     }

     public function setAppid($appid)
     {
         $this->appid = $appid;
         $this->apiParas["appid"] = $appid;
     }

     private $comuserid;

     public function getComuserid()
     {
         return $this->$comuserid;
     }

     public function setComuserid($comuserid)
     {
         $this->comuserid = $comuserid;
         $this->apiParas["comuserid"] = $comuserid;
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
         return "ruixue.wheatfield.wallet.transfer.getwhitelist";
     }
     public function check()     {          }}
