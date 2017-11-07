<?php
class FengnianApiWeixinItemcateattrGetRequest
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

     private $cate_id;

     public function getCateId()
     {
         return $this->$cate_id;
     }

     public function setCateId($cate_id)
     {
         $this->cate_id = $cate_id;
         $this->apiParas["cate_id"] = $cate_id;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.api.weixin.itemcateattr.get";
     }
     public function check()     {          }}
