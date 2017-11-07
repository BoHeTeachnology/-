<?php
class XvpOrderDeliverRequest
{
     private $apiParas = array();

     private $deliver_date;

     public function getDeliverDate()
     {
         return $this->$deliver_date;
     }

     public function setDeliverDate($deliver_date)
     {
         $this->deliver_date = $deliver_date;
         $this->apiParas["deliver_date"] = $deliver_date;
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

     private $logistics_num;

     public function getLogisticsNum()
     {
         return $this->$logistics_num;
     }

     public function setLogisticsNum($logistics_num)
     {
         $this->logistics_num = $logistics_num;
         $this->apiParas["logistics_num"] = $logistics_num;
     }

     private $logistic_flg;

     public function getLogisticFlg()
     {
         return $this->$logistic_flg;
     }

     public function setLogisticFlg($logistic_flg)
     {
         $this->logistic_flg = $logistic_flg;
         $this->apiParas["logistic_flg"] = $logistic_flg;
     }

     private $order_item_id_list;

     public function getOrderItemIdList()
     {
         return $this->$order_item_id_list;
     }

     public function setOrderItemIdList($order_item_id_list)
     {
         $this->order_item_id_list = $order_item_id_list;
         $this->apiParas["order_item_id_list"] = $order_item_id_list;
     }

     private $logistics_company_code;

     public function getLogisticsCompanyCode()
     {
         return $this->$logistics_company_code;
     }

     public function setLogisticsCompanyCode($logistics_company_code)
     {
         $this->logistics_company_code = $logistics_company_code;
         $this->apiParas["logistics_company_code"] = $logistics_company_code;
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

     private $logistics_company_name;

     public function getLogisticsCompanyName()
     {
         return $this->$logistics_company_name;
     }

     public function setLogisticsCompanyName($logistics_company_name)
     {
         $this->logistics_company_name = $logistics_company_name;
         $this->apiParas["logistics_company_name"] = $logistics_company_name;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.xvp.order.deliver";
     }
     public function check()     {          }}
