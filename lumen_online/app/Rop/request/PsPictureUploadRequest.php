<?php
class PsPictureUploadRequest
{
     private $apiParas = array();

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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.ps.picture.upload";
     }
     public function check()     {          }}
