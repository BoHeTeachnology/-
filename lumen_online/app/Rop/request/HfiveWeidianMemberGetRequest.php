<?php
class HfiveWeidianMemberGetRequest
{
     private $apiParas = array();

     private $avial_score_min;

     public function getAvialScoreMin()
     {
         return $this->$avial_score_min;
     }

     public function setAvialScoreMin($avial_score_min)
     {
         $this->avial_score_min = $avial_score_min;
         $this->apiParas["avial_score_min"] = $avial_score_min;
     }

     private $level;

     public function getLevel()
     {
         return $this->$level;
     }

     public function setLevel($level)
     {
         $this->level = $level;
         $this->apiParas["level"] = $level;
     }

     private $name;

     public function getName()
     {
         return $this->$name;
     }

     public function setName($name)
     {
         $this->name = $name;
         $this->apiParas["name"] = $name;
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

     private $phone;

     public function getPhone()
     {
         return $this->$phone;
     }

     public function setPhone($phone)
     {
         $this->phone = $phone;
         $this->apiParas["phone"] = $phone;
     }

     private $member_id;

     public function getMemberId()
     {
         return $this->$member_id;
     }

     public function setMemberId($member_id)
     {
         $this->member_id = $member_id;
         $this->apiParas["member_id"] = $member_id;
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

     private $store_id;

     public function getStoreId()
     {
         return $this->$store_id;
     }

     public function setStoreId($store_id)
     {
         $this->store_id = $store_id;
         $this->apiParas["store_id"] = $store_id;
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

     private $avial_score_max;

     public function getAvialScoreMax()
     {
         return $this->$avial_score_max;
     }

     public function setAvialScoreMax($avial_score_max)
     {
         $this->avial_score_max = $avial_score_max;
         $this->apiParas["avial_score_max"] = $avial_score_max;
     }

     private $open_id;

     public function getOpenId()
     {
         return $this->$open_id;
     }

     public function setOpenId($open_id)
     {
         $this->open_id = $open_id;
         $this->apiParas["open_id"] = $open_id;
     }

     private $sex;

     public function getSex()
     {
         return $this->$sex;
     }

     public function setSex($sex)
     {
         $this->sex = $sex;
         $this->apiParas["sex"] = $sex;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.weidian.member.get";
     }
     public function check()     {          }}
