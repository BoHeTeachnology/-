<?php
class HfiveWeixinKefuUpdateRequest
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.weixin.kefu.update";
     }
     public function check()     {          }}
