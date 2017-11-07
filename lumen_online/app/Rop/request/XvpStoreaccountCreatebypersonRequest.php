<?php
class XvpStoreaccountCreatebypersonRequest
{
     private $apiParas = array();

     private $mobile_tel;

     public function getMobileTel()
     {
         return $this->$mobile_tel;
     }

     public function setMobileTel($mobile_tel)
     {
         $this->mobile_tel = $mobile_tel;
         $this->apiParas["mobile_tel"] = $mobile_tel;
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

     private $certificate_type;

     public function getCertificateType()
     {
         return $this->$certificate_type;
     }

     public function setCertificateType($certificate_type)
     {
         $this->certificate_type = $certificate_type;
         $this->apiParas["certificate_type"] = $certificate_type;
     }

     private $app_id;

     public function getAppId()
     {
         return $this->$app_id;
     }

     public function setAppId($app_id)
     {
         $this->app_id = $app_id;
         $this->apiParas["app_id"] = $app_id;
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

     private $user_type;

     public function getUserType()
     {
         return $this->$user_type;
     }

     public function setUserType($user_type)
     {
         $this->user_type = $user_type;
         $this->apiParas["user_type"] = $user_type;
     }

     private $certificate_number;

     public function getCertificateNumber()
     {
         return $this->$certificate_number;
     }

     public function setCertificateNumber($certificate_number)
     {
         $this->certificate_number = $certificate_number;
         $this->apiParas["certificate_number"] = $certificate_number;
     }

     private $person_chn_name;

     public function getPersonChnName()
     {
         return $this->$person_chn_name;
     }

     public function setPersonChnName($person_chn_name)
     {
         $this->person_chn_name = $person_chn_name;
         $this->apiParas["person_chn_name"] = $person_chn_name;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.xvp.storeaccount.createbyperson";
     }
     public function check()     {          }}
