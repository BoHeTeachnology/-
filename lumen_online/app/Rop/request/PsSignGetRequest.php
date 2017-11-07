<?php
class PsSignGetRequest
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.ps.sign.get";
     }
     public function check()     {          }}
