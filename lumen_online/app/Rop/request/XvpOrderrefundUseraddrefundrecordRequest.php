<?php
class XvpOrderrefundUseraddrefundrecordRequest
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

     private $xvp_uid;

     public function getXvpUid()
     {
         return $this->$xvp_uid;
     }

     public function setXvpUid($xvp_uid)
     {
         $this->xvp_uid = $xvp_uid;
         $this->apiParas["xvp_uid"] = $xvp_uid;
     }

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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.xvp.orderrefund.useraddrefundrecord";
     }
     public function check()     {          }}
