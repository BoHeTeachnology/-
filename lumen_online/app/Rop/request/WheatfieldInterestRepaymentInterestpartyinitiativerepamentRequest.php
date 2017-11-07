<?php
class WheatfieldInterestRepaymentInterestpartyinitiativerepamentRequest
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

     private $onerealinterestamount;

     public function getOnerealinterestamount()
     {
         return $this->$onerealinterestamount;
     }

     public function setOnerealinterestamount($onerealinterestamount)
     {
         $this->onerealinterestamount = $onerealinterestamount;
         $this->apiParas["onerealinterestamount"] = $onerealinterestamount;
     }

     private $twouserid;

     public function getTwouserid()
     {
         return $this->$twouserid;
     }

     public function setTwouserid($twouserid)
     {
         $this->twouserid = $twouserid;
         $this->apiParas["twouserid"] = $twouserid;
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

     private $threeuserid;

     public function getThreeuserid()
     {
         return $this->$threeuserid;
     }

     public function setThreeuserid($threeuserid)
     {
         $this->threeuserid = $threeuserid;
         $this->apiParas["threeuserid"] = $threeuserid;
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

     private $oneuserid;

     public function getOneuserid()
     {
         return $this->$oneuserid;
     }

     public function setOneuserid($oneuserid)
     {
         $this->oneuserid = $oneuserid;
         $this->apiParas["oneuserid"] = $oneuserid;
     }

     private $threerealinterestamount;

     public function getThreerealinterestamount()
     {
         return $this->$threerealinterestamount;
     }

     public function setThreerealinterestamount($threerealinterestamount)
     {
         $this->threerealinterestamount = $threerealinterestamount;
         $this->apiParas["threerealinterestamount"] = $threerealinterestamount;
     }

     private $tworealinterestamount;

     public function getTworealinterestamount()
     {
         return $this->$tworealinterestamount;
     }

     public function setTworealinterestamount($tworealinterestamount)
     {
         $this->tworealinterestamount = $tworealinterestamount;
         $this->apiParas["tworealinterestamount"] = $tworealinterestamount;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.interest.repayment.interestpartyinitiativerepament";
     }
     public function check()     {          }}
