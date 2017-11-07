<?php
class OrderGetRequest
{
     private $apiParas = array();

     private $orderCode;

     public function getOrderCode()
     {
         return $this->$orderCode;
     }

     public function setOrderCode($orderCode)
     {
         $this->orderCode = $orderCode;
         $this->apiParas["orderCode"] = $orderCode;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public String getApiMethodName()
     {
         return "ruixue.order.get";
     }
}
