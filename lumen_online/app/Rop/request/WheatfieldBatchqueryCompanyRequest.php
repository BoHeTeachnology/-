<?php
class WheatfieldBatchqueryCompanyRequest
{
     private $apiParas = array();

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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.batchquery.company";
     }
     public function check()     {          }}
