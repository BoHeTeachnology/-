<?php
class FengnianCartDeleteRequest
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.cart.delete";
     }
     public function check()     {          }}
