<?php
class WheatfieldOprsystemCreditCompanyRequest
{
     private $apiParas = array();

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

     private $registrationorga;

     public function getRegistrationorga()
     {
         return $this->$registrationorga;
     }

     public function setRegistrationorga($registrationorga)
     {
         $this->registrationorga = $registrationorga;
         $this->apiParas["registrationorga"] = $registrationorga;
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

     private $address;

     public function getAddress()
     {
         return $this->$address;
     }

     public function setAddress($address)
     {
         $this->address = $address;
         $this->apiParas["address"] = $address;
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

     private $registfinance;

     public function getRegistfinance()
     {
         return $this->$registfinance;
     }

     public function setRegistfinance($registfinance)
     {
         $this->registfinance = $registfinance;
         $this->apiParas["registfinance"] = $registfinance;
     }

     private $taxregcard;

     public function getTaxregcard()
     {
         return $this->$taxregcard;
     }

     public function setTaxregcard($taxregcard)
     {
         $this->taxregcard = $taxregcard;
         $this->apiParas["taxregcard"] = $taxregcard;
     }

     private $companytype;

     public function getCompanytype()
     {
         return $this->$companytype;
     }

     public function setCompanytype($companytype)
     {
         $this->companytype = $companytype;
         $this->apiParas["companytype"] = $companytype;
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

     private $businesslicense;

     public function getBusinesslicense()
     {
         return $this->$businesslicense;
     }

     public function setBusinesslicense($businesslicense)
     {
         $this->businesslicense = $businesslicense;
         $this->apiParas["businesslicense"] = $businesslicense;
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

     private $acuntopenlince;

     public function getAcuntopenlince()
     {
         return $this->$acuntopenlince;
     }

     public function setAcuntopenlince($acuntopenlince)
     {
         $this->acuntopenlince = $acuntopenlince;
         $this->apiParas["acuntopenlince"] = $acuntopenlince;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.oprsystem.credit.company";
     }
     public function check()     {          }}
