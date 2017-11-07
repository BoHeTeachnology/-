<?php
class FengnianCircleNfcGetRequest
{
     private $apiParas = array();

     private $nfc_serial;

     public function getNfcSerial()
     {
         return $this->$nfc_serial;
     }

     public function setNfcSerial($nfc_serial)
     {
         $this->nfc_serial = $nfc_serial;
         $this->apiParas["nfc_serial"] = $nfc_serial;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.circle.nfc.get";
     }
     public function check()     {          }}
