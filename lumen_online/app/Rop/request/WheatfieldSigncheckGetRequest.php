<?php
class WheatfieldSigncheckGetRequest
{
     private $apiParas = array();

     private $merchantid;

     public function getMerchantid()
     {
         return $this->$merchantid;
     }

     public function setMerchantid($merchantid)
     {
         $this->merchantid = $merchantid;
         $this->apiParas["merchantid"] = $merchantid;
     }

     private $acct;

     public function getAcct()
     {
         return $this->$acct;
     }

     public function setAcct($acct)
     {
         $this->acct = $acct;
         $this->apiParas["acct"] = $acct;
     }

     private $agreementno;

     public function getAgreementno()
     {
         return $this->$agreementno;
     }

     public function setAgreementno($agreementno)
     {
         $this->agreementno = $agreementno;
         $this->apiParas["agreementno"] = $agreementno;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.signcheck.get";
     }
     public function check()     {          }}
