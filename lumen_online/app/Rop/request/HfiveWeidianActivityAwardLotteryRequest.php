<?php
class HfiveWeidianActivityAwardLotteryRequest
{
     private $apiParas = array();

     private $poster_path;

     public function getPosterPath()
     {
         return $this->$poster_path;
     }

     public function setPosterPath($poster_path)
     {
         $this->poster_path = $poster_path;
         $this->apiParas["poster_path"] = $poster_path;
     }

     private $activity_id;

     public function getActivityId()
     {
         return $this->$activity_id;
     }

     public function setActivityId($activity_id)
     {
         $this->activity_id = $activity_id;
         $this->apiParas["activity_id"] = $activity_id;
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

     private $share_type;

     public function getShareType()
     {
         return $this->$share_type;
     }

     public function setShareType($share_type)
     {
         $this->share_type = $share_type;
         $this->apiParas["share_type"] = $share_type;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.weidian.activity.award.lottery";
     }
     public function check()     {          }}
