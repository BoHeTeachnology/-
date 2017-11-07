<?php
class HfiveQrcodeWechatCreateRequest
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

     private $scene_type;

     public function getSceneType()
     {
         return $this->$scene_type;
     }

     public function setSceneType($scene_type)
     {
         $this->scene_type = $scene_type;
         $this->apiParas["scene_type"] = $scene_type;
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

     private $effective_times;

     public function getEffectiveTimes()
     {
         return $this->$effective_times;
     }

     public function setEffectiveTimes($effective_times)
     {
         $this->effective_times = $effective_times;
         $this->apiParas["effective_times"] = $effective_times;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.qrcode.wechat.create";
     }
     public function check()     {          }}
