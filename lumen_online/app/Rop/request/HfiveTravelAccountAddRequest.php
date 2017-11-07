<?php
class HfiveTravelAccountAddRequest
{
     private $apiParas = array();

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

     private $area;

     public function getArea()
     {
         return $this->$area;
     }

     public function setArea($area)
     {
         $this->area = $area;
         $this->apiParas["area"] = $area;
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

     private $head_img_url;

     public function getHeadImgUrl()
     {
         return $this->$head_img_url;
     }

     public function setHeadImgUrl($head_img_url)
     {
         $this->head_img_url = $head_img_url;
         $this->apiParas["head_img_url"] = $head_img_url;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.travel.account.add";
     }
     public function check()     {          }}
