<?php
class FingerShopSyncDistributorRequest
{
     private $apiParas = array();

     private $license_img;

     public function getLicenseImg()
     {
         return $this->$license_img;
     }

     public function setLicenseImg($license_img)
     {
         $this->license_img = $license_img;
         $this->apiParas["license_img"] = $license_img;
     }

     private $dist_name;

     public function getDistName()
     {
         return $this->$dist_name;
     }

     public function setDistName($dist_name)
     {
         $this->dist_name = $dist_name;
         $this->apiParas["dist_name"] = $dist_name;
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

     private $corp_idcard;

     public function getCorpIdcard()
     {
         return $this->$corp_idcard;
     }

     public function setCorpIdcard($corp_idcard)
     {
         $this->corp_idcard = $corp_idcard;
         $this->apiParas["corp_idcard"] = $corp_idcard;
     }

     private $corp_name;

     public function getCorpName()
     {
         return $this->$corp_name;
     }

     public function setCorpName($corp_name)
     {
         $this->corp_name = $corp_name;
         $this->apiParas["corp_name"] = $corp_name;
     }

     private $opera;

     public function getOpera()
     {
         return $this->$opera;
     }

     public function setOpera($opera)
     {
         $this->opera = $opera;
         $this->apiParas["opera"] = $opera;
     }

     private $license_no;

     public function getLicenseNo()
     {
         return $this->$license_no;
     }

     public function setLicenseNo($license_no)
     {
         $this->license_no = $license_no;
         $this->apiParas["license_no"] = $license_no;
     }

     private $corp_phone;

     public function getCorpPhone()
     {
         return $this->$corp_phone;
     }

     public function setCorpPhone($corp_phone)
     {
         $this->corp_phone = $corp_phone;
         $this->apiParas["corp_phone"] = $corp_phone;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.finger.shop.sync.distributor";
     }
     public function check()     {          }}
