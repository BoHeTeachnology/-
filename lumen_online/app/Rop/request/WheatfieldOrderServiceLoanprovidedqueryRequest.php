<?php
class WheatfieldOrderServiceLoanprovidedqueryRequest
{
     private $apiParas = array();

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

     private $loanrequestid;

     public function getLoanrequestid()
     {
         return $this->$loanrequestid;
     }

     public function setLoanrequestid($loanrequestid)
     {
         $this->loanrequestid = $loanrequestid;
         $this->apiParas["loanrequestid"] = $loanrequestid;
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
         return "ruixue.wheatfield.order.service.loanprovidedquery";
     }
     public function check()     {          }}
