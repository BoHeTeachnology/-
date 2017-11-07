<?php
class FengchaoCrawlerCreditBasicCaptureRequest
{
     private $apiParas = array();

     private $name;

     public function getName()
     {
         return $this->$name;
     }

     public function setName($name)
     {
         $this->name = $name;
         $this->apiParas["name"] = $name;
     }

     private $timeout;

     public function getTimeout()
     {
         return $this->$timeout;
     }

     public function setTimeout($timeout)
     {
         $this->timeout = $timeout;
         $this->apiParas["timeout"] = $timeout;
     }

     private $identity;

     public function getIdentity()
     {
         return $this->$identity;
     }

     public function setIdentity($identity)
     {
         $this->identity = $identity;
         $this->apiParas["identity"] = $identity;
     }

     private $cellphone;

     public function getCellphone()
     {
         return $this->$cellphone;
     }

     public function setCellphone($cellphone)
     {
         $this->cellphone = $cellphone;
         $this->apiParas["cellphone"] = $cellphone;
     }

     private $type;

     public function getType()
     {
         return $this->$type;
     }

     public function setType($type)
     {
         $this->type = $type;
         $this->apiParas["type"] = $type;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengchao.crawler.credit.basic.capture";
     }
     public function check()     {          }}
