<?php
class MdmMemberCreateRequest
{
     private $apiParas = array();

     private $member;

     public function getMember()
     {
         return $this->$member;
     }

     public function setMember($member)
     {
         $this->member = $member;
         $this->apiParas["member"] = $member;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.mdm.member.create";
     }
     public function check()     {          }}
