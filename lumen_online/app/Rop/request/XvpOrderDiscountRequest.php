<?php
class XvpOrderDiscountRequest
{
     private $apiParas = array();

     private $app_id;

     public function getAppId()
     {
         return $this->$app_id;
     }

     public function setAppId($app_id)
     {
         $this->app_id = $app_id;
         $this->apiParas["app_id"] = $app_id;
     }

     private $discount_amount;

     public function getDiscountAmount()
     {
         return $this->$discount_amount;
     }

     public function setDiscountAmount($discount_amount)
     {
         $this->discount_amount = $discount_amount;
         $this->apiParas["discount_amount"] = $discount_amount;
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
         return "ruixue.xvp.order.discount";
     }
     public function check()     {          }}
