<?php
class WheatfieldBatchqueryPersonRequest
{
     private $apiParas = array();

     private $personchnname;

     public function getPersonchnname()
     {
         return $this->$personchnname;
     }

     public function setPersonchnname($personchnname)
     {
         $this->personchnname = $personchnname;
         $this->apiParas["personchnname"] = $personchnname;
     }

     private $birthdayfrom;

     public function getBirthdayfrom()
     {
         return $this->$birthdayfrom;
     }

     public function setBirthdayfrom($birthdayfrom)
     {
         $this->birthdayfrom = $birthdayfrom;
         $this->apiParas["birthdayfrom"] = $birthdayfrom;
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

     private $email;

     public function getEmail()
     {
         return $this->$email;
     }

     public function setEmail($email)
     {
         $this->email = $email;
         $this->apiParas["email"] = $email;
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

     private $birthdayto;

     public function getBirthdayto()
     {
         return $this->$birthdayto;
     }

     public function setBirthdayto($birthdayto)
     {
         $this->birthdayto = $birthdayto;
         $this->apiParas["birthdayto"] = $birthdayto;
     }

     private $statusid;

     public function getStatusid()
     {
         return $this->$statusid;
     }

     public function setStatusid($statusid)
     {
         $this->statusid = $statusid;
         $this->apiParas["statusid"] = $statusid;
     }

     private $personengname;

     public function getPersonengname()
     {
         return $this->$personengname;
     }

     public function setPersonengname($personengname)
     {
         $this->personengname = $personengname;
         $this->apiParas["personengname"] = $personengname;
     }

     private $mobiletel;

     public function getMobiletel()
     {
         return $this->$mobiletel;
     }

     public function setMobiletel($mobiletel)
     {
         $this->mobiletel = $mobiletel;
         $this->apiParas["mobiletel"] = $mobiletel;
     }

     private $personsex;

     public function getPersonsex()
     {
         return $this->$personsex;
     }

     public function setPersonsex($personsex)
     {
         $this->personsex = $personsex;
         $this->apiParas["personsex"] = $personsex;
     }

     private $certificatetype;

     public function getCertificatetype()
     {
         return $this->$certificatetype;
     }

     public function setCertificatetype($certificatetype)
     {
         $this->certificatetype = $certificatetype;
         $this->apiParas["certificatetype"] = $certificatetype;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.batchquery.person";
     }
     public function check()     {          }}
