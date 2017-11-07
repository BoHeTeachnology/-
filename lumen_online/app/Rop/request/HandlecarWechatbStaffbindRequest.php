<?php
class HandlecarWechatbStaffbindRequest
{
     private $apiParas = array();

     private $scode;

     public function getScode()
     {
         return $this->$scode;
     }

     public function setScode($scode)
     {
         $this->scode = $scode;
         $this->apiParas["scode"] = $scode;
     }

     private $wxopenid;

     public function getWxopenid()
     {
         return $this->$wxopenid;
     }

     public function setWxopenid($wxopenid)
     {
         $this->wxopenid = $wxopenid;
         $this->apiParas["wxopenid"] = $wxopenid;
     }

     private $stafftel;

     public function getStafftel()
     {
         return $this->$stafftel;
     }

     public function setStafftel($stafftel)
     {
         $this->stafftel = $stafftel;
         $this->apiParas["stafftel"] = $stafftel;
     }

     private $staffname;

     public function getStaffname()
     {
         return $this->$staffname;
     }

     public function setStaffname($staffname)
     {
         $this->staffname = $staffname;
         $this->apiParas["staffname"] = $staffname;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.handlecar.wechatb.staffbind";
     }
     public function check()     {          }}
