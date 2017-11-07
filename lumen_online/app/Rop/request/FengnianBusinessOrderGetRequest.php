<?php
class FengnianBusinessOrderGetRequest
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.business.order.get";
     }
     public function check()     {          }}
