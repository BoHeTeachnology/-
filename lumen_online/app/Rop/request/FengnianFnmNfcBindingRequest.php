<?php
class FengnianFnmNfcBindingRequest
{
     private $apiParas = array();

     private $nfc_sn;

     public function getNfcSn()
     {
         return $this->$nfc_sn;
     }

     public function setNfcSn($nfc_sn)
     {
         $this->nfc_sn = $nfc_sn;
         $this->apiParas["nfc_sn"] = $nfc_sn;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.fnm.nfc.binding";
     }
     public function check()     {          }}
