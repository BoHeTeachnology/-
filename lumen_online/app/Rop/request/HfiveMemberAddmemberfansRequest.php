<?php
class HfiveMemberAddmemberfansRequest
{
     private $apiParas = array();

     private $pub_id;

     public function getPubId()
     {
         return $this->$pub_id;
     }

     public function setPubId($pub_id)
     {
         $this->pub_id = $pub_id;
         $this->apiParas["pub_id"] = $pub_id;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.member.addmemberfans";
     }
     public function check()     {          }}
