<?php
class ExternalWeixinAuthorizationurlGetRequest
{
     private $apiParas = array();

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

     private $post_url;

     public function getPostUrl()
     {
         return $this->$post_url;
     }

     public function setPostUrl($post_url)
     {
         $this->post_url = $post_url;
         $this->apiParas["post_url"] = $post_url;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.external.weixin.authorizationurl.get";
     }
     public function check()     {          }}
