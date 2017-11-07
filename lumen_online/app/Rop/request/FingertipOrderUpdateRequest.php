<?php
class FingertipOrderUpdateRequest
{
     private $apiParas = array();

     private $orders;

     public function getOrders()
     {
         return $this->$orders;
     }

     public function setOrders($orders)
     {
         $this->orders = $orders;
         $this->apiParas["orders"] = $orders;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fingertip.order.update";
     }
     public function check()     {          }}
