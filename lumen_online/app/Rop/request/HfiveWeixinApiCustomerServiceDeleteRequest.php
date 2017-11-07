<?php
class HfiveWeixinApiCustomerServiceDeleteRequest
{
     private $apiParas = array();

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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.weixin.api.customer.service.delete";
     }
     public function check()     {          }}
