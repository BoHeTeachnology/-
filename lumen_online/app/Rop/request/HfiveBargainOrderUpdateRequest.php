<?php
class HfiveBargainOrderUpdateRequest
{
     private $apiParas = array();

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

     private $delivery_compid;

     public function getDeliveryCompid()
     {
         return $this->$delivery_compid;
     }

     public function setDeliveryCompid($delivery_compid)
     {
         $this->delivery_compid = $delivery_compid;
         $this->apiParas["delivery_compid"] = $delivery_compid;
     }

     private $to_company_key;

     public function getToCompanyKey()
     {
         return $this->$to_company_key;
     }

     public function setToCompanyKey($to_company_key)
     {
         $this->to_company_key = $to_company_key;
         $this->apiParas["to_company_key"] = $to_company_key;
     }

     private $delivery_money;

     public function getDeliveryMoney()
     {
         return $this->$delivery_money;
     }

     public function setDeliveryMoney($delivery_money)
     {
         $this->delivery_money = $delivery_money;
         $this->apiParas["delivery_money"] = $delivery_money;
     }

     private $order_points;

     public function getOrderPoints()
     {
         return $this->$order_points;
     }

     public function setOrderPoints($order_points)
     {
         $this->order_points = $order_points;
         $this->apiParas["order_points"] = $order_points;
     }

     private $pay_phone;

     public function getPayPhone()
     {
         return $this->$pay_phone;
     }

     public function setPayPhone($pay_phone)
     {
         $this->pay_phone = $pay_phone;
         $this->apiParas["pay_phone"] = $pay_phone;
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

     private $end_time;

     public function getEndTime()
     {
         return $this->$end_time;
     }

     public function setEndTime($end_time)
     {
         $this->end_time = $end_time;
         $this->apiParas["end_time"] = $end_time;
     }

     private $order_bill;

     public function getOrderBill()
     {
         return $this->$order_bill;
     }

     public function setOrderBill($order_bill)
     {
         $this->order_bill = $order_bill;
         $this->apiParas["order_bill"] = $order_bill;
     }

     private $order_status;

     public function getOrderStatus()
     {
         return $this->$order_status;
     }

     public function setOrderStatus($order_status)
     {
         $this->order_status = $order_status;
         $this->apiParas["order_status"] = $order_status;
     }

     private $pay_userid;

     public function getPayUserid()
     {
         return $this->$pay_userid;
     }

     public function setPayUserid($pay_userid)
     {
         $this->pay_userid = $pay_userid;
         $this->apiParas["pay_userid"] = $pay_userid;
     }

     private $order_discount_money;

     public function getOrderDiscountMoney()
     {
         return $this->$order_discount_money;
     }

     public function setOrderDiscountMoney($order_discount_money)
     {
         $this->order_discount_money = $order_discount_money;
         $this->apiParas["order_discount_money"] = $order_discount_money;
     }

     private $rece_address;

     public function getReceAddress()
     {
         return $this->$rece_address;
     }

     public function setReceAddress($rece_address)
     {
         $this->rece_address = $rece_address;
         $this->apiParas["rece_address"] = $rece_address;
     }

     private $rece_userid;

     public function getReceUserid()
     {
         return $this->$rece_userid;
     }

     public function setReceUserid($rece_userid)
     {
         $this->rece_userid = $rece_userid;
         $this->apiParas["rece_userid"] = $rece_userid;
     }

     private $online_pay_status;

     public function getOnlinePayStatus()
     {
         return $this->$online_pay_status;
     }

     public function setOnlinePayStatus($online_pay_status)
     {
         $this->online_pay_status = $online_pay_status;
         $this->apiParas["online_pay_status"] = $online_pay_status;
     }

     private $rece_phone;

     public function getRecePhone()
     {
         return $this->$rece_phone;
     }

     public function setRecePhone($rece_phone)
     {
         $this->rece_phone = $rece_phone;
         $this->apiParas["rece_phone"] = $rece_phone;
     }

     private $pay_time;

     public function getPayTime()
     {
         return $this->$pay_time;
     }

     public function setPayTime($pay_time)
     {
         $this->pay_time = $pay_time;
         $this->apiParas["pay_time"] = $pay_time;
     }

     private $create_time;

     public function getCreateTime()
     {
         return $this->$create_time;
     }

     public function setCreateTime($create_time)
     {
         $this->create_time = $create_time;
         $this->apiParas["create_time"] = $create_time;
     }

     private $delivery_time;

     public function getDeliveryTime()
     {
         return $this->$delivery_time;
     }

     public function setDeliveryTime($delivery_time)
     {
         $this->delivery_time = $delivery_time;
         $this->apiParas["delivery_time"] = $delivery_time;
     }

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

     private $delivery_no;

     public function getDeliveryNo()
     {
         return $this->$delivery_no;
     }

     public function setDeliveryNo($delivery_no)
     {
         $this->delivery_no = $delivery_no;
         $this->apiParas["delivery_no"] = $delivery_no;
     }

     private $order_coupon;

     public function getOrderCoupon()
     {
         return $this->$order_coupon;
     }

     public function setOrderCoupon($order_coupon)
     {
         $this->order_coupon = $order_coupon;
         $this->apiParas["order_coupon"] = $order_coupon;
     }

     private $rece_user;

     public function getReceUser()
     {
         return $this->$rece_user;
     }

     public function setReceUser($rece_user)
     {
         $this->rece_user = $rece_user;
         $this->apiParas["rece_user"] = $rece_user;
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

     private $order_type_id;

     public function getOrderTypeId()
     {
         return $this->$order_type_id;
     }

     public function setOrderTypeId($order_type_id)
     {
         $this->order_type_id = $order_type_id;
         $this->apiParas["order_type_id"] = $order_type_id;
     }

     private $pay_user;

     public function getPayUser()
     {
         return $this->$pay_user;
     }

     public function setPayUser($pay_user)
     {
         $this->pay_user = $pay_user;
         $this->apiParas["pay_user"] = $pay_user;
     }

     private $order_all_money;

     public function getOrderAllMoney()
     {
         return $this->$order_all_money;
     }

     public function setOrderAllMoney($order_all_money)
     {
         $this->order_all_money = $order_all_money;
         $this->apiParas["order_all_money"] = $order_all_money;
     }

     private $order_details;

     public function getOrderDetails()
     {
         return $this->$order_details;
     }

     public function setOrderDetails($order_details)
     {
         $this->order_details = $order_details;
         $this->apiParas["order_details"] = $order_details;
     }

     private $order_pay_money;

     public function getOrderPayMoney()
     {
         return $this->$order_pay_money;
     }

     public function setOrderPayMoney($order_pay_money)
     {
         $this->order_pay_money = $order_pay_money;
         $this->apiParas["order_pay_money"] = $order_pay_money;
     }

     private $buy_remark;

     public function getBuyRemark()
     {
         return $this->$buy_remark;
     }

     public function setBuyRemark($buy_remark)
     {
         $this->buy_remark = $buy_remark;
         $this->apiParas["buy_remark"] = $buy_remark;
     }

     private $order_cash;

     public function getOrderCash()
     {
         return $this->$order_cash;
     }

     public function setOrderCash($order_cash)
     {
         $this->order_cash = $order_cash;
         $this->apiParas["order_cash"] = $order_cash;
     }

     private $sell_remark;

     public function getSellRemark()
     {
         return $this->$sell_remark;
     }

     public function setSellRemark($sell_remark)
     {
         $this->sell_remark = $sell_remark;
         $this->apiParas["sell_remark"] = $sell_remark;
     }

     private $receive_money;

     public function getReceiveMoney()
     {
         return $this->$receive_money;
     }

     public function setReceiveMoney($receive_money)
     {
         $this->receive_money = $receive_money;
         $this->apiParas["receive_money"] = $receive_money;
     }

     private $rece_tel;

     public function getReceTel()
     {
         return $this->$rece_tel;
     }

     public function setReceTel($rece_tel)
     {
         $this->rece_tel = $rece_tel;
         $this->apiParas["rece_tel"] = $rece_tel;
     }

     private $buy_user;

     public function getBuyUser()
     {
         return $this->$buy_user;
     }

     public function setBuyUser($buy_user)
     {
         $this->buy_user = $buy_user;
         $this->apiParas["buy_user"] = $buy_user;
     }

     private $buy_phone;

     public function getBuyPhone()
     {
         return $this->$buy_phone;
     }

     public function setBuyPhone($buy_phone)
     {
         $this->buy_phone = $buy_phone;
         $this->apiParas["buy_phone"] = $buy_phone;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.bargain.order.update";
     }
     public function check()     {          }}
