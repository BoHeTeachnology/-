<?php
class WheatfieldCfcaUkeyserviceimplUpdateukeycertRequest
{
     private $apiParas = array();

     private $serial_no;

     public function getSerialNo()
     {
         return $this->$serial_no;
     }

     public function setSerialNo($serial_no)
     {
         $this->serial_no = $serial_no;
         $this->apiParas["serial_no"] = $serial_no;
     }

     private $end_time;

     public function getEndTime()
     {
         return $this->$end_time;
     }

     public function setEndTime($end_time)
     {
         $this->end_time = $end_time;
         $this->apiParas["end_time"] = $end_time;
     }

     private $dn;

     public function getDn()
     {
         return $this->$dn;
     }

     public function setDn($dn)
     {
         $this->dn = $dn;
         $this->apiParas["dn"] = $dn;
     }

     private $org_id;

     public function getOrgId()
     {
         return $this->$org_id;
     }

     public function setOrgId($org_id)
     {
         $this->org_id = $org_id;
         $this->apiParas["org_id"] = $org_id;
     }

     private $duration;

     public function getDuration()
     {
         return $this->$duration;
     }

     public function setDuration($duration)
     {
         $this->duration = $duration;
         $this->apiParas["duration"] = $duration;
     }

     private $pten;

     public function getPten()
     {
         return $this->$pten;
     }

     public function setPten($pten)
     {
         $this->pten = $pten;
         $this->apiParas["pten"] = $pten;
     }

     private $use_old_key;

     public function getUseOldKey()
     {
         return $this->$use_old_key;
     }

     public function setUseOldKey($use_old_key)
     {
         $this->use_old_key = $use_old_key;
         $this->apiParas["use_old_key"] = $use_old_key;
     }

     private $user_id;

     public function getUserId()
     {
         return $this->$user_id;
     }

     public function setUserId($user_id)
     {
         $this->user_id = $user_id;
         $this->apiParas["user_id"] = $user_id;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.cfca.ukeyserviceimpl.updateukeycert";
     }
     public function check()     {          }}
