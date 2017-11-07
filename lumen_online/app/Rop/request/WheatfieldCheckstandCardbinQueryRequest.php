<?php
class WheatfieldCheckstandCardbinQueryRequest
{
     private $apiParas = array();

     private $constid;

     public function getConstid()
     {
         return $this->$constid;
     }

     public function setConstid($constid)
     {
         $this->constid = $constid;
         $this->apiParas["constid"] = $constid;
     }

     private $cardno;

     public function getCardno()
     {
         return $this->$cardno;
     }

     public function setCardno($cardno)
     {
         $this->cardno = $cardno;
         $this->apiParas["cardno"] = $cardno;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.checkstand.cardbin.query";
     }
     public function check()     {          }}
