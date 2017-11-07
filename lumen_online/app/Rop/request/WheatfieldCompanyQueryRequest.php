<?php
class WheatfieldCompanyQueryRequest
{
     private $apiParas = array();

     private $shortname;

     public function getShortname()
     {
         return $this->$shortname;
     }

     public function setShortname($shortname)
     {
         $this->shortname = $shortname;
         $this->apiParas["shortname"] = $shortname;
     }

     private $corporatename;

     public function getCorporatename()
     {
         return $this->$corporatename;
     }

     public function setCorporatename($corporatename)
     {
         $this->corporatename = $corporatename;
         $this->apiParas["corporatename"] = $corporatename;
     }

     private $acuntopnlince;

     public function getAcuntopnlince()
     {
         return $this->$acuntopnlince;
     }

     public function setAcuntopnlince($acuntopnlince)
     {
         $this->acuntopnlince = $acuntopnlince;
         $this->apiParas["acuntopnlince"] = $acuntopnlince;
     }

     private $status;

     public function getStatus()
     {
         return $this->$status;
     }

     public function setStatus($status)
     {
         $this->status = $status;
         $this->apiParas["status"] = $status;
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

     private $organcertificate;

     public function getOrgancertificate()
     {
         return $this->$organcertificate;
     }

     public function setOrgancertificate($organcertificate)
     {
         $this->organcertificate = $organcertificate;
         $this->apiParas["organcertificate"] = $organcertificate;
     }

     private $companyname;

     public function getCompanyname()
     {
         return $this->$companyname;
     }

     public function setCompanyname($companyname)
     {
         $this->companyname = $companyname;
         $this->apiParas["companyname"] = $companyname;
     }

     private $createdstarttime;

     public function getCreatedstarttime()
     {
         return $this->$createdstarttime;
     }

     public function setCreatedstarttime($createdstarttime)
     {
         $this->createdstarttime = $createdstarttime;
         $this->apiParas["createdstarttime"] = $createdstarttime;
     }

     private $corporateidentity;

     public function getCorporateidentity()
     {
         return $this->$corporateidentity;
     }

     public function setCorporateidentity($corporateidentity)
     {
         $this->corporateidentity = $corporateidentity;
         $this->apiParas["corporateidentity"] = $corporateidentity;
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

     private $buslince;

     public function getBuslince()
     {
         return $this->$buslince;
     }

     public function setBuslince($buslince)
     {
         $this->buslince = $buslince;
         $this->apiParas["buslince"] = $buslince;
     }

     private $companycode;

     public function getCompanycode()
     {
         return $this->$companycode;
     }

     public function setCompanycode($companycode)
     {
         $this->companycode = $companycode;
         $this->apiParas["companycode"] = $companycode;
     }

     private $createdendtime;

     public function getCreatedendtime()
     {
         return $this->$createdendtime;
     }

     public function setCreatedendtime($createdendtime)
     {
         $this->createdendtime = $createdendtime;
         $this->apiParas["createdendtime"] = $createdendtime;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.company.query";
     }
     public function check()     {          }}
