<?php
class HfiveWeidianMemberQuerypagingRequest
{
     private $apiParas = array();

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

     private $max_total_score;

     public function getMaxTotalScore()
     {
         return $this->$max_total_score;
     }

     public function setMaxTotalScore($max_total_score)
     {
         $this->max_total_score = $max_total_score;
         $this->apiParas["max_total_score"] = $max_total_score;
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

     private $levels;

     public function getLevels()
     {
         return $this->$levels;
     }

     public function setLevels($levels)
     {
         $this->levels = $levels;
         $this->apiParas["levels"] = $levels;
     }

     private $nick_name;

     public function getNickName()
     {
         return $this->$nick_name;
     }

     public function setNickName($nick_name)
     {
         $this->nick_name = $nick_name;
         $this->apiParas["nick_name"] = $nick_name;
     }

     private $min_total_score;

     public function getMinTotalScore()
     {
         return $this->$min_total_score;
     }

     public function setMinTotalScore($min_total_score)
     {
         $this->min_total_score = $min_total_score;
         $this->apiParas["min_total_score"] = $min_total_score;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.weidian.member.querypaging";
     }
     public function check()     {          }}
