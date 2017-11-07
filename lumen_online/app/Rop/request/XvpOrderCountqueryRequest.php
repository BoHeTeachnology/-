<?php
class XvpOrderCountqueryRequest
{
     private $apiParas = array();

     private $settle_flg;

     public function getSettleFlg()
     {
         return $this->$settle_flg;
     }

     public function setSettleFlg($settle_flg)
     {
         $this->settle_flg = $settle_flg;
         $this->apiParas["settle_flg"] = $settle_flg;
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

     private $end_pay;

     public function getEndPay()
     {
         return $this->$end_pay;
     }

     public function setEndPay($end_pay)
     {
         $this->end_pay = $end_pay;
         $this->apiParas["end_pay"] = $end_pay;
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

     private $begin_pay;

     public function getBeginPay()
     {
         return $this->$begin_pay;
     }

     public function setBeginPay($begin_pay)
     {
         $this->begin_pay = $begin_pay;
         $this->apiParas["begin_pay"] = $begin_pay;
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

     private $pay_flg;

     public function getPayFlg()
     {
         return $this->$pay_flg;
     }

     public function setPayFlg($pay_flg)
     {
         $this->pay_flg = $pay_flg;
         $this->apiParas["pay_flg"] = $pay_flg;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.xvp.order.countquery";
     }
     public function check()     {          }}
