<?php
class HandlecarWechatbStoredetailUpdateRequest
{
     private $apiParas = array();

     private $csid;

     public function getCsid()
     {
         return $this->$csid;
     }

     public function setCsid($csid)
     {
         $this->csid = $csid;
         $this->apiParas["csid"] = $csid;
     }

     private $csname;

     public function getCsname()
     {
         return $this->$csname;
     }

     public function setCsname($csname)
     {
         $this->csname = $csname;
         $this->apiParas["csname"] = $csname;
     }

     private $cstel;

     public function getCstel()
     {
         return $this->$cstel;
     }

     public function setCstel($cstel)
     {
         $this->cstel = $cstel;
         $this->apiParas["cstel"] = $cstel;
     }

     private $csaddress;

     public function getCsaddress()
     {
         return $this->$csaddress;
     }

     public function setCsaddress($csaddress)
     {
         $this->csaddress = $csaddress;
         $this->apiParas["csaddress"] = $csaddress;
     }

     private $csintroduce;

     public function getCsintroduce()
     {
         return $this->$csintroduce;
     }

     public function setCsintroduce($csintroduce)
     {
         $this->csintroduce = $csintroduce;
         $this->apiParas["csintroduce"] = $csintroduce;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.handlecar.wechatb.storedetail.update";
     }
     public function check()     {          }}
