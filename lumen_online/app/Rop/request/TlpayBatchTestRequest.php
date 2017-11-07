<?php
class TlpayBatchTestRequest
{
     private $apiParas = array();

     private $fe;

     public function getFe()
     {
         return $this->$fe;
     }

     public function setFe($fe)
     {
         $this->fe = $fe;
         $this->apiParas["fe"] = $fe;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.tlpay.batch.test";
     }
     public function check()     {          }}
