<?php
class WheatfieldRiskRiskeducationqueryRequest
{
     private $apiParas = array();

     private $channel;

     public function getChannel()
     {
         return $this->$channel;
     }

     public function setChannel($channel)
     {
         $this->channel = $channel;
         $this->apiParas["channel"] = $channel;
     }

     private $mobile;

     public function getMobile()
     {
         return $this->$mobile;
     }

     public function setMobile($mobile)
     {
         $this->mobile = $mobile;
         $this->apiParas["mobile"] = $mobile;
     }

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

     private $idnumber;

     public function getIdnumber()
     {
         return $this->$idnumber;
     }

     public function setIdnumber($idnumber)
     {
         $this->idnumber = $idnumber;
         $this->apiParas["idnumber"] = $idnumber;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.risk.riskeducationquery";
     }
     public function check()     {          }}
