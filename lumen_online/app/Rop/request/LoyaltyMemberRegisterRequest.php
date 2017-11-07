<?php
class LoyaltyMemberRegisterRequest
{
     private $apiParas = array();

     private $customer_number;

     public function getCustomerNumber()
     {
         return $this->$customer_number;
     }

     public function setCustomerNumber($customer_number)
     {
         $this->customer_number = $customer_number;
         $this->apiParas["customer_number"] = $customer_number;
     }

     private $related_member_number;

     public function getRelatedMemberNumber()
     {
         return $this->$related_member_number;
     }

     public function setRelatedMemberNumber($related_member_number)
     {
         $this->related_member_number = $related_member_number;
         $this->apiParas["related_member_number"] = $related_member_number;
     }

     private $plan_id;

     public function getPlanId()
     {
         return $this->$plan_id;
     }

     public function setPlanId($plan_id)
     {
         $this->plan_id = $plan_id;
         $this->apiParas["plan_id"] = $plan_id;
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

     private $id_card_number;

     public function getIdCardNumber()
     {
         return $this->$id_card_number;
     }

     public function setIdCardNumber($id_card_number)
     {
         $this->id_card_number = $id_card_number;
         $this->apiParas["id_card_number"] = $id_card_number;
     }

     private $customer_name;

     public function getCustomerName()
     {
         return $this->$customer_name;
     }

     public function setCustomerName($customer_name)
     {
         $this->customer_name = $customer_name;
         $this->apiParas["customer_name"] = $customer_name;
     }

     private $mobile_number;

     public function getMobileNumber()
     {
         return $this->$mobile_number;
     }

     public function setMobileNumber($mobile_number)
     {
         $this->mobile_number = $mobile_number;
         $this->apiParas["mobile_number"] = $mobile_number;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.loyalty.member.register";
     }
     public function check()     {          }}
