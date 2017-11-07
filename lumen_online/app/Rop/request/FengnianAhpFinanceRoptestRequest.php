<?php
class FengnianAhpFinanceRoptestRequest
{
     private $apiParas = array();

     private $one;

     public function getOne()
     {
         return $this->$one;
     }

     public function setOne($one)
     {
         $this->one = $one;
         $this->apiParas["one"] = $one;
     }

     private $two;

     public function getTwo()
     {
         return $this->$two;
     }

     public function setTwo($two)
     {
         $this->two = $two;
         $this->apiParas["two"] = $two;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.ahp.finance.roptest";
     }
     public function check()     {          }}
