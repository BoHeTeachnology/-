<?php
class FengnianApiWeixinItemcateoptionresultEditRequest
{
     private $apiParas = array();

     private $item_option_result;

     public function getItemOptionResult()
     {
         return $this->$item_option_result;
     }

     public function setItemOptionResult($item_option_result)
     {
         $this->item_option_result = $item_option_result;
         $this->apiParas["item_option_result"] = $item_option_result;
     }

     private $item_user_id;

     public function getItemUserId()
     {
         return $this->$item_user_id;
     }

     public function setItemUserId($item_user_id)
     {
         $this->item_user_id = $item_user_id;
         $this->apiParas["item_user_id"] = $item_user_id;
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

     private $item_cate_id;

     public function getItemCateId()
     {
         return $this->$item_cate_id;
     }

     public function setItemCateId($item_cate_id)
     {
         $this->item_cate_id = $item_cate_id;
         $this->apiParas["item_cate_id"] = $item_cate_id;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.api.weixin.itemcateoptionresult.edit";
     }
     public function check()     {          }}
