<?php
class HfiveWeixinTemplateDeleteRequest
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.weixin.template.delete";
     }
     public function check()     {          }}
