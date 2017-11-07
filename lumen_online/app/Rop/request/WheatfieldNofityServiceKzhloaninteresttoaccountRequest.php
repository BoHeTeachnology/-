<?php
class WheatfieldNofityServiceKzhloaninteresttoaccountRequest
{
     private $apiParas = array();

     private $interestdate;

     public function getInterestdate()
     {
         return $this->$interestdate;
     }

     public function setInterestdate($interestdate)
     {
         $this->interestdate = $interestdate;
         $this->apiParas["interestdate"] = $interestdate;
     }

     private $ordernolist;

     public function getOrdernolist()
     {
         return $this->$ordernolist;
     }

     public function setOrdernolist($ordernolist)
     {
         $this->ordernolist = $ordernolist;
         $this->apiParas["ordernolist"] = $ordernolist;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.nofity.service.kzhloaninteresttoaccount";
     }
     public function check()     {          }}
