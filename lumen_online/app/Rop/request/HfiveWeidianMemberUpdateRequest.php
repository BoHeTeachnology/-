<?php
class HfiveWeidianMemberUpdateRequest
{
     private $apiParas = array();

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

     private $member_id;

     public function getMemberId()
     {
         return $this->$member_id;
     }

     public function setMemberId($member_id)
     {
         $this->member_id = $member_id;
         $this->apiParas["member_id"] = $member_id;
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

     private $country;

     public function getCountry()
     {
         return $this->$country;
     }

     public function setCountry($country)
     {
         $this->country = $country;
         $this->apiParas["country"] = $country;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.weidian.member.update";
     }
     public function check()     {          }}
