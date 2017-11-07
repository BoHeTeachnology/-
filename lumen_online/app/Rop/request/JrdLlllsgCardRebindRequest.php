<?php
class JrdLlllsgCardRebindRequest
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

     private $uid;

     public function getUid()
     {
         return $this->$uid;
     }

     public function setUid($uid)
     {
         $this->uid = $uid;
         $this->apiParas["uid"] = $uid;
     }

     private $bankcode;

     public function getBankcode()
     {
         return $this->$bankcode;
     }

     public function setBankcode($bankcode)
     {
         $this->bankcode = $bankcode;
         $this->apiParas["bankcode"] = $bankcode;
     }

     private $bankname;

     public function getBankname()
     {
         return $this->$bankname;
     }

     public function setBankname($bankname)
     {
         $this->bankname = $bankname;
         $this->apiParas["bankname"] = $bankname;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.jrd.llllsg.card.rebind";
     }
     public function check()     {          }}
