<?php
class FingertipMemberPointdeductionRequest
{
     private $apiParas = array();

     private $public_id;

     public function getPublicId()
     {
         return $this->$public_id;
     }

     public function setPublicId($public_id)
     {
         $this->public_id = $public_id;
         $this->apiParas["public_id"] = $public_id;
     }

     private $points;

     public function getPoints()
     {
         return $this->$points;
     }

     public function setPoints($points)
     {
         $this->points = $points;
         $this->apiParas["points"] = $points;
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
         return "ruixue.fingertip.member.pointdeduction";
     }
     public function check()     {          }}
