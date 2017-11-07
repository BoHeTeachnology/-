<?php
class FengnianAhpFinanceAmountCalculateRequest
{
     private $apiParas = array();

     private $plat_id;

     public function getPlatId()
     {
         return $this->$plat_id;
     }

     public function setPlatId($plat_id)
     {
         $this->plat_id = $plat_id;
         $this->apiParas["plat_id"] = $plat_id;
     }

     private $discount_amount;

     public function getDiscountAmount()
     {
         return $this->$discount_amount;
     }

     public function setDiscountAmount($discount_amount)
     {
         $this->discount_amount = $discount_amount;
         $this->apiParas["discount_amount"] = $discount_amount;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.ahp.finance.amount.calculate";
     }
     public function check()     {          }}
