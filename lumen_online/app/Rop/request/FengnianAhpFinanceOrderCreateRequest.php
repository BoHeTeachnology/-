<?php
class FengnianAhpFinanceOrderCreateRequest
{
     private $apiParas = array();

     private $order_type;

     public function getOrderType()
     {
         return $this->$order_type;
     }

     public function setOrderType($order_type)
     {
         $this->order_type = $order_type;
         $this->apiParas["order_type"] = $order_type;
     }

     private $no_discount_amount;

     public function getNoDiscountAmount()
     {
         return $this->$no_discount_amount;
     }

     public function setNoDiscountAmount($no_discount_amount)
     {
         $this->no_discount_amount = $no_discount_amount;
         $this->apiParas["no_discount_amount"] = $no_discount_amount;
     }

     private $user_fee;

     public function getUserFee()
     {
         return $this->$user_fee;
     }

     public function setUserFee($user_fee)
     {
         $this->user_fee = $user_fee;
         $this->apiParas["user_fee"] = $user_fee;
     }

     private $merchant_code;

     public function getMerchantCode()
     {
         return $this->$merchant_code;
     }

     public function setMerchantCode($merchant_code)
     {
         $this->merchant_code = $merchant_code;
         $this->apiParas["merchant_code"] = $merchant_code;
     }

     private $checked_flag;

     public function getCheckedFlag()
     {
         return $this->$checked_flag;
     }

     public function setCheckedFlag($checked_flag)
     {
         $this->checked_flag = $checked_flag;
         $this->apiParas["checked_flag"] = $checked_flag;
     }

     private $remark;

     public function getRemark()
     {
         return $this->$remark;
     }

     public function setRemark($remark)
     {
         $this->remark = $remark;
         $this->apiParas["remark"] = $remark;
     }

     private $busi_source;

     public function getBusiSource()
     {
         return $this->$busi_source;
     }

     public function setBusiSource($busi_source)
     {
         $this->busi_source = $busi_source;
         $this->apiParas["busi_source"] = $busi_source;
     }

     private $func_code;

     public function getFuncCode()
     {
         return $this->$func_code;
     }

     public function setFuncCode($func_code)
     {
         $this->func_code = $func_code;
         $this->apiParas["func_code"] = $func_code;
     }

     private $acc_amount;

     public function getAccAmount()
     {
         return $this->$acc_amount;
     }

     public function setAccAmount($acc_amount)
     {
         $this->acc_amount = $acc_amount;
         $this->apiParas["acc_amount"] = $acc_amount;
     }

     private $bank_code;

     public function getBankCode()
     {
         return $this->$bank_code;
     }

     public function setBankCode($bank_code)
     {
         $this->bank_code = $bank_code;
         $this->apiParas["bank_code"] = $bank_code;
     }

     private $agree_id;

     public function getAgreeId()
     {
         return $this->$agree_id;
     }

     public function setAgreeId($agree_id)
     {
         $this->agree_id = $agree_id;
         $this->apiParas["agree_id"] = $agree_id;
     }

     private $merchant_id;

     public function getMerchantId()
     {
         return $this->$merchant_id;
     }

     public function setMerchantId($merchant_id)
     {
         $this->merchant_id = $merchant_id;
         $this->apiParas["merchant_id"] = $merchant_id;
     }

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

     private $request_no;

     public function getRequestNo()
     {
         return $this->$request_no;
     }

     public function setRequestNo($request_no)
     {
         $this->request_no = $request_no;
         $this->apiParas["request_no"] = $request_no;
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

     private $user_ip_address;

     public function getUserIpAddress()
     {
         return $this->$user_ip_address;
     }

     public function setUserIpAddress($user_ip_address)
     {
         $this->user_ip_address = $user_ip_address;
         $this->apiParas["user_ip_address"] = $user_ip_address;
     }

     private $relation_id;

     public function getRelationId()
     {
         return $this->$relation_id;
     }

     public function setRelationId($relation_id)
     {
         $this->relation_id = $relation_id;
         $this->apiParas["relation_id"] = $relation_id;
     }

     private $id;

     public function getId()
     {
         return $this->$id;
     }

     public function setId($id)
     {
         $this->id = $id;
         $this->apiParas["id"] = $id;
     }

     private $order_amount;

     public function getOrderAmount()
     {
         return $this->$order_amount;
     }

     public function setOrderAmount($order_amount)
     {
         $this->order_amount = $order_amount;
         $this->apiParas["order_amount"] = $order_amount;
     }

     private $order_count;

     public function getOrderCount()
     {
         return $this->$order_count;
     }

     public function setOrderCount($order_count)
     {
         $this->order_count = $order_count;
         $this->apiParas["order_count"] = $order_count;
     }

     private $mplat_id;

     public function getMplatId()
     {
         return $this->$mplat_id;
     }

     public function setMplatId($mplat_id)
     {
         $this->mplat_id = $mplat_id;
         $this->apiParas["mplat_id"] = $mplat_id;
     }

     private $request_time;

     public function getRequestTime()
     {
         return $this->$request_time;
     }

     public function setRequestTime($request_time)
     {
         $this->request_time = $request_time;
         $this->apiParas["request_time"] = $request_time;
     }

     private $order_date;

     public function getOrderDate()
     {
         return $this->$order_date;
     }

     public function setOrderDate($order_date)
     {
         $this->order_date = $order_date;
         $this->apiParas["order_date"] = $order_date;
     }

     private $trade_flow_no;

     public function getTradeFlowNo()
     {
         return $this->$trade_flow_no;
     }

     public function setTradeFlowNo($trade_flow_no)
     {
         $this->trade_flow_no = $trade_flow_no;
         $this->apiParas["trade_flow_no"] = $trade_flow_no;
     }

     private $fee_amount;

     public function getFeeAmount()
     {
         return $this->$fee_amount;
     }

     public function setFeeAmount($fee_amount)
     {
         $this->fee_amount = $fee_amount;
         $this->apiParas["fee_amount"] = $fee_amount;
     }

     private $authcode;

     public function getAuthcode()
     {
         return $this->$authcode;
     }

     public function setAuthcode($authcode)
     {
         $this->authcode = $authcode;
         $this->apiParas["authcode"] = $authcode;
     }

     private $uplat_id;

     public function getUplatId()
     {
         return $this->$uplat_id;
     }

     public function setUplatId($uplat_id)
     {
         $this->uplat_id = $uplat_id;
         $this->apiParas["uplat_id"] = $uplat_id;
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

     private $red_packets_amount;

     public function getRedPacketsAmount()
     {
         return $this->$red_packets_amount;
     }

     public function setRedPacketsAmount($red_packets_amount)
     {
         $this->red_packets_amount = $red_packets_amount;
         $this->apiParas["red_packets_amount"] = $red_packets_amount;
     }

     private $money_status;

     public function getMoneyStatus()
     {
         return $this->$money_status;
     }

     public function setMoneyStatus($money_status)
     {
         $this->money_status = $money_status;
         $this->apiParas["money_status"] = $money_status;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.ahp.finance.order.create";
     }
     public function check()     {          }}
