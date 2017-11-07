<?php
class XvpTlstoreaccountUpdatecompanystorebankcardRequest
{
     private $apiParas = array();

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

     private $bank_branch_namebank_branch_name;

     public function getBankBranchNamebankBranchName()
     {
         return $this->$bank_branch_namebank_branch_name;
     }

     public function setBankBranchNamebankBranchName($bank_branch_namebank_branch_name)
     {
         $this->bank_branch_namebank_branch_name = $bank_branch_namebank_branch_name;
         $this->apiParas["bank_branch_namebank_branch_name"] = $bank_branch_namebank_branch_name;
     }

     private $id;

     public function getId()
     {
         return $this->$id;
     }

     public function setId($id)
     {
         $this->id = $id;
         $this->apiParas["id"] = $id;
     }

     private $buslince;

     public function getBuslince()
     {
         return $this->$buslince;
     }

     public function setBuslince($buslince)
     {
         $this->buslince = $buslince;
         $this->apiParas["buslince"] = $buslince;
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

     private $bank_province_name;

     public function getBankProvinceName()
     {
         return $this->$bank_province_name;
     }

     public function setBankProvinceName($bank_province_name)
     {
         $this->bank_province_name = $bank_province_name;
         $this->apiParas["bank_province_name"] = $bank_province_name;
     }

     private $company_name;

     public function getCompanyName()
     {
         return $this->$company_name;
     }

     public function setCompanyName($company_name)
     {
         $this->company_name = $company_name;
         $this->apiParas["company_name"] = $company_name;
     }

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

     private $bank_city_name;

     public function getBankCityName()
     {
         return $this->$bank_city_name;
     }

     public function setBankCityName($bank_city_name)
     {
         $this->bank_city_name = $bank_city_name;
         $this->apiParas["bank_city_name"] = $bank_city_name;
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

     private $buslince_pic;

     public function getBuslincePic()
     {
         return $this->$buslince_pic;
     }

     public function setBuslincePic($buslince_pic)
     {
         $this->buslince_pic = $buslince_pic;
         $this->apiParas["buslince_pic"] = $buslince_pic;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.xvp.tlstoreaccount.updatecompanystorebankcard";
     }
     public function check()     {          }}
