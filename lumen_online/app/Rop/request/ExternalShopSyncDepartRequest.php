<?php
class ExternalShopSyncDepartRequest
{
     private $apiParas = array();

     private $depart_name;

     public function getDepartName()
     {
         return $this->$depart_name;
     }

     public function setDepartName($depart_name)
     {
         $this->depart_name = $depart_name;
         $this->apiParas["depart_name"] = $depart_name;
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

     public function getApiMethodName()
     {
         return "ruixue.external.shop.sync.depart";
     }
     public function check()     {          }}
