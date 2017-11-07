<?php
class FengnianApiWeixinItemcateoptionresultGetRequest
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

     private $item_id;

     public function getItemId()
     {
         return $this->$item_id;
     }

     public function setItemId($item_id)
     {
         $this->item_id = $item_id;
         $this->apiParas["item_id"] = $item_id;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.api.weixin.itemcateoptionresult.get";
     }
     public function check()     {          }}
