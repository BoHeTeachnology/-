<?php
class TlpaySimpleBillFileGetRequest
{
     private $apiParas = array();

     private $settday;

     public function getSettday()
     {
         return $this->$settday;
     }

     public function setSettday($settday)
     {
         $this->settday = $settday;
         $this->apiParas["settday"] = $settday;
     }

     private $merid;

     public function getMerid()
     {
         return $this->$merid;
     }

     public function setMerid($merid)
     {
         $this->merid = $merid;
         $this->apiParas["merid"] = $merid;
     }

     private $contfee;

     public function getContfee()
     {
         return $this->$contfee;
     }

     public function setContfee($contfee)
     {
         $this->contfee = $contfee;
         $this->apiParas["contfee"] = $contfee;
     }

     private $merchant_id;

     public function getMerchantId()
     {
         return $this->$merchant_id;
     }

     public function setMerchantId($merchant_id)
     {
         $this->merchant_id = $merchant_id;
         $this->apiParas["merchant_id"] = $merchant_id;
     }

     private $reqtime;

     public function getReqtime()
     {
         return $this->$reqtime;
     }

     public function setReqtime($reqtime)
     {
         $this->reqtime = $reqtime;
         $this->apiParas["reqtime"] = $reqtime;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.tlpay.simple.bill.file.get";
     }
     public function check()     {          }}
