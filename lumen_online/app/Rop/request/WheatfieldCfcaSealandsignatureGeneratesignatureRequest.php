<?php
class WheatfieldCfcaSealandsignatureGeneratesignatureRequest
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.cfca.sealandsignature.generatesignature";
     }
     public function check()     {          }}
