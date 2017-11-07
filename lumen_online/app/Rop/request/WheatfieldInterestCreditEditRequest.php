<?php
class WheatfieldInterestCreditEditRequest
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

     private $residualamount;

     public function getResidualamount()
     {
         return $this->$residualamount;
     }

     public function setResidualamount($residualamount)
     {
         $this->residualamount = $residualamount;
         $this->apiParas["residualamount"] = $residualamount;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.interest.credit.edit";
     }
     public function check()     {          }}
