<?php
class JrdWalletCpWithholdingResultGetRequest
{
     private $apiParas = array();

     private $invoice_date;

     public function getInvoiceDate()
     {
         return $this->$invoice_date;
     }

     public function setInvoiceDate($invoice_date)
     {
         $this->invoice_date = $invoice_date;
         $this->apiParas["invoice_date"] = $invoice_date;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.jrd.wallet.cp.withholding.result.get";
     }
     public function check()     {          }}
