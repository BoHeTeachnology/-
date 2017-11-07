<?php
class FengnianCircleOrderStatusModifyRequest
{
     private $apiParas = array();

     private $order_no;

     public function getOrderNo()
     {
         return $this->$order_no;
     }

     public function setOrderNo($order_no)
     {
         $this->order_no = $order_no;
         $this->apiParas["order_no"] = $order_no;
     }

     private $ahp_order_no;

     public function getAhpOrderNo()
     {
         return $this->$ahp_order_no;
     }

     public function setAhpOrderNo($ahp_order_no)
     {
         $this->ahp_order_no = $ahp_order_no;
         $this->apiParas["ahp_order_no"] = $ahp_order_no;
     }

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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.circle.order.status.modify";
     }
     public function check()     {          }}
