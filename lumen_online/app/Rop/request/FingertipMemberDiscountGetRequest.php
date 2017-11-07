<?php
class FingertipMemberDiscountGetRequest
{
     private $apiParas = array();

     private $products;

     public function getProducts()
     {
         return $this->$products;
     }

     public function setProducts($products)
     {
         $this->products = $products;
         $this->apiParas["products"] = $products;
     }

     private $open_id;

     public function getOpenId()
     {
         return $this->$open_id;
     }

     public function setOpenId($open_id)
     {
         $this->open_id = $open_id;
         $this->apiParas["open_id"] = $open_id;
     }

     private $public_id;

     public function getPublicId()
     {
         return $this->$public_id;
     }

     public function setPublicId($public_id)
     {
         $this->public_id = $public_id;
         $this->apiParas["public_id"] = $public_id;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fingertip.member.discount.get";
     }
     public function check()     {          }}
