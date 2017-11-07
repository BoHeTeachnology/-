<?php
class JrdLlllsgUserRealnameValidateRequest
{
     private $apiParas = array();

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

     private $name;

     public function getName()
     {
         return $this->$name;
     }

     public function setName($name)
     {
         $this->name = $name;
         $this->apiParas["name"] = $name;
     }

     private $cardnum;

     public function getCardnum()
     {
         return $this->$cardnum;
     }

     public function setCardnum($cardnum)
     {
         $this->cardnum = $cardnum;
         $this->apiParas["cardnum"] = $cardnum;
     }

     private $idcardnum;

     public function getIdcardnum()
     {
         return $this->$idcardnum;
     }

     public function setIdcardnum($idcardnum)
     {
         $this->idcardnum = $idcardnum;
         $this->apiParas["idcardnum"] = $idcardnum;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.jrd.llllsg.user.realname.validate";
     }
     public function check()     {          }}
