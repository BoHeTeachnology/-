<?php
class WheatfieldOrderServiceCreditqueryRequest
{
     private $apiParas = array();

     private $userid;

     public function getUserid()
     {
         return $this->$userid;
     }

     public function setUserid($userid)
     {
         $this->userid = $userid;
         $this->apiParas["userid"] = $userid;
     }

     private $creditresultid;

     public function getCreditresultid()
     {
         return $this->$creditresultid;
     }

     public function setCreditresultid($creditresultid)
     {
         $this->creditresultid = $creditresultid;
         $this->apiParas["creditresultid"] = $creditresultid;
     }

     private $providerid;

     public function getProviderid()
     {
         return $this->$providerid;
     }

     public function setProviderid($providerid)
     {
         $this->providerid = $providerid;
         $this->apiParas["providerid"] = $providerid;
     }

     private $productid;

     public function getProductid()
     {
         return $this->$productid;
     }

     public function setProductid($productid)
     {
         $this->productid = $productid;
         $this->apiParas["productid"] = $productid;
     }

     private $merchantid;

     public function getMerchantid()
     {
         return $this->$merchantid;
     }

     public function setMerchantid($merchantid)
     {
         $this->merchantid = $merchantid;
         $this->apiParas["merchantid"] = $merchantid;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.order.service.creditquery";
     }
     public function check()     {          }}
