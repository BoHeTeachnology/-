<?php
class HfiveWeixinTemplateSendRequest
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

     private $send_data;

     public function getSendData()
     {
         return $this->$send_data;
     }

     public function setSendData($send_data)
     {
         $this->send_data = $send_data;
         $this->apiParas["send_data"] = $send_data;
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
         return "ruixue.hfive.weixin.template.send";
     }
     public function check()     {          }}
