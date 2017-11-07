<?php
class FsPictureStreamUploadRequest
{
     private $apiParas = array();

     private $picturestream;

     public function getPictureStream()
     {
         return $this->$picturestream;
     }

     public function setPictureStream($picturestream)
     {
         $this->picturestream = $picturestream;
         $this->apiParas["picturestream"] = $picturestream;
     }
     
     private $extension;

     public function getExtension()
     {
         return $this->$extension;
     }

     public function setExtension($extension)
     {
         $this->extension = $extension;
         $this->apiParas["extension"] = $extension;
     }
     
     private $picturefilename;

     public function getPictureFilename()
     {
         return $this->$picturefilename;
     }

     public function setPictureFilename($picturefilename)
     {
         $this->picturefilename = $picturefilename;
         $this->apiParas["picturefilename"] = $picturefilename;
     }
     
     

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.ps.picturestream.upload";
     }
     public function check()     {          }}
