<?php
class WheatfieldOrderMixserviceStoploanforzeroRequest
{
     private $apiParas = array();

     private $rootinstcd;

     public function getRootinstcd()
     {
         return $this->$rootinstcd;
     }

     public function setRootinstcd($rootinstcd)
     {
         $this->rootinstcd = $rootinstcd;
         $this->apiParas["rootinstcd"] = $rootinstcd;
     }

     private $userorderid;

     public function getUserorderid()
     {
         return $this->$userorderid;
     }

     public function setUserorderid($userorderid)
     {
         $this->userorderid = $userorderid;
         $this->apiParas["userorderid"] = $userorderid;
     }

     private $remark;

     public function getRemark()
     {
         return $this->$remark;
     }

     public function setRemark($remark)
     {
         $this->remark = $remark;
         $this->apiParas["remark"] = $remark;
     }

     private $userid;

     public function getUserid()
     {
         return $this->$userid;
     }

     public function setUserid($userid)
     {
         $this->userid = $userid;
         $this->apiParas["userid"] = $userid;
     }

     private $roottype;

     public function getRoottype()
     {
         return $this->$roottype;
     }

     public function setRoottype($roottype)
     {
         $this->roottype = $roottype;
         $this->apiParas["roottype"] = $roottype;
     }

     private $quitcoursedate;

     public function getQuitcoursedate()
     {
         return $this->$quitcoursedate;
     }

     public function setQuitcoursedate($quitcoursedate)
     {
         $this->quitcoursedate = $quitcoursedate;
         $this->apiParas["quitcoursedate"] = $quitcoursedate;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.order.mixservice.stoploanforzero";
     }
     public function check()     {          }}
