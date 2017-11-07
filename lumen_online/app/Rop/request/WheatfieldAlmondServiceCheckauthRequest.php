<?php
class WheatfieldAlmondServiceCheckauthRequest
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

     private $client;

     public function getClient()
     {
         return $this->$client;
     }

     public function setClient($client)
     {
         $this->client = $client;
         $this->apiParas["client"] = $client;
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

     private $orgid;

     public function getOrgid()
     {
         return $this->$orgid;
     }

     public function setOrgid($orgid)
     {
         $this->orgid = $orgid;
         $this->apiParas["orgid"] = $orgid;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.almond.service.checkauth";
     }
     public function check()     {          }}
