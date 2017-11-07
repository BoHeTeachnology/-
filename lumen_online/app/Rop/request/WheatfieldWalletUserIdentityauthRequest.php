<?php
class WheatfieldWalletUserIdentityauthRequest
{
     private $apiParas = array();

     private $idcard;

     public function getIdcard()
     {
         return $this->$idcard;
     }

     public function setIdcard($idcard)
     {
         $this->idcard = $idcard;
         $this->apiParas["idcard"] = $idcard;
     }

     private $userrealname;

     public function getUserrealname()
     {
         return $this->$userrealname;
     }

     public function setUserrealname($userrealname)
     {
         $this->userrealname = $userrealname;
         $this->apiParas["userrealname"] = $userrealname;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.wallet.user.identityauth";
     }
     public function check()     {          }}
