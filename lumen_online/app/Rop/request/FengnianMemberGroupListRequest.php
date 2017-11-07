<?php
class FengnianMemberGroupListRequest
{
     private $apiParas = array();

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

     private $group_name;

     public function getGroupName()
     {
         return $this->$group_name;
     }

     public function setGroupName($group_name)
     {
         $this->group_name = $group_name;
         $this->apiParas["group_name"] = $group_name;
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
         return "ruixue.fengnian.member.group.list";
     }
     public function check()     {          }}
