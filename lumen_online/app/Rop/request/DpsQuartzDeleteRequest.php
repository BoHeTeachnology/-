<?php
class DpsQuartzDeleteRequest
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

     private $quartz_name;

     public function getQuartzName()
     {
         return $this->$quartz_name;
     }

     public function setQuartzName($quartz_name)
     {
         $this->quartz_name = $quartz_name;
         $this->apiParas["quartz_name"] = $quartz_name;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.dps.quartz.delete";
     }
     public function check()     {          }}
