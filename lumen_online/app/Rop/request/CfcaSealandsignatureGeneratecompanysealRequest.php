<?php
class CfcaSealandsignatureGeneratecompanysealRequest
{
     private $apiParas = array();

     private $imagestrategy;

     public function getImagestrategy()
     {
         return $this->$imagestrategy;
     }

     public function setImagestrategy($imagestrategy)
     {
         $this->imagestrategy = $imagestrategy;
         $this->apiParas["imagestrategy"] = $imagestrategy;
     }

     private $makesealstrategy;

     public function getMakesealstrategy()
     {
         return $this->$makesealstrategy;
     }

     public function setMakesealstrategy($makesealstrategy)
     {
         $this->makesealstrategy = $makesealstrategy;
         $this->apiParas["makesealstrategy"] = $makesealstrategy;
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
         return "ruixue.cfca.sealandsignature.generatecompanyseal";
     }
     public function check()     {          }}
