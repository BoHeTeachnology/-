<?php
class WheatfieldPersonAccountoprRequest
{
     private $apiParas = array();

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

     private $productid;

     public function getProductid()
     {
         return $this->$productid;
     }

     public function setProductid($productid)
     {
         $this->productid = $productid;
         $this->apiParas["productid"] = $productid;
     }

     private $persontype;

     public function getPersontype()
     {
         return $this->$persontype;
     }

     public function setPersontype($persontype)
     {
         $this->persontype = $persontype;
         $this->apiParas["persontype"] = $persontype;
     }

     private $personchnname;

     public function getPersonchnname()
     {
         return $this->$personchnname;
     }

     public function setPersonchnname($personchnname)
     {
         $this->personchnname = $personchnname;
         $this->apiParas["personchnname"] = $personchnname;
     }

     private $constid;

     public function getConstid()
     {
         return $this->$constid;
     }

     public function setConstid($constid)
     {
         $this->constid = $constid;
         $this->apiParas["constid"] = $constid;
     }

     private $remark;

     public function getRemark()
     {
         return $this->$remark;
     }

     public function setRemark($remark)
     {
         $this->remark = $remark;
         $this->apiParas["remark"] = $remark;
     }

     private $personsex;

     public function getPersonsex()
     {
         return $this->$personsex;
     }

     public function setPersonsex($personsex)
     {
         $this->personsex = $personsex;
         $this->apiParas["personsex"] = $personsex;
     }

     private $certificatetype;

     public function getCertificatetype()
     {
         return $this->$certificatetype;
     }

     public function setCertificatetype($certificatetype)
     {
         $this->certificatetype = $certificatetype;
         $this->apiParas["certificatetype"] = $certificatetype;
     }

     private $certificatenumber;

     public function getCertificatenumber()
     {
         return $this->$certificatenumber;
     }

     public function setCertificatenumber($certificatenumber)
     {
         $this->certificatenumber = $certificatenumber;
         $this->apiParas["certificatenumber"] = $certificatenumber;
     }

     private $mobiletel;

     public function getMobiletel()
     {
         return $this->$mobiletel;
     }

     public function setMobiletel($mobiletel)
     {
         $this->mobiletel = $mobiletel;
         $this->apiParas["mobiletel"] = $mobiletel;
     }

     private $userid;

     public function getUserid()
     {
         return $this->$userid;
     }

     public function setUserid($userid)
     {
         $this->userid = $userid;
         $this->apiParas["userid"] = $userid;
     }

     private $post;

     public function getPost()
     {
         return $this->$post;
     }

     public function setPost($post)
     {
         $this->post = $post;
         $this->apiParas["post"] = $post;
     }

     private $fixtel;

     public function getFixtel()
     {
         return $this->$fixtel;
     }

     public function setFixtel($fixtel)
     {
         $this->fixtel = $fixtel;
         $this->apiParas["fixtel"] = $fixtel;
     }

     private $referuserid;

     public function getReferuserid()
     {
         return $this->$referuserid;
     }

     public function setReferuserid($referuserid)
     {
         $this->referuserid = $referuserid;
         $this->apiParas["referuserid"] = $referuserid;
     }

     private $username;

     public function getUsername()
     {
         return $this->$username;
     }

     public function setUsername($username)
     {
         $this->username = $username;
         $this->apiParas["username"] = $username;
     }

     private $role;

     public function getRole()
     {
         return $this->$role;
     }

     public function setRole($role)
     {
         $this->role = $role;
         $this->apiParas["role"] = $role;
     }

     private $birthday;

     public function getBirthday()
     {
         return $this->$birthday;
     }

     public function setBirthday($birthday)
     {
         $this->birthday = $birthday;
         $this->apiParas["birthday"] = $birthday;
     }

     private $personengname;

     public function getPersonengname()
     {
         return $this->$personengname;
     }

     public function setPersonengname($personengname)
     {
         $this->personengname = $personengname;
         $this->apiParas["personengname"] = $personengname;
     }

     private $opertype;

     public function getOpertype()
     {
         return $this->$opertype;
     }

     public function setOpertype($opertype)
     {
         $this->opertype = $opertype;
         $this->apiParas["opertype"] = $opertype;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.person.accountopr";
     }
     public function check()     {          }}
