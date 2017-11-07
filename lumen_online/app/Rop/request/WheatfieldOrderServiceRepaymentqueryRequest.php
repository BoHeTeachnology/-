<?php
class WheatfieldOrderServiceRepaymentqueryRequest
{
     private $apiParas = array();

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

     private $rootinstcd;

     public function getRootinstcd()
     {
         return $this->$rootinstcd;
     }

     public function setRootinstcd($rootinstcd)
     {
         $this->rootinstcd = $rootinstcd;
         $this->apiParas["rootinstcd"] = $rootinstcd;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.order.service.repaymentquery";
     }
     public function check()     {          }}
