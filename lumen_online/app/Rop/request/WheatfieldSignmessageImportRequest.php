<?php
class WheatfieldSignmessageImportRequest
{
     private $apiParas = array();

     private $merchant_id;

     public function getMerchantId()
     {
         return $this->$merchant_id;
     }

     public function setMerchantId($merchant_id)
     {
         $this->merchant_id = $merchant_id;
         $this->apiParas["merchant_id"] = $merchant_id;
     }

     private $contractno;

     public function getContractno()
     {
         return $this->$contractno;
     }

     public function setContractno($contractno)
     {
         $this->contractno = $contractno;
         $this->apiParas["contractno"] = $contractno;
     }

     private $req_sn;

     public function getReqSn()
     {
         return $this->$req_sn;
     }

     public function setReqSn($req_sn)
     {
         $this->req_sn = $req_sn;
         $this->apiParas["req_sn"] = $req_sn;
     }

     private $signinfodetailarray;

     public function getSigninfodetailarray()
     {
         return $this->$signinfodetailarray;
     }

     public function setSigninfodetailarray($signinfodetailarray)
     {
         $this->signinfodetailarray = $signinfodetailarray;
         $this->apiParas["signinfodetailarray"] = $signinfodetailarray;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.signmessage.import";
     }
     public function check()     {          }}
