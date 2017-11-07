<?php
class WheatfieldUserTransferBatchRequest
{
     private $apiParas = array();

     private $intouserinfo;

     public function getIntouserinfo()
     {
         return $this->$intouserinfo;
     }

     public function setIntouserinfo($intouserinfo)
     {
         $this->intouserinfo = $intouserinfo;
         $this->apiParas["intouserinfo"] = $intouserinfo;
     }

     private $outuserinfo;

     public function getOutuserinfo()
     {
         return $this->$outuserinfo;
     }

     public function setOutuserinfo($outuserinfo)
     {
         $this->outuserinfo = $outuserinfo;
         $this->apiParas["outuserinfo"] = $outuserinfo;
     }

     private $merchantcode;

     public function getMerchantcode()
     {
         return $this->$merchantcode;
     }

     public function setMerchantcode($merchantcode)
     {
         $this->merchantcode = $merchantcode;
         $this->apiParas["merchantcode"] = $merchantcode;
     }

     private $useripaddress;

     public function getUseripaddress()
     {
         return $this->$useripaddress;
     }

     public function setUseripaddress($useripaddress)
     {
         $this->useripaddress = $useripaddress;
         $this->apiParas["useripaddress"] = $useripaddress;
     }

     private $orderpackageno;

     public function getOrderpackageno()
     {
         return $this->$orderpackageno;
     }

     public function setOrderpackageno($orderpackageno)
     {
         $this->orderpackageno = $orderpackageno;
         $this->apiParas["orderpackageno"] = $orderpackageno;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.user.transfer.batch";
     }
     public function check()     {          }}
