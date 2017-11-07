<?php
class FengnianApiWeixinItemskuGetRequest
{
     private $apiParas = array();

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

     private $is_status;

     public function getIsStatus()
     {
         return $this->$is_status;
     }

     public function setIsStatus($is_status)
     {
         $this->is_status = $is_status;
         $this->apiParas["is_status"] = $is_status;
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

     private $sku_no;

     public function getSkuNo()
     {
         return $this->$sku_no;
     }

     public function setSkuNo($sku_no)
     {
         $this->sku_no = $sku_no;
         $this->apiParas["sku_no"] = $sku_no;
     }

     private $status;

     public function getStatus()
     {
         return $this->$status;
     }

     public function setStatus($status)
     {
         $this->status = $status;
         $this->apiParas["status"] = $status;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.api.weixin.itemsku.get";
     }
     public function check()     {          }}
