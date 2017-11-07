<?php
class HfiveQrcodeStaticCreateRequest
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

     private $content;

     public function getContent()
     {
         return $this->$content;
     }

     public function setContent($content)
     {
         $this->content = $content;
         $this->apiParas["content"] = $content;
     }

     private $company_id;

     public function getCompanyId()
     {
         return $this->$company_id;
     }

     public function setCompanyId($company_id)
     {
         $this->company_id = $company_id;
         $this->apiParas["company_id"] = $company_id;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.qrcode.static.create";
     }
     public function check()     {          }}
