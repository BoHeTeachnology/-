<?php
class HfiveTravelProjectListByviewportitemnoRequest
{
     private $apiParas = array();

     private $frozen;

     public function getFrozen()
     {
         return $this->$frozen;
     }

     public function setFrozen($frozen)
     {
         $this->frozen = $frozen;
         $this->apiParas["frozen"] = $frozen;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.travel.project.list.byviewportitemno";
     }
     public function check()     {          }}
