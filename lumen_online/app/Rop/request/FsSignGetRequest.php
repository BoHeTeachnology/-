<?php
class FsSignGetRequest
{
     private $apiParas = array();

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

     private $cosfile;

     public function getCosfile()
     {
         return $this->$cosfile;
     }

     public function setCosfile($cosfile)
     {
         $this->cosfile = $cosfile;
         $this->apiParas["cosfile"] = $cosfile;
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

     private $sourcefile;

     public function getSourcefile()
     {
         return $this->$sourcefile;
     }

     public function setSourcefile($sourcefile)
     {
         $this->sourcefile = $sourcefile;
         $this->apiParas["sourcefile"] = $sourcefile;
     }

     private $date;

     public function getDate()
     {
         return $this->$date;
     }

     public function setDate($date)
     {
         $this->date = $date;
         $this->apiParas["date"] = $date;
     }

     private $directoryname;

     public function getDirectoryname()
     {
         return $this->$directoryname;
     }

     public function setDirectoryname($directoryname)
     {
         $this->directoryname = $directoryname;
         $this->apiParas["directoryname"] = $directoryname;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fs.sign.get";
     }
     public function check()     {          }}
