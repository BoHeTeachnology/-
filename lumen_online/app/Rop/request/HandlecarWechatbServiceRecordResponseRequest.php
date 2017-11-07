<?php
class HandlecarWechatbServiceRecordResponseRequest
{
     private $apiParas = array();

     private $staffopenid;

     public function getStaffopenid()
     {
         return $this->$staffopenid;
     }

     public function setStaffopenid($staffopenid)
     {
         $this->staffopenid = $staffopenid;
         $this->apiParas["staffopenid"] = $staffopenid;
     }

     private $carplate;

     public function getCarplate()
     {
         return $this->$carplate;
     }

     public function setCarplate($carplate)
     {
         $this->carplate = $carplate;
         $this->apiParas["carplate"] = $carplate;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.handlecar.wechatb.service.record.response";
     }
     public function check()     {          }}
