<?php
class WheatfieldInterestCreditQueryRequest
{
     private $apiParas = array();

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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.interest.credit.query";
     }
     public function check()     {          }}
