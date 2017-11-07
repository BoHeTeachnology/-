<?php
class XvpOrderrefundSelleragreeRequest
{
     private $apiParas = array();

     private $refund_id;

     public function getRefundId()
     {
         return $this->$refund_id;
     }

     public function setRefundId($refund_id)
     {
         $this->refund_id = $refund_id;
         $this->apiParas["refund_id"] = $refund_id;
     }

     private $store_id;

     public function getStoreId()
     {
         return $this->$store_id;
     }

     public function setStoreId($store_id)
     {
         $this->store_id = $store_id;
         $this->apiParas["store_id"] = $store_id;
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

     private $refund_adress;

     public function getRefundAdress()
     {
         return $this->$refund_adress;
     }

     public function setRefundAdress($refund_adress)
     {
         $this->refund_adress = $refund_adress;
         $this->apiParas["refund_adress"] = $refund_adress;
     }

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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.xvp.orderrefund.selleragree";
     }
     public function check()     {          }}
