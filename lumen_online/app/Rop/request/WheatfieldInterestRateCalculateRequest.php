<?php
class WheatfieldInterestRateCalculateRequest
{
     private $apiParas = array();

     private $dealproductcode;

     public function getDealproductcode()
     {
         return $this->$dealproductcode;
     }

     public function setDealproductcode($dealproductcode)
     {
         $this->dealproductcode = $dealproductcode;
         $this->apiParas["dealproductcode"] = $dealproductcode;
     }

     private $creditrolecode;

     public function getCreditrolecode()
     {
         return $this->$creditrolecode;
     }

     public function setCreditrolecode($creditrolecode)
     {
         $this->creditrolecode = $creditrolecode;
         $this->apiParas["creditrolecode"] = $creditrolecode;
     }

     private $credituserid;

     public function getCredituserid()
     {
         return $this->$credituserid;
     }

     public function setCredituserid($credituserid)
     {
         $this->credituserid = $credituserid;
         $this->apiParas["credituserid"] = $credituserid;
     }

     private $creditrootinstcd;

     public function getCreditrootinstcd()
     {
         return $this->$creditrootinstcd;
     }

     public function setCreditrootinstcd($creditrootinstcd)
     {
         $this->creditrootinstcd = $creditrootinstcd;
         $this->apiParas["creditrootinstcd"] = $creditrootinstcd;
     }

     private $intouserid;

     public function getIntouserid()
     {
         return $this->$intouserid;
     }

     public function setIntouserid($intouserid)
     {
         $this->intouserid = $intouserid;
         $this->apiParas["intouserid"] = $intouserid;
     }

     private $rolecode;

     public function getRolecode()
     {
         return $this->$rolecode;
     }

     public function setRolecode($rolecode)
     {
         $this->rolecode = $rolecode;
         $this->apiParas["rolecode"] = $rolecode;
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

     private $intoproductid;

     public function getIntoproductid()
     {
         return $this->$intoproductid;
     }

     public function setIntoproductid($intoproductid)
     {
         $this->intoproductid = $intoproductid;
         $this->apiParas["intoproductid"] = $intoproductid;
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

     private $creditproductid;

     public function getCreditproductid()
     {
         return $this->$creditproductid;
     }

     public function setCreditproductid($creditproductid)
     {
         $this->creditproductid = $creditproductid;
         $this->apiParas["creditproductid"] = $creditproductid;
     }

     private $intorolecode;

     public function getIntorolecode()
     {
         return $this->$intorolecode;
     }

     public function setIntorolecode($intorolecode)
     {
         $this->intorolecode = $intorolecode;
         $this->apiParas["intorolecode"] = $intorolecode;
     }

     private $intorootinstcd;

     public function getIntorootinstcd()
     {
         return $this->$intorootinstcd;
     }

     public function setIntorootinstcd($intorootinstcd)
     {
         $this->intorootinstcd = $intorootinstcd;
         $this->apiParas["intorootinstcd"] = $intorootinstcd;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.interest.rate.calculate";
     }
     public function check()     {          }}
