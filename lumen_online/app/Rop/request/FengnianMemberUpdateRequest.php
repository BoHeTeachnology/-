<?php
class FengnianMemberUpdateRequest
{
     private $apiParas = array();

     private $province_no;

     public function getProvinceNo()
     {
         return $this->$province_no;
     }

     public function setProvinceNo($province_no)
     {
         $this->province_no = $province_no;
         $this->apiParas["province_no"] = $province_no;
     }

     private $language;

     public function getLanguage()
     {
         return $this->$language;
     }

     public function setLanguage($language)
     {
         $this->language = $language;
         $this->apiParas["language"] = $language;
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

     private $group_id;

     public function getGroupId()
     {
         return $this->$group_id;
     }

     public function setGroupId($group_id)
     {
         $this->group_id = $group_id;
         $this->apiParas["group_id"] = $group_id;
     }

     private $real_name;

     public function getRealName()
     {
         return $this->$real_name;
     }

     public function setRealName($real_name)
     {
         $this->real_name = $real_name;
         $this->apiParas["real_name"] = $real_name;
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

     private $zip;

     public function getZip()
     {
         return $this->$zip;
     }

     public function setZip($zip)
     {
         $this->zip = $zip;
         $this->apiParas["zip"] = $zip;
     }

     private $city_no;

     public function getCityNo()
     {
         return $this->$city_no;
     }

     public function setCityNo($city_no)
     {
         $this->city_no = $city_no;
         $this->apiParas["city_no"] = $city_no;
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

     private $id_card_no;

     public function getIdCardNo()
     {
         return $this->$id_card_no;
     }

     public function setIdCardNo($id_card_no)
     {
         $this->id_card_no = $id_card_no;
         $this->apiParas["id_card_no"] = $id_card_no;
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

     private $email;

     public function getEmail()
     {
         return $this->$email;
     }

     public function setEmail($email)
     {
         $this->email = $email;
         $this->apiParas["email"] = $email;
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

     private $head_img_url;

     public function getHeadImgUrl()
     {
         return $this->$head_img_url;
     }

     public function setHeadImgUrl($head_img_url)
     {
         $this->head_img_url = $head_img_url;
         $this->apiParas["head_img_url"] = $head_img_url;
     }

     private $country_no;

     public function getCountryNo()
     {
         return $this->$country_no;
     }

     public function setCountryNo($country_no)
     {
         $this->country_no = $country_no;
         $this->apiParas["country_no"] = $country_no;
     }

     private $district_no;

     public function getDistrictNo()
     {
         return $this->$district_no;
     }

     public function setDistrictNo($district_no)
     {
         $this->district_no = $district_no;
         $this->apiParas["district_no"] = $district_no;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.member.update";
     }
     public function check()     {          }}
