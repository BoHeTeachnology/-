<?php
class HfiveFingerMemberCreateRequest
{
     private $apiParas = array();

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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.finger.member.create";
     }
     public function check()     {          }}
