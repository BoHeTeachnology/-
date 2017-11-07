<?php
class HfiveWeidianMemberPropertyextensionSaveRequest
{
     private $apiParas = array();

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

     private $params_json;

     public function getParamsJson()
     {
         return $this->$params_json;
     }

     public function setParamsJson($params_json)
     {
         $this->params_json = $params_json;
         $this->apiParas["params_json"] = $params_json;
     }

     private $params_json_ext;

     public function getParamsJsonExt()
     {
         return $this->$params_json_ext;
     }

     public function setParamsJsonExt($params_json_ext)
     {
         $this->params_json_ext = $params_json_ext;
         $this->apiParas["params_json_ext"] = $params_json_ext;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.weidian.member.propertyextension.save";
     }
     public function check()     {          }}
