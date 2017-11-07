<?php
class WheatfieldCreditNotifyRequest
{
     private $apiParas = array();

     private $accountdate;

     public function getAccountdate()
     {
         return $this->$accountdate;
     }

     public function setAccountdate($accountdate)
     {
         $this->accountdate = $accountdate;
         $this->apiParas["accountdate"] = $accountdate;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.credit.notify";
     }
     public function check()     {          }}
