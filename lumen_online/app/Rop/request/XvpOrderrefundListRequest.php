<?php
class XvpOrderrefundListRequest
{
     private $apiParas = array();

     private $refund_status;

     public function getRefundStatus()
     {
         return $this->$refund_status;
     }

     public function setRefundStatus($refund_status)
     {
         $this->refund_status = $refund_status;
         $this->apiParas["refund_status"] = $refund_status;
     }

     private $page_no;

     public function getPageNo()
     {
         return $this->$page_no;
     }

     public function setPageNo($page_no)
     {
         $this->page_no = $page_no;
         $this->apiParas["page_no"] = $page_no;
     }

     private $end;

     public function getEnd()
     {
         return $this->$end;
     }

     public function setEnd($end)
     {
         $this->end = $end;
         $this->apiParas["end"] = $end;
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

     private $page_size;

     public function getPageSize()
     {
         return $this->$page_size;
     }

     public function setPageSize($page_size)
     {
         $this->page_size = $page_size;
         $this->apiParas["page_size"] = $page_size;
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

     private $begin;

     public function getBegin()
     {
         return $this->$begin;
     }

     public function setBegin($begin)
     {
         $this->begin = $begin;
         $this->apiParas["begin"] = $begin;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.xvp.orderrefund.list";
     }
     public function check()     {          }}
