<?php
class WheatfieldCheckstandProtocolUnbindRequest
{
     private $apiParas = array();

     private $protocolno;

     public function getProtocolno()
     {
         return $this->$protocolno;
     }

     public function setProtocolno($protocolno)
     {
         $this->protocolno = $protocolno;
         $this->apiParas["protocolno"] = $protocolno;
     }

     private $accountname;

     public function getAccountname()
     {
         return $this->$accountname;
     }

     public function setAccountname($accountname)
     {
         $this->accountname = $accountname;
         $this->apiParas["accountname"] = $accountname;
     }

     private $constid;

     public function getConstid()
     {
         return $this->$constid;
     }

     public function setConstid($constid)
     {
         $this->constid = $constid;
         $this->apiParas["constid"] = $constid;
     }

     private $cardno;

     public function getCardno()
     {
         return $this->$cardno;
     }

     public function setCardno($cardno)
     {
         $this->cardno = $cardno;
         $this->apiParas["cardno"] = $cardno;
     }

     private $unbindtype;

     public function getUnbindtype()
     {
         return $this->$unbindtype;
     }

     public function setUnbindtype($unbindtype)
     {
         $this->unbindtype = $unbindtype;
         $this->apiParas["unbindtype"] = $unbindtype;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.checkstand.protocol.unbind";
     }
     public function check()     {          }}
