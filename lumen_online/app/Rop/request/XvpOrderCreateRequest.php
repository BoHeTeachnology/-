<?php
class XvpOrderCreateRequest
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

     private $logistic_fee;

     public function getLogisticFee()
     {
         return $this->$logistic_fee;
     }

     public function setLogisticFee($logistic_fee)
     {
         $this->logistic_fee = $logistic_fee;
         $this->apiParas["logistic_fee"] = $logistic_fee;
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

     private $buy_sku_list;

     public function getBuySkuList()
     {
         return $this->$buy_sku_list;
     }

     public function setBuySkuList($buy_sku_list)
     {
         $this->buy_sku_list = $buy_sku_list;
         $this->apiParas["buy_sku_list"] = $buy_sku_list;
     }

     private $pay_type;

     public function getPayType()
     {
         return $this->$pay_type;
     }

     public function setPayType($pay_type)
     {
         $this->pay_type = $pay_type;
         $this->apiParas["pay_type"] = $pay_type;
     }

     private $extend_fields;

     public function getExtendFields()
     {
         return $this->$extend_fields;
     }

     public function setExtendFields($extend_fields)
     {
         $this->extend_fields = $extend_fields;
         $this->apiParas["extend_fields"] = $extend_fields;
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

     private $addressee_id;

     public function getAddresseeId()
     {
         return $this->$addressee_id;
     }

     public function setAddresseeId($addressee_id)
     {
         $this->addressee_id = $addressee_id;
         $this->apiParas["addressee_id"] = $addressee_id;
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

     private $user_remark;

     public function getUserRemark()
     {
         return $this->$user_remark;
     }

     public function setUserRemark($user_remark)
     {
         $this->user_remark = $user_remark;
         $this->apiParas["user_remark"] = $user_remark;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.xvp.order.create";
     }
     public function check()     {          }}
