<?php
class XvpUserUpdateaddressRequest
{
     private $apiParas = array();

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

     private $post_code;

     public function getPostCode()
     {
         return $this->$post_code;
     }

     public function setPostCode($post_code)
     {
         $this->post_code = $post_code;
         $this->apiParas["post_code"] = $post_code;
     }

     private $city;

     public function getCity()
     {
         return $this->$city;
     }

     public function setCity($city)
     {
         $this->city = $city;
         $this->apiParas["city"] = $city;
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

     private $str;

     public function getStr()
     {
         return $this->$str;
     }

     public function setStr($str)
     {
         $this->str = $str;
         $this->apiParas["str"] = $str;
     }

     private $county;

     public function getCounty()
     {
         return $this->$county;
     }

     public function setCounty($county)
     {
         $this->county = $county;
         $this->apiParas["county"] = $county;
     }

     private $id;

     public function getId()
     {
         return $this->$id;
     }

     public function setId($id)
     {
         $this->id = $id;
         $this->apiParas["id"] = $id;
     }

     private $province;

     public function getProvince()
     {
         return $this->$province;
     }

     public function setProvince($province)
     {
         $this->province = $province;
         $this->apiParas["province"] = $province;
     }

     private $xvp_uid;

     public function getXvpUid()
     {
         return $this->$xvp_uid;
     }

     public function setXvpUid($xvp_uid)
     {
         $this->xvp_uid = $xvp_uid;
         $this->apiParas["xvp_uid"] = $xvp_uid;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.xvp.user.updateaddress";
     }
     public function check()     {          }}
