<?php
class XvpStoreaccountAddstorebankcardRequest
{
     private $apiParas = array();

     private $bank_name;

     public function getBankName()
     {
         return $this->$bank_name;
     }

     public function setBankName($bank_name)
     {
         $this->bank_name = $bank_name;
         $this->apiParas["bank_name"] = $bank_name;
     }

     private $bank_province_code;

     public function getBankProvinceCode()
     {
         return $this->$bank_province_code;
     }

     public function setBankProvinceCode($bank_province_code)
     {
         $this->bank_province_code = $bank_province_code;
         $this->apiParas["bank_province_code"] = $bank_province_code;
     }

     private $account_type;

     public function getAccountType()
     {
         return $this->$account_type;
     }

     public function setAccountType($account_type)
     {
         $this->account_type = $account_type;
         $this->apiParas["account_type"] = $account_type;
     }

     private $bank_branch_name;

     public function getBankBranchName()
     {
         return $this->$bank_branch_name;
     }

     public function setBankBranchName($bank_branch_name)
     {
         $this->bank_branch_name = $bank_branch_name;
         $this->apiParas["bank_branch_name"] = $bank_branch_name;
     }

     private $bank_code;

     public function getBankCode()
     {
         return $this->$bank_code;
     }

     public function setBankCode($bank_code)
     {
         $this->bank_code = $bank_code;
         $this->apiParas["bank_code"] = $bank_code;
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

     private $bank_city_code;

     public function getBankCityCode()
     {
         return $this->$bank_city_code;
     }

     public function setBankCityCode($bank_city_code)
     {
         $this->bank_city_code = $bank_city_code;
         $this->apiParas["bank_city_code"] = $bank_city_code;
     }

     private $card_no;

     public function getCardNo()
     {
         return $this->$card_no;
     }

     public function setCardNo($card_no)
     {
         $this->card_no = $card_no;
         $this->apiParas["card_no"] = $card_no;
     }

     private $store_id;

     public function getStoreId()
     {
         return $this->$store_id;
     }

     public function setStoreId($store_id)
     {
         $this->store_id = $store_id;
         $this->apiParas["store_id"] = $store_id;
     }

     private $bank_branch_code;

     public function getBankBranchCode()
     {
         return $this->$bank_branch_code;
     }

     public function setBankBranchCode($bank_branch_code)
     {
         $this->bank_branch_code = $bank_branch_code;
         $this->apiParas["bank_branch_code"] = $bank_branch_code;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.xvp.storeaccount.addstorebankcard";
     }
     public function check()     {          }}
