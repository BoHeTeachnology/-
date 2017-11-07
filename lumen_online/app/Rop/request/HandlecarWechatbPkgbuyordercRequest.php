<?php
class HandlecarWechatbPkgbuyordercRequest
{
     private $apiParas = array();

     private $pkgprice;

     public function getPkgprice()
     {
         return $this->$pkgprice;
     }

     public function setPkgprice($pkgprice)
     {
         $this->pkgprice = $pkgprice;
         $this->apiParas["pkgprice"] = $pkgprice;
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

     private $openid;

     public function getOpenid()
     {
         return $this->$openid;
     }

     public function setOpenid($openid)
     {
         $this->openid = $openid;
         $this->apiParas["openid"] = $openid;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.handlecar.wechatb.pkgbuyorderc";
     }
     public function check()     {          }}
