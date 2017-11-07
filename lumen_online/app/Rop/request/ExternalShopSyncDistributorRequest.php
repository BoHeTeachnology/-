<?php
class ExternalShopSyncDistributorRequest
{
     private $apiParas = array();

     private $corporate_phone;

     public function getCorporatePhone()
     {
         return $this->$corporate_phone;
     }

     public function setCorporatePhone($corporate_phone)
     {
         $this->corporate_phone = $corporate_phone;
         $this->apiParas["corporate_phone"] = $corporate_phone;
     }

     private $last_update_time;

     public function getLastUpdateTime()
     {
         return $this->$last_update_time;
     }

     public function setLastUpdateTime($last_update_time)
     {
         $this->last_update_time = $last_update_time;
         $this->apiParas["last_update_time"] = $last_update_time;
     }

     private $create_time;

     public function getCreateTime()
     {
         return $this->$create_time;
     }

     public function setCreateTime($create_time)
     {
         $this->create_time = $create_time;
         $this->apiParas["create_time"] = $create_time;
     }

     private $lisence_img;

     public function getLisenceImg()
     {
         return $this->$lisence_img;
     }

     public function setLisenceImg($lisence_img)
     {
         $this->lisence_img = $lisence_img;
         $this->apiParas["lisence_img"] = $lisence_img;
     }

     private $appr_status;

     public function getApprStatus()
     {
         return $this->$appr_status;
     }

     public function setApprStatus($appr_status)
     {
         $this->appr_status = $appr_status;
         $this->apiParas["appr_status"] = $appr_status;
     }

     private $corproate_name;

     public function getCorproateName()
     {
         return $this->$corproate_name;
     }

     public function setCorproateName($corproate_name)
     {
         $this->corproate_name = $corproate_name;
         $this->apiParas["corproate_name"] = $corproate_name;
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

     private $lisence_no;

     public function getLisenceNo()
     {
         return $this->$lisence_no;
     }

     public function setLisenceNo($lisence_no)
     {
         $this->lisence_no = $lisence_no;
         $this->apiParas["lisence_no"] = $lisence_no;
     }

     private $phone_status;

     public function getPhoneStatus()
     {
         return $this->$phone_status;
     }

     public function setPhoneStatus($phone_status)
     {
         $this->phone_status = $phone_status;
         $this->apiParas["phone_status"] = $phone_status;
     }

     private $revisor;

     public function getRevisor()
     {
         return $this->$revisor;
     }

     public function setRevisor($revisor)
     {
         $this->revisor = $revisor;
         $this->apiParas["revisor"] = $revisor;
     }

     private $corporate_idcard;

     public function getCorporateIdcard()
     {
         return $this->$corporate_idcard;
     }

     public function setCorporateIdcard($corporate_idcard)
     {
         $this->corporate_idcard = $corporate_idcard;
         $this->apiParas["corporate_idcard"] = $corporate_idcard;
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

     private $creator;

     public function getCreator()
     {
         return $this->$creator;
     }

     public function setCreator($creator)
     {
         $this->creator = $creator;
         $this->apiParas["creator"] = $creator;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.external.shop.sync.distributor";
     }
     public function check()     {          }}
