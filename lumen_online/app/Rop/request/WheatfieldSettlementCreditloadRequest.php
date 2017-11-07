<?php
class WheatfieldSettlementCreditloadRequest
{
     private $apiParas = array();

     private $invoicedate;

     public function getInvoicedate()
     {
         return $this->$invoicedate;
     }

     public function setInvoicedate($invoicedate)
     {
         $this->invoicedate = $invoicedate;
         $this->apiParas["invoicedate"] = $invoicedate;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.settlement.creditload";
     }
     public function check()     {          }}
