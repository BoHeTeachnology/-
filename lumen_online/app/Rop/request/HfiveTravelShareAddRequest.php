<?php
class HfiveTravelShareAddRequest
{
     private $apiParas = array();

     private $free_play_no;

     public function getFreePlayNo()
     {
         return $this->$free_play_no;
     }

     public function setFreePlayNo($free_play_no)
     {
         $this->free_play_no = $free_play_no;
         $this->apiParas["free_play_no"] = $free_play_no;
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

     private $view_spot_no;

     public function getViewSpotNo()
     {
         return $this->$view_spot_no;
     }

     public function setViewSpotNo($view_spot_no)
     {
         $this->view_spot_no = $view_spot_no;
         $this->apiParas["view_spot_no"] = $view_spot_no;
     }

     private $user_id;

     public function getUserId()
     {
         return $this->$user_id;
     }

     public function setUserId($user_id)
     {
         $this->user_id = $user_id;
         $this->apiParas["user_id"] = $user_id;
     }

     private $activity_no;

     public function getActivityNo()
     {
         return $this->$activity_no;
     }

     public function setActivityNo($activity_no)
     {
         $this->activity_no = $activity_no;
         $this->apiParas["activity_no"] = $activity_no;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.travel.share.add";
     }
     public function check()     {          }}
