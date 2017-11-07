<?php
class HoneycombBlacklistaGetRequest
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

     private $phone;

     public function getPhone()
     {
         return $this->$phone;
     }

     public function setPhone($phone)
     {
         $this->phone = $phone;
         $this->apiParas["phone"] = $phone;
     }

     private $cardnum;

     public function getCardnum()
     {
         return $this->$cardnum;
     }

     public function setCardnum($cardnum)
     {
         $this->cardnum = $cardnum;
         $this->apiParas["cardnum"] = $cardnum;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.honeycomb.blacklista.get";
     }
     public function check()     {          }}
