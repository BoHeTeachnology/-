<?php
class FingercrmOrderAddRequest
{
     private $apiParas = array();

     private $amount;

     public function getAmount()
     {
         return $this->$amount;
     }

     public function setAmount($amount)
     {
         $this->amount = $amount;
         $this->apiParas["amount"] = $amount;
     }

     private $order_id;

     public function getOrderId()
     {
         return $this->$order_id;
     }

     public function setOrderId($order_id)
     {
         $this->order_id = $order_id;
         $this->apiParas["order_id"] = $order_id;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fingercrm.order.add";
     }
     public function check()     {          }}
