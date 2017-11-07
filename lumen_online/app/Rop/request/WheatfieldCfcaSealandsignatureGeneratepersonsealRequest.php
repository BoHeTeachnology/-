<?php
class WheatfieldCfcaSealandsignatureGeneratepersonsealRequest
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.cfca.sealandsignature.generatepersonseal";
     }
     public function check()     {          }}
