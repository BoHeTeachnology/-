<?php
class WheatfieldOprsystemCreditdatabacknetRequest
{
     private $apiParas = array();

     private $creditcode;

     public function getCreditcode()
     {
         return $this->$creditcode;
     }

     public function setCreditcode($creditcode)
     {
         $this->creditcode = $creditcode;
         $this->apiParas["creditcode"] = $creditcode;
     }

     private $statusid;

     public function getStatusid()
     {
         return $this->$statusid;
     }

     public function setStatusid($statusid)
     {
         $this->statusid = $statusid;
         $this->apiParas["statusid"] = $statusid;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.oprsystem.creditdatabacknet";
     }
     public function check()     {          }}
