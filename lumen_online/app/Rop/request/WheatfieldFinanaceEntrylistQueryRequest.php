<?php
class WheatfieldFinanaceEntrylistQueryRequest
{
     private $apiParas = array();

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

     private $createdtimeto;

     public function getCreatedtimeto()
     {
         return $this->$createdtimeto;
     }

     public function setCreatedtimeto($createdtimeto)
     {
         $this->createdtimeto = $createdtimeto;
         $this->apiParas["createdtimeto"] = $createdtimeto;
     }

     private $createdtimefrom;

     public function getCreatedtimefrom()
     {
         return $this->$createdtimefrom;
     }

     public function setCreatedtimefrom($createdtimefrom)
     {
         $this->createdtimefrom = $createdtimefrom;
         $this->apiParas["createdtimefrom"] = $createdtimefrom;
     }

     private $requestid;

     public function getRequestid()
     {
         return $this->$requestid;
     }

     public function setRequestid($requestid)
     {
         $this->requestid = $requestid;
         $this->apiParas["requestid"] = $requestid;
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
         return "ruixue.wheatfield.finanace.entrylist.query";
     }
     public function check()     {          }}
