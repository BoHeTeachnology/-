<?php
class FingertipMemberExchangeruleGetRequest
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fingertip.member.exchangerule.get";
     }
     public function check()     {          }}
