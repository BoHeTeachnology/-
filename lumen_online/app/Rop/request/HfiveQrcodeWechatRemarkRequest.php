<?php
class HfiveQrcodeWechatRemarkRequest
{
     private $apiParas = array();

     private $scene_id;

     public function getSceneId()
     {
         return $this->$scene_id;
     }

     public function setSceneId($scene_id)
     {
         $this->scene_id = $scene_id;
         $this->apiParas["scene_id"] = $scene_id;
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

     private $remark;

     public function getRemark()
     {
         return $this->$remark;
     }

     public function setRemark($remark)
     {
         $this->remark = $remark;
         $this->apiParas["remark"] = $remark;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.qrcode.wechat.remark";
     }
     public function check()     {          }}
