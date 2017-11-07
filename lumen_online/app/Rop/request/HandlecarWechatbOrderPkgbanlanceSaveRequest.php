<?php
class HandlecarWechatbOrderPkgbanlanceSaveRequest
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

     private $pkguseprice;

     public function getPkguseprice()
     {
         return $this->$pkguseprice;
     }

     public function setPkguseprice($pkguseprice)
     {
         $this->pkguseprice = $pkguseprice;
         $this->apiParas["pkguseprice"] = $pkguseprice;
     }

     private $pkgpickflg;

     public function getPkgpickflg()
     {
         return $this->$pkgpickflg;
     }

     public function setPkgpickflg($pkgpickflg)
     {
         $this->pkgpickflg = $pkgpickflg;
         $this->apiParas["pkgpickflg"] = $pkgpickflg;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.handlecar.wechatb.order.pkgbanlance.save";
     }
     public function check()     {          }}
