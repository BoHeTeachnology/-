<?php
class HfiveUsercontainerUserAddRequest
{
     private $apiParas = array();

     private $account_name;

     public function getAccountName()
     {
         return $this->$account_name;
     }

     public function setAccountName($account_name)
     {
         $this->account_name = $account_name;
         $this->apiParas["account_name"] = $account_name;
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

     private $group_relation_key;

     public function getGroupRelationKey()
     {
         return $this->$group_relation_key;
     }

     public function setGroupRelationKey($group_relation_key)
     {
         $this->group_relation_key = $group_relation_key;
         $this->apiParas["group_relation_key"] = $group_relation_key;
     }

     private $group_id;

     public function getGroupId()
     {
         return $this->$group_id;
     }

     public function setGroupId($group_id)
     {
         $this->group_id = $group_id;
         $this->apiParas["group_id"] = $group_id;
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

     private $password;

     public function getPassword()
     {
         return $this->$password;
     }

     public function setPassword($password)
     {
         $this->password = $password;
         $this->apiParas["password"] = $password;
     }

     private $nickname;

     public function getNickname()
     {
         return $this->$nickname;
     }

     public function setNickname($nickname)
     {
         $this->nickname = $nickname;
         $this->apiParas["nickname"] = $nickname;
     }

     private $mobile_num;

     public function getMobileNum()
     {
         return $this->$mobile_num;
     }

     public function setMobileNum($mobile_num)
     {
         $this->mobile_num = $mobile_num;
         $this->apiParas["mobile_num"] = $mobile_num;
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

     private $email_addr;

     public function getEmailAddr()
     {
         return $this->$email_addr;
     }

     public function setEmailAddr($email_addr)
     {
         $this->email_addr = $email_addr;
         $this->apiParas["email_addr"] = $email_addr;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.usercontainer.user.add";
     }
     public function check()     {          }}
