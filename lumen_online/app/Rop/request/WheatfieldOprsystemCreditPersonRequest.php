<?php
class WheatfieldOprsystemCreditPersonRequest
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

     private $certificatestartdate;

     public function getCertificatestartdate()
     {
         return $this->$certificatestartdate;
     }

     public function setCertificatestartdate($certificatestartdate)
     {
         $this->certificatestartdate = $certificatestartdate;
         $this->apiParas["certificatestartdate"] = $certificatestartdate;
     }

     private $certificateexpiredate;

     public function getCertificateexpiredate()
     {
         return $this->$certificateexpiredate;
     }

     public function setCertificateexpiredate($certificateexpiredate)
     {
         $this->certificateexpiredate = $certificateexpiredate;
         $this->apiParas["certificateexpiredate"] = $certificateexpiredate;
     }

     private $mobilephone;

     public function getMobilephone()
     {
         return $this->$mobilephone;
     }

     public function setMobilephone($mobilephone)
     {
         $this->mobilephone = $mobilephone;
         $this->apiParas["mobilephone"] = $mobilephone;
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

     private $certificatenumber;

     public function getCertificatenumber()
     {
         return $this->$certificatenumber;
     }

     public function setCertificatenumber($certificatenumber)
     {
         $this->certificatenumber = $certificatenumber;
         $this->apiParas["certificatenumber"] = $certificatenumber;
     }

     private $username;

     public function getUsername()
     {
         return $this->$username;
     }

     public function setUsername($username)
     {
         $this->username = $username;
         $this->apiParas["username"] = $username;
     }

     private $occupation;

     public function getOccupation()
     {
         return $this->$occupation;
     }

     public function setOccupation($occupation)
     {
         $this->occupation = $occupation;
         $this->apiParas["occupation"] = $occupation;
     }

     private $isauthor;

     public function getIsauthor()
     {
         return $this->$isauthor;
     }

     public function setIsauthor($isauthor)
     {
         $this->isauthor = $isauthor;
         $this->apiParas["isauthor"] = $isauthor;
     }

     private $tcaccount;

     public function getTcaccount()
     {
         return $this->$tcaccount;
     }

     public function setTcaccount($tcaccount)
     {
         $this->tcaccount = $tcaccount;
         $this->apiParas["tcaccount"] = $tcaccount;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.oprsystem.credit.person";
     }
     public function check()     {          }}
