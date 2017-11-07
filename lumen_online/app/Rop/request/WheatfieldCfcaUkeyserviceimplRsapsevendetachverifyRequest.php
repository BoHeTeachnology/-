<?php
class WheatfieldCfcaUkeyserviceimplRsapsevendetachverifyRequest
{
     private $apiParas = array();

     private $serial_no;

     public function getSerialNo()
     {
         return $this->$serial_no;
     }

     public function setSerialNo($serial_no)
     {
         $this->serial_no = $serial_no;
         $this->apiParas["serial_no"] = $serial_no;
     }

     private $source_data;

     public function getSourceData()
     {
         return $this->$source_data;
     }

     public function setSourceData($source_data)
     {
         $this->source_data = $source_data;
         $this->apiParas["source_data"] = $source_data;
     }

     private $signed_data;

     public function getSignedData()
     {
         return $this->$signed_data;
     }

     public function setSignedData($signed_data)
     {
         $this->signed_data = $signed_data;
         $this->apiParas["signed_data"] = $signed_data;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.cfca.ukeyserviceimpl.rsapsevendetachverify";
     }
     public function check()     {          }}
