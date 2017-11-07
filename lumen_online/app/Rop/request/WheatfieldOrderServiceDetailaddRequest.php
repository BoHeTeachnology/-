<?php
class WheatfieldOrderServiceDetailaddRequest
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

     private $jsondata;

     public function getJsondata()
     {
         return $this->$jsondata;
     }

     public function setJsondata($jsondata)
     {
         $this->jsondata = $jsondata;
         $this->apiParas["jsondata"] = $jsondata;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.order.service.detailadd";
     }
     public function check()     {          }}
