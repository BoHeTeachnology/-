<?php
class LoyaltyMemberPointReduceRequest
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

     private $order_number;

     public function getOrderNumber()
     {
         return $this->$order_number;
     }

     public function setOrderNumber($order_number)
     {
         $this->order_number = $order_number;
         $this->apiParas["order_number"] = $order_number;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.loyalty.member.point.reduce";
     }
     public function check()     {          }}
