<?php
class FengnianWalletCreditdataBankcardRequest
{
     private $apiParas = array();

     private $name_h;

     public function getNameH()
     {
         return $this->$name_h;
     }

     public function setNameH($name_h)
     {
         $this->name_h = $name_h;
         $this->apiParas["name_h"] = $name_h;
     }

     private $identitycard;

     public function getIdentitycard()
     {
         return $this->$identitycard;
     }

     public function setIdentitycard($identitycard)
     {
         $this->identitycard = $identitycard;
         $this->apiParas["identitycard"] = $identitycard;
     }

     private $bankcard;

     public function getBankcard()
     {
         return $this->$bankcard;
     }

     public function setBankcard($bankcard)
     {
         $this->bankcard = $bankcard;
         $this->apiParas["bankcard"] = $bankcard;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.wallet.creditdata.bankcard";
     }
     public function check()     {          }}
