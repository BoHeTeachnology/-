<?php
class CfcaSealandsignatureGeneratesignatureRequest
{
     private $apiParas = array();

     private $sealstrategylist;

     public function getSealstrategylist()
     {
         return $this->$sealstrategylist;
     }

     public function setSealstrategylist($sealstrategylist)
     {
         $this->sealstrategylist = $sealstrategylist;
         $this->apiParas["sealstrategylist"] = $sealstrategylist;
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

     private $urlkey;

     public function getUrlkey()
     {
         return $this->$urlkey;
     }

     public function setUrlkey($urlkey)
     {
         $this->urlkey = $urlkey;
         $this->apiParas["urlkey"] = $urlkey;
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
         return "ruixue.cfca.sealandsignature.generatesignature";
     }
     public function check()     {          }}
