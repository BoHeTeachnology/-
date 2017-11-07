<?php
class XvpCartUpdatecartitemcountRequest
{
     private $apiParas = array();

     private $count;

     public function getCount()
     {
         return $this->$count;
     }

     public function setCount($count)
     {
         $this->count = $count;
         $this->apiParas["count"] = $count;
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

     private $cart_item_id;

     public function getCartItemId()
     {
         return $this->$cart_item_id;
     }

     public function setCartItemId($cart_item_id)
     {
         $this->cart_item_id = $cart_item_id;
         $this->apiParas["cart_item_id"] = $cart_item_id;
     }

     private $xvp_uid;

     public function getXvpUid()
     {
         return $this->$xvp_uid;
     }

     public function setXvpUid($xvp_uid)
     {
         $this->xvp_uid = $xvp_uid;
         $this->apiParas["xvp_uid"] = $xvp_uid;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.xvp.cart.updatecartitemcount";
     }
     public function check()     {          }}
