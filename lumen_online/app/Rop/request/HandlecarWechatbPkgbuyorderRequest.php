<?php
class HandlecarWechatbPkgbuyorderRequest
{
     private $apiParas = array();

     private $msrid;

     public function getMsrid()
     {
         return $this->$msrid;
     }

     public function setMsrid($msrid)
     {
         $this->msrid = $msrid;
         $this->apiParas["msrid"] = $msrid;
     }

     private $paytype;

     public function getPaytype()
     {
         return $this->$paytype;
     }

     public function setPaytype($paytype)
     {
         $this->paytype = $paytype;
         $this->apiParas["paytype"] = $paytype;
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

     private $saleprice;

     public function getSaleprice()
     {
         return $this->$saleprice;
     }

     public function setSaleprice($saleprice)
     {
         $this->saleprice = $saleprice;
         $this->apiParas["saleprice"] = $saleprice;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.handlecar.wechatb.pkgbuyorder";
     }
     public function check()     {          }}
