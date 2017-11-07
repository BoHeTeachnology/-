<?php
class WheatfieldOrderServiceLoanapprovedqueryRequest
{
     private $apiParas = array();

     private $remark;

     public function getRemark()
     {
         return $this->$remark;
     }

     public function setRemark($remark)
     {
         $this->remark = $remark;
         $this->apiParas["remark"] = $remark;
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

     private $requestno;

     public function getRequestno()
     {
         return $this->$requestno;
     }

     public function setRequestno($requestno)
     {
         $this->requestno = $requestno;
         $this->apiParas["requestno"] = $requestno;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.order.service.loanapprovedquery";
     }
     public function check()     {          }}
