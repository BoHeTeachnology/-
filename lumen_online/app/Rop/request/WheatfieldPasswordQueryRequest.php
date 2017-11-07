<?php
class WheatfieldPasswordQueryRequest
{
     private $apiParas = array();

     private $constid;

     public function getConstid()
     {
         return $this->$constid;
     }

     public function setConstid($constid)
     {
         $this->constid = $constid;
         $this->apiParas["constid"] = $constid;
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

     private $passwordtype;

     public function getPasswordtype()
     {
         return $this->$passwordtype;
     }

     public function setPasswordtype($passwordtype)
     {
         $this->passwordtype = $passwordtype;
         $this->apiParas["passwordtype"] = $passwordtype;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.password.query";
     }
     public function check()     {          }}
