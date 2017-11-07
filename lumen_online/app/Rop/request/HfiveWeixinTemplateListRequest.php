<?php
class HfiveWeixinTemplateListRequest
{
     private $apiParas = array();

     private $page_num;

     public function getPageNum()
     {
         return $this->$page_num;
     }

     public function setPageNum($page_num)
     {
         $this->page_num = $page_num;
         $this->apiParas["page_num"] = $page_num;
     }

     private $page_size;

     public function getPageSize()
     {
         return $this->$page_size;
     }

     public function setPageSize($page_size)
     {
         $this->page_size = $page_size;
         $this->apiParas["page_size"] = $page_size;
     }

     private $weixin_account;

     public function getWeixinAccount()
     {
         return $this->$weixin_account;
     }

     public function setWeixinAccount($weixin_account)
     {
         $this->weixin_account = $weixin_account;
         $this->apiParas["weixin_account"] = $weixin_account;
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
         return "ruixue.hfive.weixin.template.list";
     }
     public function check()     {          }}
