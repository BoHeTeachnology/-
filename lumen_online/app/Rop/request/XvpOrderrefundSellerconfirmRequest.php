<?php
class XvpOrderrefundSellerconfirmRequest
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
         return "ruixue.xvp.orderrefund.sellerconfirm";
     }
     public function check()     {          }}
