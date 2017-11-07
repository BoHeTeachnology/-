<?php
class WheatfieldInterestRepaymentUserinitiativerepamentRequest
{
     private $apiParas = array();

     private $realcapitalamount;

     public function getRealcapitalamount()
     {
         return $this->$realcapitalamount;
     }

     public function setRealcapitalamount($realcapitalamount)
     {
         $this->realcapitalamount = $realcapitalamount;
         $this->apiParas["realcapitalamount"] = $realcapitalamount;
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

     private $realoverdueinterestamount;

     public function getRealoverdueinterestamount()
     {
         return $this->$realoverdueinterestamount;
     }

     public function setRealoverdueinterestamount($realoverdueinterestamount)
     {
         $this->realoverdueinterestamount = $realoverdueinterestamount;
         $this->apiParas["realoverdueinterestamount"] = $realoverdueinterestamount;
     }

     private $userorderid;

     public function getUserorderid()
     {
         return $this->$userorderid;
     }

     public function setUserorderid($userorderid)
     {
         $this->userorderid = $userorderid;
         $this->apiParas["userorderid"] = $userorderid;
     }

     private $realinterestamount;

     public function getRealinterestamount()
     {
         return $this->$realinterestamount;
     }

     public function setRealinterestamount($realinterestamount)
     {
         $this->realinterestamount = $realinterestamount;
         $this->apiParas["realinterestamount"] = $realinterestamount;
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

     private $realoverduecapitalamount;

     public function getRealoverduecapitalamount()
     {
         return $this->$realoverduecapitalamount;
     }

     public function setRealoverduecapitalamount($realoverduecapitalamount)
     {
         $this->realoverduecapitalamount = $realoverduecapitalamount;
         $this->apiParas["realoverduecapitalamount"] = $realoverduecapitalamount;
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
         return "ruixue.wheatfield.interest.repayment.userinitiativerepament";
     }
     public function check()     {          }}
