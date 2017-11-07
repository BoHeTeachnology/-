<?php
class WheatfieldTlaccountQueryRequest
{
     private $apiParas = array();

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

     private $acctno;

     public function getAcctno()
     {
         return $this->$acctno;
     }

     public function setAcctno($acctno)
     {
         $this->acctno = $acctno;
         $this->apiParas["acctno"] = $acctno;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.tlaccount.query";
     }
     public function check()     {          }}
