<?php
class FengnianCircleRefundmoneymessagePushRequest
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

     private $refund_money;

     public function getRefundMoney()
     {
         return $this->$refund_money;
     }

     public function setRefundMoney($refund_money)
     {
         $this->refund_money = $refund_money;
         $this->apiParas["refund_money"] = $refund_money;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.circle.refundmoneymessage.push";
     }
     public function check()     {          }}
