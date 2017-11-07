<?php
class HandlecarWechatbPkgcreateRequest
{
     private $apiParas = array();

     private $itemnamecnts;

     public function getItemnamecnts()
     {
         return $this->$itemnamecnts;
     }

     public function setItemnamecnts($itemnamecnts)
     {
         $this->itemnamecnts = $itemnamecnts;
         $this->apiParas["itemnamecnts"] = $itemnamecnts;
     }

     private $pkgname;

     public function getPkgname()
     {
         return $this->$pkgname;
     }

     public function setPkgname($pkgname)
     {
         $this->pkgname = $pkgname;
         $this->apiParas["pkgname"] = $pkgname;
     }

     private $itemnames;

     public function getItemnames()
     {
         return $this->$itemnames;
     }

     public function setItemnames($itemnames)
     {
         $this->itemnames = $itemnames;
         $this->apiParas["itemnames"] = $itemnames;
     }

     private $pkgmonth;

     public function getPkgmonth()
     {
         return $this->$pkgmonth;
     }

     public function setPkgmonth($pkgmonth)
     {
         $this->pkgmonth = $pkgmonth;
         $this->apiParas["pkgmonth"] = $pkgmonth;
     }

     private $itemcnts;

     public function getItemcnts()
     {
         return $this->$itemcnts;
     }

     public function setItemcnts($itemcnts)
     {
         $this->itemcnts = $itemcnts;
         $this->apiParas["itemcnts"] = $itemcnts;
     }

     private $pkgbanlance;

     public function getPkgbanlance()
     {
         return $this->$pkgbanlance;
     }

     public function setPkgbanlance($pkgbanlance)
     {
         $this->pkgbanlance = $pkgbanlance;
         $this->apiParas["pkgbanlance"] = $pkgbanlance;
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

     private $itemids;

     public function getItemids()
     {
         return $this->$itemids;
     }

     public function setItemids($itemids)
     {
         $this->itemids = $itemids;
         $this->apiParas["itemids"] = $itemids;
     }

     private $pkgtype;

     public function getPkgtype()
     {
         return $this->$pkgtype;
     }

     public function setPkgtype($pkgtype)
     {
         $this->pkgtype = $pkgtype;
         $this->apiParas["pkgtype"] = $pkgtype;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.handlecar.wechatb.pkgcreate";
     }
     public function check()     {          }}
