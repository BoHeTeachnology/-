<?php
class HfiveWeixinPubidGetRequest
{
     private $apiParas = array();

     private $request_url;

     public function getRequestUrl()
     {
         return $this->$request_url;
     }

     public function setRequestUrl($request_url)
     {
         $this->request_url = $request_url;
         $this->apiParas["request_url"] = $request_url;
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

     private $wx_id;

     public function getWxId()
     {
         return $this->$wx_id;
     }

     public function setWxId($wx_id)
     {
         $this->wx_id = $wx_id;
         $this->apiParas["wx_id"] = $wx_id;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.weixin.pubid.get";
     }
     public function check()     {          }}
