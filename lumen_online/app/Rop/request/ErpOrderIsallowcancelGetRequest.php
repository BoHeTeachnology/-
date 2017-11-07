<?php
class ErpOrderIsallowcancelGetRequest
{
     private $apiParas = array();

     private $account;

     public function getAccount()
     {
         return $this->$account;
     }

     public function setAccount($account)
     {
         $this->account = $account;
         $this->apiParas["account"] = $account;
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
         return "ruixue.erp.order.isallowcancel.get";
     }
     public function check()     {          }}
