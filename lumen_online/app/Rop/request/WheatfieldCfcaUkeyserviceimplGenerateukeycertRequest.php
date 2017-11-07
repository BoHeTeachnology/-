<?php
class WheatfieldCfcaUkeyserviceimplGenerateukeycertRequest
{
     private $apiParas = array();

     private $duration;

     public function getDuration()
     {
         return $this->$duration;
     }

     public function setDuration($duration)
     {
         $this->duration = $duration;
         $this->apiParas["duration"] = $duration;
     }

     private $user_name;

     public function getUserName()
     {
         return $this->$user_name;
     }

     public function setUserName($user_name)
     {
         $this->user_name = $user_name;
         $this->apiParas["user_name"] = $user_name;
     }

     private $cert_type;

     public function getCertType()
     {
         return $this->$cert_type;
     }

     public function setCertType($cert_type)
     {
         $this->cert_type = $cert_type;
         $this->apiParas["cert_type"] = $cert_type;
     }

     private $email;

     public function getEmail()
     {
         return $this->$email;
     }

     public function setEmail($email)
     {
         $this->email = $email;
         $this->apiParas["email"] = $email;
     }

     private $org_id;

     public function getOrgId()
     {
         return $this->$org_id;
     }

     public function setOrgId($org_id)
     {
         $this->org_id = $org_id;
         $this->apiParas["org_id"] = $org_id;
     }

     private $self_ext_value;

     public function getSelfExtValue()
     {
         return $this->$self_ext_value;
     }

     public function setSelfExtValue($self_ext_value)
     {
         $this->self_ext_value = $self_ext_value;
         $this->apiParas["self_ext_value"] = $self_ext_value;
     }

     private $add_ident_no_ext;

     public function getAddIdentNoExt()
     {
         return $this->$add_ident_no_ext;
     }

     public function setAddIdentNoExt($add_ident_no_ext)
     {
         $this->add_ident_no_ext = $add_ident_no_ext;
         $this->apiParas["add_ident_no_ext"] = $add_ident_no_ext;
     }

     private $user_id;

     public function getUserId()
     {
         return $this->$user_id;
     }

     public function setUserId($user_id)
     {
         $this->user_id = $user_id;
         $this->apiParas["user_id"] = $user_id;
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

     private $ident_type;

     public function getIdentType()
     {
         return $this->$ident_type;
     }

     public function setIdentType($ident_type)
     {
         $this->ident_type = $ident_type;
         $this->apiParas["ident_type"] = $ident_type;
     }

     private $user_ident;

     public function getUserIdent()
     {
         return $this->$user_ident;
     }

     public function setUserIdent($user_ident)
     {
         $this->user_ident = $user_ident;
         $this->apiParas["user_ident"] = $user_ident;
     }

     private $pten;

     public function getPten()
     {
         return $this->$pten;
     }

     public function setPten($pten)
     {
         $this->pten = $pten;
         $this->apiParas["pten"] = $pten;
     }

     private $customer_type;

     public function getCustomerType()
     {
         return $this->$customer_type;
     }

     public function setCustomerType($customer_type)
     {
         $this->customer_type = $customer_type;
         $this->apiParas["customer_type"] = $customer_type;
     }

     private $user_name_in_dn;

     public function getUserNameInDn()
     {
         return $this->$user_name_in_dn;
     }

     public function setUserNameInDn($user_name_in_dn)
     {
         $this->user_name_in_dn = $user_name_in_dn;
         $this->apiParas["user_name_in_dn"] = $user_name_in_dn;
     }

     private $end_time;

     public function getEndTime()
     {
         return $this->$end_time;
     }

     public function setEndTime($end_time)
     {
         $this->end_time = $end_time;
         $this->apiParas["end_time"] = $end_time;
     }

     private $phone_no;

     public function getPhoneNo()
     {
         return $this->$phone_no;
     }

     public function setPhoneNo($phone_no)
     {
         $this->phone_no = $phone_no;
         $this->apiParas["phone_no"] = $phone_no;
     }

     private $ident_no;

     public function getIdentNo()
     {
         return $this->$ident_no;
     }

     public function setIdentNo($ident_no)
     {
         $this->ident_no = $ident_no;
         $this->apiParas["ident_no"] = $ident_no;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.cfca.ukeyserviceimpl.generateukeycert";
     }
     public function check()     {          }}
