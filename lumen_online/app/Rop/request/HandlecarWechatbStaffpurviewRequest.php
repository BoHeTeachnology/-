<?php
class HandlecarWechatbStaffpurviewRequest
{
     private $apiParas = array();

     private $staffid;

     public function getStaffid()
     {
         return $this->$staffid;
     }

     public function setStaffid($staffid)
     {
         $this->staffid = $staffid;
         $this->apiParas["staffid"] = $staffid;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.handlecar.wechatb.staffpurview";
     }
     public function check()     {          }}
