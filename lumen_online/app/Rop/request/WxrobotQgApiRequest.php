<?php
class WxrobotQgApiRequest
{
     private $apiParas = array();

     private $optype;

     public function getOptype()
     {
         return $this->$optype;
     }

     public function setOptype($optype)
     {
         $this->optype = $optype;
         $this->apiParas["optype"] = $optype;
     }

     private $opdata;

     public function getOpdata()
     {
         return $this->$opdata;
     }

     public function setOpdata($opdata)
     {
         $this->opdata = $opdata;
         $this->apiParas["opdata"] = $opdata;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wxrobot.qg.api";
     }
     public function check()     {          }}
