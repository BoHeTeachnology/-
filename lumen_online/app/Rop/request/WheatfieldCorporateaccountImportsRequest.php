<?php
class WheatfieldCorporateaccountImportsRequest
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

     private $corporateaccountarray;

     public function getCorporateaccountarray()
     {
         return $this->$corporateaccountarray;
     }

     public function setCorporateaccountarray($corporateaccountarray)
     {
         $this->corporateaccountarray = $corporateaccountarray;
         $this->apiParas["corporateaccountarray"] = $corporateaccountarray;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.corporateaccount.imports";
     }
     public function check()     {          }}
