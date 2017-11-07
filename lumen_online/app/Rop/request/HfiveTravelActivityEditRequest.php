<?php
class HfiveTravelActivityEditRequest
{
     private $apiParas = array();

     private $hd_lbt_b;

     public function getHdLbtB()
     {
         return $this->$hd_lbt_b;
     }

     public function setHdLbtB($hd_lbt_b)
     {
         $this->hd_lbt_b = $hd_lbt_b;
         $this->apiParas["hd_lbt_b"] = $hd_lbt_b;
     }

     private $item_no;

     public function getItemNo()
     {
         return $this->$item_no;
     }

     public function setItemNo($item_no)
     {
         $this->item_no = $item_no;
         $this->apiParas["item_no"] = $item_no;
     }

     private $hd_lblink_c;

     public function getHdLblinkC()
     {
         return $this->$hd_lblink_c;
     }

     public function setHdLblinkC($hd_lblink_c)
     {
         $this->hd_lblink_c = $hd_lblink_c;
         $this->apiParas["hd_lblink_c"] = $hd_lblink_c;
     }

     private $hd_lbt_a;

     public function getHdLbtA()
     {
         return $this->$hd_lbt_a;
     }

     public function setHdLbtA($hd_lbt_a)
     {
         $this->hd_lbt_a = $hd_lbt_a;
         $this->apiParas["hd_lbt_a"] = $hd_lbt_a;
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

     private $hd_name;

     public function getHdName()
     {
         return $this->$hd_name;
     }

     public function setHdName($hd_name)
     {
         $this->hd_name = $hd_name;
         $this->apiParas["hd_name"] = $hd_name;
     }

     private $hd_lbt_c;

     public function getHdLbtC()
     {
         return $this->$hd_lbt_c;
     }

     public function setHdLbtC($hd_lbt_c)
     {
         $this->hd_lbt_c = $hd_lbt_c;
         $this->apiParas["hd_lbt_c"] = $hd_lbt_c;
     }

     private $hd_lblink_b;

     public function getHdLblinkB()
     {
         return $this->$hd_lblink_b;
     }

     public function setHdLblinkB($hd_lblink_b)
     {
         $this->hd_lblink_b = $hd_lblink_b;
         $this->apiParas["hd_lblink_b"] = $hd_lblink_b;
     }

     private $hd_lblink_a;

     public function getHdLblinkA()
     {
         return $this->$hd_lblink_a;
     }

     public function setHdLblinkA($hd_lblink_a)
     {
         $this->hd_lblink_a = $hd_lblink_a;
         $this->apiParas["hd_lblink_a"] = $hd_lblink_a;
     }

     private $hd_rule;

     public function getHdRule()
     {
         return $this->$hd_rule;
     }

     public function setHdRule($hd_rule)
     {
         $this->hd_rule = $hd_rule;
         $this->apiParas["hd_rule"] = $hd_rule;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.travel.activity.edit";
     }
     public function check()     {          }}
