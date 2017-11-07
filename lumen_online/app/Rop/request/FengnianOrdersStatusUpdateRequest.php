<?php
class FengnianOrdersStatusUpdateRequest
{
     private $apiParas = array();

     private $company_key;

     public function getCompanyKey()
     {
         return $this->$company_key;
     }

     public function setCompanyKey($company_key)
     {
         $this->company_key = $company_key;
         $this->apiParas["company_key"] = $company_key;
     }

     private $order_num;

     public function getOrderNum()
     {
         return $this->$order_num;
     }

     public function setOrderNum($order_num)
     {
         $this->order_num = $order_num;
         $this->apiParas["order_num"] = $order_num;
     }

     private $order_action;

     public function getOrderAction()
     {
         return $this->$order_action;
     }

     public function setOrderAction($order_action)
     {
         $this->order_action = $order_action;
         $this->apiParas["order_action"] = $order_action;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.orders.status.update";
     }
     public function check()     {          }}
