<?php
class FengnianMemberAddressUpdateRequest
{
     private $apiParas = array();

     private $status;

     public function getStatus()
     {
         return $this->$status;
     }

     public function setStatus($status)
     {
         $this->status = $status;
         $this->apiParas["status"] = $status;
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

     private $address_id;

     public function getAddressId()
     {
         return $this->$address_id;
     }

     public function setAddressId($address_id)
     {
         $this->address_id = $address_id;
         $this->apiParas["address_id"] = $address_id;
     }

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

     private $user_name;

     public function getUserName()
     {
         return $this->$user_name;
     }

     public function setUserName($user_name)
     {
         $this->user_name = $user_name;
         $this->apiParas["user_name"] = $user_name;
     }

     private $zip_code;

     public function getZipCode()
     {
         return $this->$zip_code;
     }

     public function setZipCode($zip_code)
     {
         $this->zip_code = $zip_code;
         $this->apiParas["zip_code"] = $zip_code;
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

     private $specific;

     public function getSpecific()
     {
         return $this->$specific;
     }

     public function setSpecific($specific)
     {
         $this->specific = $specific;
         $this->apiParas["specific"] = $specific;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.member.address.update";
     }
     public function check()     {          }}
