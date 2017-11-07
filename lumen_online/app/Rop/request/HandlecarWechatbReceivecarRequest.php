<?php
class HandlecarWechatbReceivecarRequest
{
     private $apiParas = array();

     private $msrid;

     public function getMsrid()
     {
         return $this->$msrid;
     }

     public function setMsrid($msrid)
     {
         $this->msrid = $msrid;
         $this->apiParas["msrid"] = $msrid;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.handlecar.wechatb.receivecar";
     }
     public function check()     {          }}
