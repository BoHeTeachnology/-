<?php
class HfiveTravelHelpAddRequest
{
     private $apiParas = array();

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

     private $to_user_id;

     public function getToUserId()
     {
         return $this->$to_user_id;
     }

     public function setToUserId($to_user_id)
     {
         $this->to_user_id = $to_user_id;
         $this->apiParas["to_user_id"] = $to_user_id;
     }

     private $from_user_id;

     public function getFromUserId()
     {
         return $this->$from_user_id;
     }

     public function setFromUserId($from_user_id)
     {
         $this->from_user_id = $from_user_id;
         $this->apiParas["from_user_id"] = $from_user_id;
     }

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

     private $order_id;

     public function getOrderId()
     {
         return $this->$order_id;
     }

     public function setOrderId($order_id)
     {
         $this->order_id = $order_id;
         $this->apiParas["order_id"] = $order_id;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.travel.help.add";
     }
     public function check()     {          }}
