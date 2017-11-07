<?php
class CfcaSealandsignatureGetsignatureurlkeyRequest
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

     private $contractno;

     public function getContractno()
     {
         return $this->$contractno;
     }

     public function setContractno($contractno)
     {
         $this->contractno = $contractno;
         $this->apiParas["contractno"] = $contractno;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.cfca.sealandsignature.getsignatureurlkey";
     }
     public function check()     {          }}
