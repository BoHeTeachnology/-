<?php
class HfiveActivityDoubleelevenAddfansRequest
{
     private $apiParas = array();

     private $channel_id;

     public function getChannelId()
     {
         return $this->$channel_id;
     }

     public function setChannelId($channel_id)
     {
         $this->channel_id = $channel_id;
         $this->apiParas["channel_id"] = $channel_id;
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

     private $mobile;

     public function getMobile()
     {
         return $this->$mobile;
     }

     public function setMobile($mobile)
     {
         $this->mobile = $mobile;
         $this->apiParas["mobile"] = $mobile;
     }

     private $open_id;

     public function getOpenId()
     {
         return $this->$open_id;
     }

     public function setOpenId($open_id)
     {
         $this->open_id = $open_id;
         $this->apiParas["open_id"] = $open_id;
     }

     private $wechat_account;

     public function getWechatAccount()
     {
         return $this->$wechat_account;
     }

     public function setWechatAccount($wechat_account)
     {
         $this->wechat_account = $wechat_account;
         $this->apiParas["wechat_account"] = $wechat_account;
     }

     private $jrd_user_id;

     public function getJrdUserId()
     {
         return $this->$jrd_user_id;
     }

     public function setJrdUserId($jrd_user_id)
     {
         $this->jrd_user_id = $jrd_user_id;
         $this->apiParas["jrd_user_id"] = $jrd_user_id;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.activity.doubleeleven.addfans";
     }
     public function check()     {          }}
