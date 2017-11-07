<?php
class WheatfieldCfcaSealmapserviceIssealexistsbysealcodeandorgidRequest
{
     private $apiParas = array();

     private $sealcode;

     public function getSealcode()
     {
         return $this->$sealcode;
     }

     public function setSealcode($sealcode)
     {
         $this->sealcode = $sealcode;
         $this->apiParas["sealcode"] = $sealcode;
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
         return "ruixue.wheatfield.cfca.sealmapservice.issealexistsbysealcodeandorgid";
     }
     public function check()     {          }}
