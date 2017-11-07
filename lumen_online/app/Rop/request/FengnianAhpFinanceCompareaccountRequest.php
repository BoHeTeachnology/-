<?php
class FengnianAhpFinanceCompareaccountRequest
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

     private $path;

     public function getPath()
     {
         return $this->$path;
     }

     public function setPath($path)
     {
         $this->path = $path;
         $this->apiParas["path"] = $path;
     }

     private $batch;

     public function getBatch()
     {
         return $this->$batch;
     }

     public function setBatch($batch)
     {
         $this->batch = $batch;
         $this->apiParas["batch"] = $batch;
     }

     private $type;

     public function getType()
     {
         return $this->$type;
     }

     public function setType($type)
     {
         $this->type = $type;
         $this->apiParas["type"] = $type;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.ahp.finance.compareaccount";
     }
     public function check()     {          }}
