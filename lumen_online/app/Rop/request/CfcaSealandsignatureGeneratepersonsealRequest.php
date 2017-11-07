<?php
class CfcaSealandsignatureGeneratepersonsealRequest
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

     private $namedsealstrage;

     public function getNamedsealstrage()
     {
         return $this->$namedsealstrage;
     }

     public function setNamedsealstrage($namedsealstrage)
     {
         $this->namedsealstrage = $namedsealstrage;
         $this->apiParas["namedsealstrage"] = $namedsealstrage;
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
         return "ruixue.cfca.sealandsignature.generatepersonseal";
     }
     public function check()     {          }}
