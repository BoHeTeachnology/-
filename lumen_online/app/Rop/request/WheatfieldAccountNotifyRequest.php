<?php
class WheatfieldAccountNotifyRequest
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

     private $filetype;

     public function getFiletype()
     {
         return $this->$filetype;
     }

     public function setFiletype($filetype)
     {
         $this->filetype = $filetype;
         $this->apiParas["filetype"] = $filetype;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.account.notify";
     }
     public function check()     {          }}
