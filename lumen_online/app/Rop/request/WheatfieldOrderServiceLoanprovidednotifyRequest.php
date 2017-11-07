<?php
class WheatfieldOrderServiceLoanprovidednotifyRequest
{
     private $apiParas = array();

     private $paramtype;

     public function getParamtype()
     {
         return $this->$paramtype;
     }

     public function setParamtype($paramtype)
     {
         $this->paramtype = $paramtype;
         $this->apiParas["paramtype"] = $paramtype;
     }

     private $requestparam;

     public function getRequestparam()
     {
         return $this->$requestparam;
     }

     public function setRequestparam($requestparam)
     {
         $this->requestparam = $requestparam;
         $this->apiParas["requestparam"] = $requestparam;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.order.service.loanprovidednotify";
     }
     public function check()     {          }}
