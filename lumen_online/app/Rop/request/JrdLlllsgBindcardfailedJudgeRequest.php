<?php
class JrdLlllsgBindcardfailedJudgeRequest
{
     private $apiParas = array();

     private $uid;

     public function getUid()
     {
         return $this->$uid;
     }

     public function setUid($uid)
     {
         $this->uid = $uid;
         $this->apiParas["uid"] = $uid;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.jrd.llllsg.bindcardfailed.judge";
     }
     public function check()     {          }}
