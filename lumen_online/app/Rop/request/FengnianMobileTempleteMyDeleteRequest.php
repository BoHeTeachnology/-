<?php
class FengnianMobileTempleteMyDeleteRequest
{
     private $apiParas = array();

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

     private $modle_id;

     public function getModleId()
     {
         return $this->$modle_id;
     }

     public function setModleId($modle_id)
     {
         $this->modle_id = $modle_id;
         $this->apiParas["modle_id"] = $modle_id;
     }

     private $uid;

     public function getUid()
     {
         return $this->$uid;
     }

     public function setUid($uid)
     {
         $this->uid = $uid;
         $this->apiParas["uid"] = $uid;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.mobile.templete.my.delete";
     }
     public function check()     {          }}
