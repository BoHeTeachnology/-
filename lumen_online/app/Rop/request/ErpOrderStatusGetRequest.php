<?php
class ErpOrderStatusGetRequest
{
     private $apiParas = array();

     private $tid;

     public function getTid()
     {
         return $this->$tid;
     }

     public function setTid($tid)
     {
         $this->tid = $tid;
         $this->apiParas["tid"] = $tid;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.erp.order.status.get";
     }
     public function check()     {          }}
