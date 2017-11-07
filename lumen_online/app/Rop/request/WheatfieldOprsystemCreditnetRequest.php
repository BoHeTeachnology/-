<?php
class WheatfieldOprsystemCreditnetRequest
{
     private $apiParas = array();

     private $checkpeople;

     public function getCheckpeople()
     {
         return $this->$checkpeople;
     }

     public function setCheckpeople($checkpeople)
     {
         $this->checkpeople = $checkpeople;
         $this->apiParas["checkpeople"] = $checkpeople;
     }

     private $credittype;

     public function getCredittype()
     {
         return $this->$credittype;
     }

     public function setCredittype($credittype)
     {
         $this->credittype = $credittype;
         $this->apiParas["credittype"] = $credittype;
     }

     private $creditname;

     public function getCreditname()
     {
         return $this->$creditname;
     }

     public function setCreditname($creditname)
     {
         $this->creditname = $creditname;
         $this->apiParas["creditname"] = $creditname;
     }

     private $comefromid;

     public function getComefromid()
     {
         return $this->$comefromid;
     }

     public function setComefromid($comefromid)
     {
         $this->comefromid = $comefromid;
         $this->apiParas["comefromid"] = $comefromid;
     }

     private $userid;

     public function getUserid()
     {
         return $this->$userid;
     }

     public function setUserid($userid)
     {
         $this->userid = $userid;
         $this->apiParas["userid"] = $userid;
     }

     private $checkmobile;

     public function getCheckmobile()
     {
         return $this->$checkmobile;
     }

     public function setCheckmobile($checkmobile)
     {
         $this->checkmobile = $checkmobile;
         $this->apiParas["checkmobile"] = $checkmobile;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.oprsystem.creditnet";
     }
     public function check()     {          }}
