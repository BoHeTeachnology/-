<?php
class WheatfieldSettlementRepayfileRequest
{
     private $apiParas = array();

     private $reaydate;

     public function getReaydate()
     {
         return $this->$reaydate;
     }

     public function setReaydate($reaydate)
     {
         $this->reaydate = $reaydate;
         $this->apiParas["reaydate"] = $reaydate;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.settlement.repayfile";
     }
     public function check()     {          }}
