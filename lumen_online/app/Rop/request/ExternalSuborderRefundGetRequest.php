<?php
class ExternalSuborderRefundGetRequest
{
     private $apiParas = array();

     private $sourcesubnumber;

     public function getSourcesubnumber()
     {
         return $this->$sourcesubnumber;
     }

     public function setSourcesubnumber($sourcesubnumber)
     {
         $this->sourcesubnumber = $sourcesubnumber;
         $this->apiParas["sourcesubnumber"] = $sourcesubnumber;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.external.suborder.refund.get";
     }
     public function check()     {          }}
