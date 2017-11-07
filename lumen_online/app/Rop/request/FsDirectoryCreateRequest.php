<?php
class FsDirectoryCreateRequest
{
     private $apiParas = array();

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
         return "ruixue.fs.directory.create";
     }
     public function check()     {          }}
