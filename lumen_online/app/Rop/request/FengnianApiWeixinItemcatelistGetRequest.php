<?php
class FengnianApiWeixinItemcatelistGetRequest
{
     private $apiParas = array();

     private $cate_name;

     public function getCateName()
     {
         return $this->$cate_name;
     }

     public function setCateName($cate_name)
     {
         $this->cate_name = $cate_name;
         $this->apiParas["cate_name"] = $cate_name;
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
         return "ruixue.fengnian.api.weixin.itemcatelist.get";
     }
     public function check()     {          }}
