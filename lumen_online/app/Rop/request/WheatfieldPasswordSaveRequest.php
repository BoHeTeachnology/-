<?php
class WheatfieldPasswordSaveRequest
{
     private $apiParas = array();

     private $password;

     public function getPassword()
     {
         return $this->$password;
     }

     public function setPassword($password)
     {
         $this->password = $password;
         $this->apiParas["password"] = $password;
     }

     private $opertype;

     public function getOpertype()
     {
         return $this->$opertype;
     }

     public function setOpertype($opertype)
     {
         $this->opertype = $opertype;
         $this->apiParas["opertype"] = $opertype;
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

     private $productid;

     public function getProductid()
     {
         return $this->$productid;
     }

     public function setProductid($productid)
     {
         $this->productid = $productid;
         $this->apiParas["productid"] = $productid;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.password.save";
     }
     public function check()     {          }}
