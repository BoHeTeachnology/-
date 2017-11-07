<?php
class HfiveWeixinTemplateCreateRequest
{
     private $apiParas = array();

     private $template_name;

     public function getTemplateName()
     {
         return $this->$template_name;
     }

     public function setTemplateName($template_name)
     {
         $this->template_name = $template_name;
         $this->apiParas["template_name"] = $template_name;
     }

     private $template_no;

     public function getTemplateNo()
     {
         return $this->$template_no;
     }

     public function setTemplateNo($template_no)
     {
         $this->template_no = $template_no;
         $this->apiParas["template_no"] = $template_no;
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

     private $uid;

     public function getUid()
     {
         return $this->$uid;
     }

     public function setUid($uid)
     {
         $this->uid = $uid;
         $this->apiParas["uid"] = $uid;
     }

     private $template_id;

     public function getTemplateId()
     {
         return $this->$template_id;
     }

     public function setTemplateId($template_id)
     {
         $this->template_id = $template_id;
         $this->apiParas["template_id"] = $template_id;
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
         return "ruixue.hfive.weixin.template.create";
     }
     public function check()     {          }}
