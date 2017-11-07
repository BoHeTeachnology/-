<?php
class HandlecarWechatbPayorderRequest
{
     private $apiParas = array();

     private $orderid;

     public function getOrderid()
     {
         return $this->$orderid;
     }

     public function setOrderid($orderid)
     {
         $this->orderid = $orderid;
         $this->apiParas["orderid"] = $orderid;
     }

     private $wopaytype;

     public function getWopaytype()
     {
         return $this->$wopaytype;
     }

     public function setWopaytype($wopaytype)
     {
         $this->wopaytype = $wopaytype;
         $this->apiParas["wopaytype"] = $wopaytype;
     }

     private $pkgbalance;

     public function getPkgbalance()
     {
         return $this->$pkgbalance;
     }

     public function setPkgbalance($pkgbalance)
     {
         $this->pkgbalance = $pkgbalance;
         $this->apiParas["pkgbalance"] = $pkgbalance;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.handlecar.wechatb.payorder";
     }
     public function check()     {          }}
