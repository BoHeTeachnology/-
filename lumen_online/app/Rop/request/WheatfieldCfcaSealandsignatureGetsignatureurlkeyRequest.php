<?php
class WheatfieldCfcaSealandsignatureGetsignatureurlkeyRequest
{
     private $apiParas = array();

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
         return "ruixue.wheatfield.cfca.sealandsignature.getsignatureurlkey";
     }
     public function check()     {          }}
