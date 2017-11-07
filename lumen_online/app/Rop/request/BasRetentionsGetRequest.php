<?php
class BasRetentionsGetRequest
{
     private $apiParas = array();

     private $bas_event;

     public function getBasEvent()
     {
         return $this->$bas_event;
     }

     public function setBasEvent($bas_event)
     {
         $this->bas_event = $bas_event;
         $this->apiParas["bas_event"] = $bas_event;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.bas.retentions.get";
     }
     public function check()     {          }}
