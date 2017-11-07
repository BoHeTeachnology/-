<?php
class FengnianFnmNfcidGetRequest
{
     private $apiParas = array();

     private $nfc_card;

     public function getNfcCard()
     {
         return $this->$nfc_card;
     }

     public function setNfcCard($nfc_card)
     {
         $this->nfc_card = $nfc_card;
         $this->apiParas["nfc_card"] = $nfc_card;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.fnm.nfcid.get";
     }
     public function check()     {          }}
