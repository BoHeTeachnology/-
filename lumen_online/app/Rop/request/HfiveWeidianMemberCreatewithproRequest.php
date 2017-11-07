<?php
class HfiveWeidianMemberCreatewithproRequest
{
     private $apiParas = array();

     private $sex;

     public function getSex()
     {
         return $this->$sex;
     }

     public function setSex($sex)
     {
         $this->sex = $sex;
         $this->apiParas["sex"] = $sex;
     }

     private $property_names;

     public function getPropertyNames()
     {
         return $this->$property_names;
     }

     public function setPropertyNames($property_names)
     {
         $this->property_names = $property_names;
         $this->apiParas["property_names"] = $property_names;
     }

     private $company_key;

     public function getCompanyKey()
     {
         return $this->$company_key;
     }

     public function setCompanyKey($company_key)
     {
         $this->company_key = $company_key;
         $this->apiParas["company_key"] = $company_key;
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

     private $store_id;

     public function getStoreId()
     {
         return $this->$store_id;
     }

     public function setStoreId($store_id)
     {
         $this->store_id = $store_id;
         $this->apiParas["store_id"] = $store_id;
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

     private $open_id;

     public function getOpenId()
     {
         return $this->$open_id;
     }

     public function setOpenId($open_id)
     {
         $this->open_id = $open_id;
         $this->apiParas["open_id"] = $open_id;
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

     private $birthday;

     public function getBirthday()
     {
         return $this->$birthday;
     }

     public function setBirthday($birthday)
     {
         $this->birthday = $birthday;
         $this->apiParas["birthday"] = $birthday;
     }

     private $property_values;

     public function getPropertyValues()
     {
         return $this->$property_values;
     }

     public function setPropertyValues($property_values)
     {
         $this->property_values = $property_values;
         $this->apiParas["property_values"] = $property_values;
     }

     private $nick_name;

     public function getNickName()
     {
         return $this->$nick_name;
     }

     public function setNickName($nick_name)
     {
         $this->nick_name = $nick_name;
         $this->apiParas["nick_name"] = $nick_name;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.weidian.member.createwithpro";
     }
     public function check()     {          }}
