<?php
class HfiveWeidianActivityPosterThemeListRequest
{
     private $apiParas = array();

     private $theme_id;

     public function getThemeId()
     {
         return $this->$theme_id;
     }

     public function setThemeId($theme_id)
     {
         $this->theme_id = $theme_id;
         $this->apiParas["theme_id"] = $theme_id;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.weidian.activity.poster.theme.list";
     }
     public function check()     {          }}
