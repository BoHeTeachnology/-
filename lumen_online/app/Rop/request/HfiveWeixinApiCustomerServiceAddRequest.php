<?php
class HfiveWeixinApiCustomerServiceAddRequest
{
     private $apiParas = array();

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

     private $kf_account;

     public function getKfAccount()
     {
         return $this->$kf_account;
     }

     public function setKfAccount($kf_account)
     {
         $this->kf_account = $kf_account;
         $this->apiParas["kf_account"] = $kf_account;
     }

     private $nickname;

     public function getNickname()
     {
         return $this->$nickname;
     }

     public function setNickname($nickname)
     {
         $this->nickname = $nickname;
         $this->apiParas["nickname"] = $nickname;
     }

     private $weixin_id;

     public function getWeixinId()
     {
         return $this->$weixin_id;
     }

     public function setWeixinId($weixin_id)
     {
         $this->weixin_id = $weixin_id;
         $this->apiParas["weixin_id"] = $weixin_id;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.weixin.api.customer.service.add";
     }
     public function check()     {          }}
