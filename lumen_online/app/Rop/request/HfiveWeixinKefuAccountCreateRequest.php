<?php
class HfiveWeixinKefuAccountCreateRequest
{
     private $apiParas = array();

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

     private $password;

     public function getPassword()
     {
         return $this->$password;
     }

     public function setPassword($password)
     {
         $this->password = $password;
         $this->apiParas["password"] = $password;
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

     private $kefu_head_image_url;

     public function getKefuHeadImageUrl()
     {
         return $this->$kefu_head_image_url;
     }

     public function setKefuHeadImageUrl($kefu_head_image_url)
     {
         $this->kefu_head_image_url = $kefu_head_image_url;
         $this->apiParas["kefu_head_image_url"] = $kefu_head_image_url;
     }

     private $max_auto_accept;

     public function getMaxAutoAccept()
     {
         return $this->$max_auto_accept;
     }

     public function setMaxAutoAccept($max_auto_accept)
     {
         $this->max_auto_accept = $max_auto_accept;
         $this->apiParas["max_auto_accept"] = $max_auto_accept;
     }

     private $kefu_id;

     public function getKefuId()
     {
         return $this->$kefu_id;
     }

     public function setKefuId($kefu_id)
     {
         $this->kefu_id = $kefu_id;
         $this->apiParas["kefu_id"] = $kefu_id;
     }

     private $account_no;

     public function getAccountNo()
     {
         return $this->$account_no;
     }

     public function setAccountNo($account_no)
     {
         $this->account_no = $account_no;
         $this->apiParas["account_no"] = $account_no;
     }

     private $kefu_nickname;

     public function getKefuNickname()
     {
         return $this->$kefu_nickname;
     }

     public function setKefuNickname($kefu_nickname)
     {
         $this->kefu_nickname = $kefu_nickname;
         $this->apiParas["kefu_nickname"] = $kefu_nickname;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.weixin.kefu.account.create";
     }
     public function check()     {          }}
