<?php
class WheatfieldOprsystemMerchantnetRequest
{
     private $apiParas = array();

     private $merchantname;

     public function getMerchantname()
     {
         return $this->$merchantname;
     }

     public function setMerchantname($merchantname)
     {
         $this->merchantname = $merchantname;
         $this->apiParas["merchantname"] = $merchantname;
     }

     private $mobilephone;

     public function getMobilephone()
     {
         return $this->$mobilephone;
     }

     public function setMobilephone($mobilephone)
     {
         $this->mobilephone = $mobilephone;
         $this->apiParas["mobilephone"] = $mobilephone;
     }

     private $address;

     public function getAddress()
     {
         return $this->$address;
     }

     public function setAddress($address)
     {
         $this->address = $address;
         $this->apiParas["address"] = $address;
     }

     private $customercode;

     public function getCustomercode()
     {
         return $this->$customercode;
     }

     public function setCustomercode($customercode)
     {
         $this->customercode = $customercode;
         $this->apiParas["customercode"] = $customercode;
     }

     private $merchantownername;

     public function getMerchantownername()
     {
         return $this->$merchantownername;
     }

     public function setMerchantownername($merchantownername)
     {
         $this->merchantownername = $merchantownername;
         $this->apiParas["merchantownername"] = $merchantownername;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.oprsystem.merchantnet";
     }
     public function check()     {          }}
