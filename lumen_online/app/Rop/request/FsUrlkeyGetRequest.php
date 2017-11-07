<?php
class FsUrlkeyGetRequest
{
     private $apiParas = array();

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
         return "ruixue.fs.urlkey.get";
     }
     public function check()     {          }}
