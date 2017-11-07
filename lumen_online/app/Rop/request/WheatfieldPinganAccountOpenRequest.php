<?php
class WheatfieldPinganAccountOpenRequest
{
     private $apiParas = array();

     private $accproductcode;

     public function getAccproductcode()
     {
         return $this->$accproductcode;
     }

     public function setAccproductcode($accproductcode)
     {
         $this->accproductcode = $accproductcode;
         $this->apiParas["accproductcode"] = $accproductcode;
     }

     private $rolecode;

     public function getRolecode()
     {
         return $this->$rolecode;
     }

     public function setRolecode($rolecode)
     {
         $this->rolecode = $rolecode;
         $this->apiParas["rolecode"] = $rolecode;
     }

     private $instcode;

     public function getInstcode()
     {
         return $this->$instcode;
     }

     public function setInstcode($instcode)
     {
         $this->instcode = $instcode;
         $this->apiParas["instcode"] = $instcode;
     }

     private $subaccountname;

     public function getSubaccountname()
     {
         return $this->$subaccountname;
     }

     public function setSubaccountname($subaccountname)
     {
         $this->subaccountname = $subaccountname;
         $this->apiParas["subaccountname"] = $subaccountname;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.pingan.account.open";
     }
     public function check()     {          }}
