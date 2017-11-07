<?php
class XvpUserCreateRequest
{
     private $apiParas = array();

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

     private $thrid_system_user_id;

     public function getThridSystemUserId()
     {
         return $this->$thrid_system_user_id;
     }

     public function setThridSystemUserId($thrid_system_user_id)
     {
         $this->thrid_system_user_id = $thrid_system_user_id;
         $this->apiParas["thrid_system_user_id"] = $thrid_system_user_id;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.xvp.user.create";
     }
     public function check()     {          }}
