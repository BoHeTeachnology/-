<?php
class JrdWxcommercePushcustomerRequest
{
     private $apiParas = array();

     private $returnamount;

     public function getReturnamount()
     {
         return $this->$returnamount;
     }

     public function setReturnamount($returnamount)
     {
         $this->returnamount = $returnamount;
         $this->apiParas["returnamount"] = $returnamount;
     }

     private $prizeamount;

     public function getPrizeamount()
     {
         return $this->$prizeamount;
     }

     public function setPrizeamount($prizeamount)
     {
         $this->prizeamount = $prizeamount;
         $this->apiParas["prizeamount"] = $prizeamount;
     }

     private $custmobile;

     public function getCustmobile()
     {
         return $this->$custmobile;
     }

     public function setCustmobile($custmobile)
     {
         $this->custmobile = $custmobile;
         $this->apiParas["custmobile"] = $custmobile;
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

     private $custnickname;

     public function getCustnickname()
     {
         return $this->$custnickname;
     }

     public function setCustnickname($custnickname)
     {
         $this->custnickname = $custnickname;
         $this->apiParas["custnickname"] = $custnickname;
     }

     private $promopenid;

     public function getPromopenid()
     {
         return $this->$promopenid;
     }

     public function setPromopenid($promopenid)
     {
         $this->promopenid = $promopenid;
         $this->apiParas["promopenid"] = $promopenid;
     }

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

     private $isfirstorder;

     public function getIsfirstorder()
     {
         return $this->$isfirstorder;
     }

     public function setIsfirstorder($isfirstorder)
     {
         $this->isfirstorder = $isfirstorder;
         $this->apiParas["isfirstorder"] = $isfirstorder;
     }

     private $paymenttime;

     public function getPaymenttime()
     {
         return $this->$paymenttime;
     }

     public function setPaymenttime($paymenttime)
     {
         $this->paymenttime = $paymenttime;
         $this->apiParas["paymenttime"] = $paymenttime;
     }

     private $unionid;

     public function getUnionid()
     {
         return $this->$unionid;
     }

     public function setUnionid($unionid)
     {
         $this->unionid = $unionid;
         $this->apiParas["unionid"] = $unionid;
     }

     private $orderamount;

     public function getOrderamount()
     {
         return $this->$orderamount;
     }

     public function setOrderamount($orderamount)
     {
         $this->orderamount = $orderamount;
         $this->apiParas["orderamount"] = $orderamount;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.jrd.wxcommerce.pushcustomer";
     }
     public function check()     {          }}
