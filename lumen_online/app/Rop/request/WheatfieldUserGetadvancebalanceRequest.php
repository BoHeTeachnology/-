<?php
class WheatfieldUserGetadvancebalanceRequest
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

     private $constid;

     public function getConstid()
     {
         return $this->$constid;
     }

     public function setConstid($constid)
     {
         $this->constid = $constid;
         $this->apiParas["constid"] = $constid;
     }

     private $referuserid;

     public function getReferuserid()
     {
         return $this->$referuserid;
     }

     public function setReferuserid($referuserid)
     {
         $this->referuserid = $referuserid;
         $this->apiParas["referuserid"] = $referuserid;
     }

     private $usertype;

     public function getUsertype()
     {
         return $this->$usertype;
     }

     public function setUsertype($usertype)
     {
         $this->usertype = $usertype;
         $this->apiParas["usertype"] = $usertype;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.user.getadvancebalance";
     }
     public function check()     {          }}
