<?php
class HandlecarWechatbStoreCreatRequest
{
     private $apiParas = array();

     private $langtitude;

     public function getLangtitude()
     {
         return $this->$langtitude;
     }

     public function setLangtitude($langtitude)
     {
         $this->langtitude = $langtitude;
         $this->apiParas["langtitude"] = $langtitude;
     }

     private $longitude;

     public function getLongitude()
     {
         return $this->$longitude;
     }

     public function setLongitude($longitude)
     {
         $this->longitude = $longitude;
         $this->apiParas["longitude"] = $longitude;
     }

     private $contract;

     public function getContract()
     {
         return $this->$contract;
     }

     public function setContract($contract)
     {
         $this->contract = $contract;
         $this->apiParas["contract"] = $contract;
     }

     private $address;

     public function getAddress()
     {
         return $this->$address;
     }

     public function setAddress($address)
     {
         $this->address = $address;
         $this->apiParas["address"] = $address;
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

     private $introduction;

     public function getIntroduction()
     {
         return $this->$introduction;
     }

     public function setIntroduction($introduction)
     {
         $this->introduction = $introduction;
         $this->apiParas["introduction"] = $introduction;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.handlecar.wechatb.store.creat";
     }
     public function check()     {          }}
