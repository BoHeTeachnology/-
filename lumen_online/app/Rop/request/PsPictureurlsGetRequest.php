<?php
class PsPictureurlsGetRequest
{
     private $apiParas = array();

     private $filename;

     public function getFilename()
     {
         return $this->$filename;
     }

     public function setFilename($filename)
     {
         $this->filename = $filename;
         $this->apiParas["filename"] = $filename;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.ps.pictureurls.get";
     }
     public function check()     {          }}
