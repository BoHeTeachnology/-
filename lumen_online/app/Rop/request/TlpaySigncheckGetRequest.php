<?php
class TlpaySigncheckGetRequest
{
     private $apiParas = array();

     private $merchant_id;

     public function getMerchantId()
     {
         return $this->$merchant_id;
     }

     public function setMerchantId($merchant_id)
     {
         $this->merchant_id = $merchant_id;
         $this->apiParas["merchant_id"] = $merchant_id;
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
         return "ruixue.tlpay.signcheck.get";
     }
     public function check()     {          }}
