<?php
class FengnianCircleOrderCreateRequest
{
     private $apiParas = array();

     private $original_money;

     public function getOriginalMoney()
     {
         return $this->$original_money;
     }

     public function setOriginalMoney($original_money)
     {
         $this->original_money = $original_money;
         $this->apiParas["original_money"] = $original_money;
     }

     private $red_package;

     public function getRedPackage()
     {
         return $this->$red_package;
     }

     public function setRedPackage($red_package)
     {
         $this->red_package = $red_package;
         $this->apiParas["red_package"] = $red_package;
     }

     private $merchant_order_no;

     public function getMerchantOrderNo()
     {
         return $this->$merchant_order_no;
     }

     public function setMerchantOrderNo($merchant_order_no)
     {
         $this->merchant_order_no = $merchant_order_no;
         $this->apiParas["merchant_order_no"] = $merchant_order_no;
     }

     private $discount;

     public function getDiscount()
     {
         return $this->$discount;
     }

     public function setDiscount($discount)
     {
         $this->discount = $discount;
         $this->apiParas["discount"] = $discount;
     }

     private $full_money;

     public function getFullMoney()
     {
         return $this->$full_money;
     }

     public function setFullMoney($full_money)
     {
         $this->full_money = $full_money;
         $this->apiParas["full_money"] = $full_money;
     }

     private $merchant_name;

     public function getMerchantName()
     {
         return $this->$merchant_name;
     }

     public function setMerchantName($merchant_name)
     {
         $this->merchant_name = $merchant_name;
         $this->apiParas["merchant_name"] = $merchant_name;
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

     private $substract_money;

     public function getSubstractMoney()
     {
         return $this->$substract_money;
     }

     public function setSubstractMoney($substract_money)
     {
         $this->substract_money = $substract_money;
         $this->apiParas["substract_money"] = $substract_money;
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

     private $receive_user_id;

     public function getReceiveUserId()
     {
         return $this->$receive_user_id;
     }

     public function setReceiveUserId($receive_user_id)
     {
         $this->receive_user_id = $receive_user_id;
         $this->apiParas["receive_user_id"] = $receive_user_id;
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

     private $head_img;

     public function getHeadImg()
     {
         return $this->$head_img;
     }

     public function setHeadImg($head_img)
     {
         $this->head_img = $head_img;
         $this->apiParas["head_img"] = $head_img;
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

     private $ip;

     public function getIp()
     {
         return $this->$ip;
     }

     public function setIp($ip)
     {
         $this->ip = $ip;
         $this->apiParas["ip"] = $ip;
     }

     private $contract_name;

     public function getContractName()
     {
         return $this->$contract_name;
     }

     public function setContractName($contract_name)
     {
         $this->contract_name = $contract_name;
         $this->apiParas["contract_name"] = $contract_name;
     }

     private $merchant_profits;

     public function getMerchantProfits()
     {
         return $this->$merchant_profits;
     }

     public function setMerchantProfits($merchant_profits)
     {
         $this->merchant_profits = $merchant_profits;
         $this->apiParas["merchant_profits"] = $merchant_profits;
     }

     private $discount_money;

     public function getDiscountMoney()
     {
         return $this->$discount_money;
     }

     public function setDiscountMoney($discount_money)
     {
         $this->discount_money = $discount_money;
         $this->apiParas["discount_money"] = $discount_money;
     }

     private $trade_money;

     public function getTradeMoney()
     {
         return $this->$trade_money;
     }

     public function setTradeMoney($trade_money)
     {
         $this->trade_money = $trade_money;
         $this->apiParas["trade_money"] = $trade_money;
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

     private $undiscount_money;

     public function getUndiscountMoney()
     {
         return $this->$undiscount_money;
     }

     public function setUndiscountMoney($undiscount_money)
     {
         $this->undiscount_money = $undiscount_money;
         $this->apiParas["undiscount_money"] = $undiscount_money;
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

     private $phone_num;

     public function getPhoneNum()
     {
         return $this->$phone_num;
     }

     public function setPhoneNum($phone_num)
     {
         $this->phone_num = $phone_num;
         $this->apiParas["phone_num"] = $phone_num;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.circle.order.create";
     }
     public function check()     {          }}
