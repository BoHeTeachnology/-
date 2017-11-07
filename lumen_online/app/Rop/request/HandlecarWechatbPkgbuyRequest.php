<?php
class HandlecarWechatbPkgbuyRequest
{
     private $apiParas = array();

     private $buytype;

     public function getBuytype()
     {
         return $this->$buytype;
     }

     public function setBuytype($buytype)
     {
         $this->buytype = $buytype;
         $this->apiParas["buytype"] = $buytype;
     }

     private $soid;

     public function getSoid()
     {
         return $this->$soid;
     }

     public function setSoid($soid)
     {
         $this->soid = $soid;
         $this->apiParas["soid"] = $soid;
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
         return "ruixue.handlecar.wechatb.pkgbuy";
     }
     public function check()     {          }}
