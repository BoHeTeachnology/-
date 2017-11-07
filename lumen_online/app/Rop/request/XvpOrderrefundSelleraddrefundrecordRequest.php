<?php
class XvpOrderrefundSelleraddrefundrecordRequest
{
     private $apiParas = array();

     private $detail;

     public function getDetail()
     {
         return $this->$detail;
     }

     public function setDetail($detail)
     {
         $this->detail = $detail;
         $this->apiParas["detail"] = $detail;
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
         return "ruixue.xvp.orderrefund.selleraddrefundrecord";
     }
     public function check()     {          }}
