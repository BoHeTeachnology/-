<?php
class FengnianCircleOrderReconciliationModifyRequest
{
     private $apiParas = array();

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

     private $is_valid;

     public function getIsValid()
     {
         return $this->$is_valid;
     }

     public function setIsValid($is_valid)
     {
         $this->is_valid = $is_valid;
         $this->apiParas["is_valid"] = $is_valid;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.circle.order.reconciliation.modify";
     }
     public function check()     {          }}
