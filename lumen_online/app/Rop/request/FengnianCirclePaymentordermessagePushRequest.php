<?php
class FengnianCirclePaymentordermessagePushRequest
{
     private $apiParas = array();

     private $user_id;

     public function getUserId()
     {
         return $this->$user_id;
     }

     public function setUserId($user_id)
     {
         $this->user_id = $user_id;
         $this->apiParas["user_id"] = $user_id;
     }

     private $payment_order_money;

     public function getPaymentOrderMoney()
     {
         return $this->$payment_order_money;
     }

     public function setPaymentOrderMoney($payment_order_money)
     {
         $this->payment_order_money = $payment_order_money;
         $this->apiParas["payment_order_money"] = $payment_order_money;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.circle.paymentordermessage.push";
     }
     public function check()     {          }}
