<?php
class HandlecarWechatbMempkgdetailRequest
{
     private $apiParas = array();

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

     private $wxopenid;

     public function getWxopenid()
     {
         return $this->$wxopenid;
     }

     public function setWxopenid($wxopenid)
     {
         $this->wxopenid = $wxopenid;
         $this->apiParas["wxopenid"] = $wxopenid;
     }

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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.handlecar.wechatb.mempkgdetail";
     }
     public function check()     {          }}
