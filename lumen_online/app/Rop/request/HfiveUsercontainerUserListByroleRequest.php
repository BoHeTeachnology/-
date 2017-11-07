<?php
class HfiveUsercontainerUserListByroleRequest
{
     private $apiParas = array();

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

     private $role_mark;

     public function getRoleMark()
     {
         return $this->$role_mark;
     }

     public function setRoleMark($role_mark)
     {
         $this->role_mark = $role_mark;
         $this->apiParas["role_mark"] = $role_mark;
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
         return "ruixue.hfive.usercontainer.user.list.byrole";
     }
     public function check()     {          }}
