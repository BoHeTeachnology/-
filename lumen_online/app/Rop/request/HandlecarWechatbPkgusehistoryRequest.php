<?php
class HandlecarWechatbPkgusehistoryRequest
{
     private $apiParas = array();

     private $memstoreid;

     public function getMemstoreid()
     {
         return $this->$memstoreid;
     }

     public function setMemstoreid($memstoreid)
     {
         $this->memstoreid = $memstoreid;
         $this->apiParas["memstoreid"] = $memstoreid;
     }

     private $pkgid;

     public function getPkgid()
     {
         return $this->$pkgid;
     }

     public function setPkgid($pkgid)
     {
         $this->pkgid = $pkgid;
         $this->apiParas["pkgid"] = $pkgid;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.handlecar.wechatb.pkgusehistory";
     }
     public function check()     {          }}
