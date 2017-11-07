<?php
class HfiveUsercontainerUserGetRequest
{
     private $apiParas = array();

     private $project_mark;

     public function getProjectMark()
     {
         return $this->$project_mark;
     }

     public function setProjectMark($project_mark)
     {
         $this->project_mark = $project_mark;
         $this->apiParas["project_mark"] = $project_mark;
     }

     private $user_groups;

     public function getUserGroups()
     {
         return $this->$user_groups;
     }

     public function setUserGroups($user_groups)
     {
         $this->user_groups = $user_groups;
         $this->apiParas["user_groups"] = $user_groups;
     }

     private $account_id;

     public function getAccountId()
     {
         return $this->$account_id;
     }

     public function setAccountId($account_id)
     {
         $this->account_id = $account_id;
         $this->apiParas["account_id"] = $account_id;
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
         return "ruixue.hfive.usercontainer.user.get";
     }
     public function check()     {          }}
