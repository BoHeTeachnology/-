<?php
class HfiveWeixinHaluoshanLotteryRequest
{
     private $apiParas = array();

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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.weixin.haluoshan.lottery";
     }
     public function check()     {          }}
