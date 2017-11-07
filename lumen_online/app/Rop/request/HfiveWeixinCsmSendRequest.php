<?php
class HfiveWeixinCsmSendRequest
{
     private $apiParas = array();

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

     private $type;

     public function getType()
     {
         return $this->$type;
     }

     public function setType($type)
     {
         $this->type = $type;
         $this->apiParas["type"] = $type;
     }

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

     private $openids;

     public function getOpenids()
     {
         return $this->$openids;
     }

     public function setOpenids($openids)
     {
         $this->openids = $openids;
         $this->apiParas["openids"] = $openids;
     }

     private $id;

     public function getId()
     {
         return $this->$id;
     }

     public function setId($id)
     {
         $this->id = $id;
         $this->apiParas["id"] = $id;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.weixin.csm.send";
     }
     public function check()     {          }}
