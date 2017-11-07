<?php
class XvpTlpayPointorderpayRequest
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

     private $point_id;

     public function getPointId()
     {
         return $this->$point_id;
     }

     public function setPointId($point_id)
     {
         $this->point_id = $point_id;
         $this->apiParas["point_id"] = $point_id;
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
         return "ruixue.xvp.tlpay.pointorderpay";
     }
     public function check()     {          }}
