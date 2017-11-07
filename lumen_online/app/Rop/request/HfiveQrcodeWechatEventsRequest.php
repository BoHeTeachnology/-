<?php
class HfiveQrcodeWechatEventsRequest
{
     private $apiParas = array();

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

     private $distinct_flag;

     public function getDistinctFlag()
     {
         return $this->$distinct_flag;
     }

     public function setDistinctFlag($distinct_flag)
     {
         $this->distinct_flag = $distinct_flag;
         $this->apiParas["distinct_flag"] = $distinct_flag;
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

     private $flag;

     public function getFlag()
     {
         return $this->$flag;
     }

     public function setFlag($flag)
     {
         $this->flag = $flag;
         $this->apiParas["flag"] = $flag;
     }

     private $event_type;

     public function getEventType()
     {
         return $this->$event_type;
     }

     public function setEventType($event_type)
     {
         $this->event_type = $event_type;
         $this->apiParas["event_type"] = $event_type;
     }

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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.qrcode.wechat.events";
     }
     public function check()     {          }}
