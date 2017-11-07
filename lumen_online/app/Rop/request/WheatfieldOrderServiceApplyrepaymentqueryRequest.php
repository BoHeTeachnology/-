<?php
class WheatfieldOrderServiceApplyrepaymentqueryRequest
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

     private $querytype;

     public function getQuerytype()
     {
         return $this->$querytype;
     }

     public function setQuerytype($querytype)
     {
         $this->querytype = $querytype;
         $this->apiParas["querytype"] = $querytype;
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

     private $repaymentdate;

     public function getRepaymentdate()
     {
         return $this->$repaymentdate;
     }

     public function setRepaymentdate($repaymentdate)
     {
         $this->repaymentdate = $repaymentdate;
         $this->apiParas["repaymentdate"] = $repaymentdate;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.order.service.applyrepaymentquery";
     }
     public function check()     {          }}
