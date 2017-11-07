<?php
class WheatfieldOprsystemModifyapprovalatatusRequest
{
     private $apiParas = array();

     private $statusid;

     public function getStatusid()
     {
         return $this->$statusid;
     }

     public function setStatusid($statusid)
     {
         $this->statusid = $statusid;
         $this->apiParas["statusid"] = $statusid;
     }

     private $reason;

     public function getReason()
     {
         return $this->$reason;
     }

     public function setReason($reason)
     {
         $this->reason = $reason;
         $this->apiParas["reason"] = $reason;
     }

     private $checkorderid;

     public function getCheckorderid()
     {
         return $this->$checkorderid;
     }

     public function setCheckorderid($checkorderid)
     {
         $this->checkorderid = $checkorderid;
         $this->apiParas["checkorderid"] = $checkorderid;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.oprsystem.modifyapprovalatatus";
     }
     public function check()     {          }}
