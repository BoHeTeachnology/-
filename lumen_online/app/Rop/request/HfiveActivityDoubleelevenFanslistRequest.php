<?php
class HfiveActivityDoubleelevenFanslistRequest
{
     private $apiParas = array();

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
         return "ruixue.hfive.activity.doubleeleven.fanslist";
     }
     public function check()     {          }}
