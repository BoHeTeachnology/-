<?php
class FingerShopSyncDepartRequest
{
     private $apiParas = array();

     private $dist_id;

     public function getDistId()
     {
         return $this->$dist_id;
     }

     public function setDistId($dist_id)
     {
         $this->dist_id = $dist_id;
         $this->apiParas["dist_id"] = $dist_id;
     }

     private $dept_name;

     public function getDeptName()
     {
         return $this->$dept_name;
     }

     public function setDeptName($dept_name)
     {
         $this->dept_name = $dept_name;
         $this->apiParas["dept_name"] = $dept_name;
     }

     private $dept_id;

     public function getDeptId()
     {
         return $this->$dept_id;
     }

     public function setDeptId($dept_id)
     {
         $this->dept_id = $dept_id;
         $this->apiParas["dept_id"] = $dept_id;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.finger.shop.sync.depart";
     }
     public function check()     {          }}
