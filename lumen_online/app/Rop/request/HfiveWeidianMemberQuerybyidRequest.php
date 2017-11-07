<?php
class HfiveWeidianMemberQuerybyidRequest
{
     private $apiParas = array();

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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.weidian.member.querybyid";
     }
     public function check()     {          }}
