<?php
class WheatfieldUsercenterUserRegisternewRequest
{
     private $apiParas = array();

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

     private $userrealname;

     public function getUserrealname()
     {
         return $this->$userrealname;
     }

     public function setUserrealname($userrealname)
     {
         $this->userrealname = $userrealname;
         $this->apiParas["userrealname"] = $userrealname;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.usercenter.user.registernew";
     }
     public function check()     {          }}
