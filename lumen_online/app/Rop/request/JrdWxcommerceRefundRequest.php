<?php
class JrdWxcommerceRefundRequest
{
     private $apiParas = array();

     private $channel;

     public function getChannel()
     {
         return $this->$channel;
     }

     public function setChannel($channel)
     {
         $this->channel = $channel;
         $this->apiParas["channel"] = $channel;
     }

     private $orderid;

     public function getOrderid()
     {
         return $this->$orderid;
     }

     public function setOrderid($orderid)
     {
         $this->orderid = $orderid;
         $this->apiParas["orderid"] = $orderid;
     }

     private $openid;

     public function getOpenid()
     {
         return $this->$openid;
     }

     public function setOpenid($openid)
     {
         $this->openid = $openid;
         $this->apiParas["openid"] = $openid;
     }

     private $refundtime;

     public function getRefundtime()
     {
         return $this->$refundtime;
     }

     public function setRefundtime($refundtime)
     {
         $this->refundtime = $refundtime;
         $this->apiParas["refundtime"] = $refundtime;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.jrd.wxcommerce.refund";
     }
     public function check()     {          }}
