<?php
class HfiveWeidianMemberPointUpdateRequest
{
     private $apiParas = array();

     private $member_ids;

     public function getMemberIds()
     {
         return $this->$member_ids;
     }

     public function setMemberIds($member_ids)
     {
         $this->member_ids = $member_ids;
         $this->apiParas["member_ids"] = $member_ids;
     }

     private $clearing_flag;

     public function getClearingFlag()
     {
         return $this->$clearing_flag;
     }

     public function setClearingFlag($clearing_flag)
     {
         $this->clearing_flag = $clearing_flag;
         $this->apiParas["clearing_flag"] = $clearing_flag;
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

     private $point_num;

     public function getPointNum()
     {
         return $this->$point_num;
     }

     public function setPointNum($point_num)
     {
         $this->point_num = $point_num;
         $this->apiParas["point_num"] = $point_num;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.weidian.member.point.update";
     }
     public function check()     {          }}
