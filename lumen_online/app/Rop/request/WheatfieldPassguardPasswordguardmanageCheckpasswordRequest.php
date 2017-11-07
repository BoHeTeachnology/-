<?php
class WheatfieldPassguardPasswordguardmanageCheckpasswordRequest
{
     private $apiParas = array();

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

     private $terminaltype;

     public function getTerminaltype()
     {
         return $this->$terminaltype;
     }

     public function setTerminaltype($terminaltype)
     {
         $this->terminaltype = $terminaltype;
         $this->apiParas["terminaltype"] = $terminaltype;
     }

     private $type;

     public function getType()
     {
         return $this->$type;
     }

     public function setType($type)
     {
         $this->type = $type;
         $this->apiParas["type"] = $type;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.passguard.passwordguardmanage.checkpassword";
     }
     public function check()     {          }}
