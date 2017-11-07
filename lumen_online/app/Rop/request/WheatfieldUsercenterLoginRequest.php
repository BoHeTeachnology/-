<?php
class WheatfieldUsercenterLoginRequest
{
     private $apiParas = array();

     private $pwd;

     public function getPwd()
     {
         return $this->$pwd;
     }

     public function setPwd($pwd)
     {
         $this->pwd = $pwd;
         $this->apiParas["pwd"] = $pwd;
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

     private $usertype;

     public function getUsertype()
     {
         return $this->$usertype;
     }

     public function setUsertype($usertype)
     {
         $this->usertype = $usertype;
         $this->apiParas["usertype"] = $usertype;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.usercenter.login";
     }
     public function check()     {          }}
