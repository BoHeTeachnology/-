<?php
class HfiveWeidianMemberCreateRequest
{
     private $apiParas = array();

     private $total_fee;

     public function getTotalFee()
     {
         return $this->$total_fee;
     }

     public function setTotalFee($total_fee)
     {
         $this->total_fee = $total_fee;
         $this->apiParas["total_fee"] = $total_fee;
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

     private $avial_fee;

     public function getAvialFee()
     {
         return $this->$avial_fee;
     }

     public function setAvialFee($avial_fee)
     {
         $this->avial_fee = $avial_fee;
         $this->apiParas["avial_fee"] = $avial_fee;
     }

     private $bb_name;

     public function getBbName()
     {
         return $this->$bb_name;
     }

     public function setBbName($bb_name)
     {
         $this->bb_name = $bb_name;
         $this->apiParas["bb_name"] = $bb_name;
     }

     private $pro;

     public function getPro()
     {
         return $this->$pro;
     }

     public function setPro($pro)
     {
         $this->pro = $pro;
         $this->apiParas["pro"] = $pro;
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

     private $bb_birthday;

     public function getBbBirthday()
     {
         return $this->$bb_birthday;
     }

     public function setBbBirthday($bb_birthday)
     {
         $this->bb_birthday = $bb_birthday;
         $this->apiParas["bb_birthday"] = $bb_birthday;
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

     private $total_score;

     public function getTotalScore()
     {
         return $this->$total_score;
     }

     public function setTotalScore($total_score)
     {
         $this->total_score = $total_score;
         $this->apiParas["total_score"] = $total_score;
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

     private $nickname;

     public function getNickname()
     {
         return $this->$nickname;
     }

     public function setNickname($nickname)
     {
         $this->nickname = $nickname;
         $this->apiParas["nickname"] = $nickname;
     }

     private $card_no;

     public function getCardNo()
     {
         return $this->$card_no;
     }

     public function setCardNo($card_no)
     {
         $this->card_no = $card_no;
         $this->apiParas["card_no"] = $card_no;
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

     private $avial_score;

     public function getAvialScore()
     {
         return $this->$avial_score;
     }

     public function setAvialScore($avial_score)
     {
         $this->avial_score = $avial_score;
         $this->apiParas["avial_score"] = $avial_score;
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

     private $level;

     public function getLevel()
     {
         return $this->$level;
     }

     public function setLevel($level)
     {
         $this->level = $level;
         $this->apiParas["level"] = $level;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.weidian.member.create";
     }
     public function check()     {          }}
