<?php
class WheatfieldOrderQueryRequest
{
     private $apiParas = array();

     private $endtime;

     public function getEndtime()
     {
         return $this->$endtime;
     }

     public function setEndtime($endtime)
     {
         $this->endtime = $endtime;
         $this->apiParas["endtime"] = $endtime;
     }

     private $merchantcode;

     public function getMerchantcode()
     {
         return $this->$merchantcode;
     }

     public function setMerchantcode($merchantcode)
     {
         $this->merchantcode = $merchantcode;
         $this->apiParas["merchantcode"] = $merchantcode;
     }

     private $starttime;

     public function getStarttime()
     {
         return $this->$starttime;
     }

     public function setStarttime($starttime)
     {
         $this->starttime = $starttime;
         $this->apiParas["starttime"] = $starttime;
     }

     private $orderno;

     public function getOrderno()
     {
         return $this->$orderno;
     }

     public function setOrderno($orderno)
     {
         $this->orderno = $orderno;
         $this->apiParas["orderno"] = $orderno;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.order.query";
     }
     public function check()     {          }}
