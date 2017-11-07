<?php
class DpsQuartzListRequest
{
     private $apiParas = array();

     private $user_token;

     public function getUserToken()
     {
         return $this->$user_token;
     }

     public function setUserToken($user_token)
     {
         $this->user_token = $user_token;
         $this->apiParas["user_token"] = $user_token;
     }

     private $group_type;

     public function getGroupType()
     {
         return $this->$group_type;
     }

     public function setGroupType($group_type)
     {
         $this->group_type = $group_type;
         $this->apiParas["group_type"] = $group_type;
     }

     private $page_no;

     public function getPageNo()
     {
         return $this->$page_no;
     }

     public function setPageNo($page_no)
     {
         $this->page_no = $page_no;
         $this->apiParas["page_no"] = $page_no;
     }

     private $page_count;

     public function getPageCount()
     {
         return $this->$page_count;
     }

     public function setPageCount($page_count)
     {
         $this->page_count = $page_count;
         $this->apiParas["page_count"] = $page_count;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.dps.quartz.list";
     }
     public function check()     {          }}
