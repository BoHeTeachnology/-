<?php
class JrdLlllsgCardinfoGetRequest
{
     private $apiParas = array();

     private $card_num;

     public function getCardNum()
     {
         return $this->$card_num;
     }

     public function setCardNum($card_num)
     {
         $this->card_num = $card_num;
         $this->apiParas["card_num"] = $card_num;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.jrd.llllsg.cardinfo.get";
     }
     public function check()     {          }}
