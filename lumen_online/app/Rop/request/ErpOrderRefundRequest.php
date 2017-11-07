<?php
class ErpOrderRefundRequest
{
     private $apiParas = array();

     private $has_good_return;

     public function getHasGoodReturn()
     {
         return $this->$has_good_return;
     }

     public function setHasGoodReturn($has_good_return)
     {
         $this->has_good_return = $has_good_return;
         $this->apiParas["has_good_return"] = $has_good_return;
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

     private $refund_fee;

     public function getRefundFee()
     {
         return $this->$refund_fee;
     }

     public function setRefundFee($refund_fee)
     {
         $this->refund_fee = $refund_fee;
         $this->apiParas["refund_fee"] = $refund_fee;
     }

     private $tid;

     public function getTid()
     {
         return $this->$tid;
     }

     public function setTid($tid)
     {
         $this->tid = $tid;
         $this->apiParas["tid"] = $tid;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.erp.order.refund";
     }
     public function check()     {          }}
