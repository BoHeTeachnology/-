<?php
class RongcapitalOperationRecloaninfoRequest
{
     private $apiParas = array();

     private $loaninfo;

     public function getLoaninfo()
     {
         return $this->$loaninfo;
     }

     public function setLoaninfo($loaninfo)
     {
         $this->loaninfo = $loaninfo;
         $this->apiParas["loaninfo"] = $loaninfo;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.rongcapital.operation.recloaninfo";
     }
     public function check()     {          }}
