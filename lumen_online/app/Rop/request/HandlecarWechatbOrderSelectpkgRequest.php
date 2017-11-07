<?php
class HandlecarWechatbOrderSelectpkgRequest
{
     private $apiParas = array();

     private $mrid;

     public function getMrid()
     {
         return $this->$mrid;
     }

     public function setMrid($mrid)
     {
         $this->mrid = $mrid;
         $this->apiParas["mrid"] = $mrid;
     }

     private $isselect;

     public function getIsselect()
     {
         return $this->$isselect;
     }

     public function setIsselect($isselect)
     {
         $this->isselect = $isselect;
         $this->apiParas["isselect"] = $isselect;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.handlecar.wechatb.order.selectpkg";
     }
     public function check()     {          }}
