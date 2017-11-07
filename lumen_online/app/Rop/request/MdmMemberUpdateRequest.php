<?php
class MdmMemberUpdateRequest
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

     private $warncombine;

     public function getWarncombine()
     {
         return $this->$warncombine;
     }

     public function setWarncombine($warncombine)
     {
         $this->warncombine = $warncombine;
         $this->apiParas["warncombine"] = $warncombine;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.mdm.member.update";
     }
     public function check()     {          }}
