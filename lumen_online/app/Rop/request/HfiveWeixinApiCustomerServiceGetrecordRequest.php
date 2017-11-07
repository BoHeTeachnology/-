<?php
class HfiveWeixinApiCustomerServiceGetrecordRequest
{
     private $apiParas = array();

     private $pageindex;

     public function getPageindex()
     {
         return $this->$pageindex;
     }

     public function setPageindex($pageindex)
     {
         $this->pageindex = $pageindex;
         $this->apiParas["pageindex"] = $pageindex;
     }

     private $starttime;

     public function getStarttime()
     {
         return $this->$starttime;
     }

     public function setStarttime($starttime)
     {
         $this->starttime = $starttime;
         $this->apiParas["starttime"] = $starttime;
     }

     private $weixin_id;

     public function getWeixinId()
     {
         return $this->$weixin_id;
     }

     public function setWeixinId($weixin_id)
     {
         $this->weixin_id = $weixin_id;
         $this->apiParas["weixin_id"] = $weixin_id;
     }

     private $pagesize;

     public function getPagesize()
     {
         return $this->$pagesize;
     }

     public function setPagesize($pagesize)
     {
         $this->pagesize = $pagesize;
         $this->apiParas["pagesize"] = $pagesize;
     }

     private $endtime;

     public function getEndtime()
     {
         return $this->$endtime;
     }

     public function setEndtime($endtime)
     {
         $this->endtime = $endtime;
         $this->apiParas["endtime"] = $endtime;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.weixin.api.customer.service.getrecord";
     }
     public function check()     {          }}
