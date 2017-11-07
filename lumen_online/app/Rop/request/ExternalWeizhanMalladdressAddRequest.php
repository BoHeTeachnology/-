<?php
class ExternalWeizhanMalladdressAddRequest
{
     private $apiParas = array();

     private $detail_address;

     public function getDetailAddress()
     {
         return $this->$detail_address;
     }

     public function setDetailAddress($detail_address)
     {
         $this->detail_address = $detail_address;
         $this->apiParas["detail_address"] = $detail_address;
     }

     private $zipcode;

     public function getZipcode()
     {
         return $this->$zipcode;
     }

     public function setZipcode($zipcode)
     {
         $this->zipcode = $zipcode;
         $this->apiParas["zipcode"] = $zipcode;
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

     private $detail;

     public function getDetailAddress()
     {
         return $this->$detail;
     }

     public function setDetail($detail)
     {
         $this->detail = $detail;
         $this->apiParas["detail"] = $detail;
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

     private $username;

     public function getUsername()
     {
         return $this->$username;
     }

     public function setUsername($username)
     {
         $this->username = $username;
         $this->apiParas["username"] = $username;
     }

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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public String getApiMethodName()
     {
         return "ruixue.external.weizhan.malladdress.add";
     }
}
