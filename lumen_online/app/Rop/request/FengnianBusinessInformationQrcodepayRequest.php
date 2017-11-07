<?php
class FengnianBusinessInformationQrcodepayRequest
{
     private $apiParas = array();

     private $status;

     public function getStatus()
     {
         return $this->$status;
     }

     public function setStatus($status)
     {
         $this->status = $status;
         $this->apiParas["status"] = $status;
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
         return "ruixue.fengnian.business.information.qrcodepay";
     }
     public function check()     {          }}
