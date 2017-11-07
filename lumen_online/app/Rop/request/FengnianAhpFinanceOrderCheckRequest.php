<?php
class FengnianAhpFinanceOrderCheckRequest
{
     private $apiParas = array();

     private $order_no;

     public function getOrderNo()
     {
         return $this->$order_no;
     }

     public function setOrderNo($order_no)
     {
         $this->order_no = $order_no;
         $this->apiParas["order_no"] = $order_no;
     }

     private $order_status;

     public function getOrderStatus()
     {
         return $this->$order_status;
     }

     public function setOrderStatus($order_status)
     {
         $this->order_status = $order_status;
         $this->apiParas["order_status"] = $order_status;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.ahp.finance.order.check";
     }
     public function check()     {          }}
