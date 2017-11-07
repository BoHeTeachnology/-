<?php
class WheatfieldRatetemplateQueryRequest
{
     private $apiParas = array();

     private $providerid;

     public function getProviderid()
     {
         return $this->$providerid;
     }

     public function setProviderid($providerid)
     {
         $this->providerid = $providerid;
         $this->apiParas["providerid"] = $providerid;
     }

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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.ratetemplate.query";
     }
     public function check()     {          }}
