<?php
class HfiveWeixinTemplateAddRequest
{
     private $apiParas = array();

     private $account;

     public function getAccount()
     {
         return $this->$account;
     }

     public function setAccount($account)
     {
         $this->account = $account;
         $this->apiParas["account"] = $account;
     }

     private $template_id_short;

     public function getTemplateIdShort()
     {
         return $this->$template_id_short;
     }

     public function setTemplateIdShort($template_id_short)
     {
         $this->template_id_short = $template_id_short;
         $this->apiParas["template_id_short"] = $template_id_short;
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
         return "ruixue.hfive.weixin.template.add";
     }
     public function check()     {          }}
