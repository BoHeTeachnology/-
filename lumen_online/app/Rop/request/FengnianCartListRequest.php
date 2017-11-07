<?php
class FengnianCartListRequest
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

     private $update_begin_time;

     public function getUpdateBeginTime()
     {
         return $this->$update_begin_time;
     }

     public function setUpdateBeginTime($update_begin_time)
     {
         $this->update_begin_time = $update_begin_time;
         $this->apiParas["update_begin_time"] = $update_begin_time;
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

     private $create_end_time;

     public function getCreateEndTime()
     {
         return $this->$create_end_time;
     }

     public function setCreateEndTime($create_end_time)
     {
         $this->create_end_time = $create_end_time;
         $this->apiParas["create_end_time"] = $create_end_time;
     }

     private $create_begin_time;

     public function getCreateBeginTime()
     {
         return $this->$create_begin_time;
     }

     public function setCreateBeginTime($create_begin_time)
     {
         $this->create_begin_time = $create_begin_time;
         $this->apiParas["create_begin_time"] = $create_begin_time;
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

     private $cart_id;

     public function getCartId()
     {
         return $this->$cart_id;
     }

     public function setCartId($cart_id)
     {
         $this->cart_id = $cart_id;
         $this->apiParas["cart_id"] = $cart_id;
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

     private $order_by;

     public function getOrderBy()
     {
         return $this->$order_by;
     }

     public function setOrderBy($order_by)
     {
         $this->order_by = $order_by;
         $this->apiParas["order_by"] = $order_by;
     }

     private $update_end_time;

     public function getUpdateEndTime()
     {
         return $this->$update_end_time;
     }

     public function setUpdateEndTime($update_end_time)
     {
         $this->update_end_time = $update_end_time;
         $this->apiParas["update_end_time"] = $update_end_time;
     }

     private $buy_userid;

     public function getBuyUserid()
     {
         return $this->$buy_userid;
     }

     public function setBuyUserid($buy_userid)
     {
         $this->buy_userid = $buy_userid;
         $this->apiParas["buy_userid"] = $buy_userid;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.cart.list";
     }
     public function check()     {          }}
