<?php
class HoneycombAddressbookanalysisPostRequest
{
     private $apiParas = array();

     private $applycourse;

     public function getApplycourse()
     {
         return $this->$applycourse;
     }

     public function setApplycourse($applycourse)
     {
         $this->applycourse = $applycourse;
         $this->apiParas["applycourse"] = $applycourse;
     }

     private $bankaccountid;

     public function getBankaccountid()
     {
         return $this->$bankaccountid;
     }

     public function setBankaccountid($bankaccountid)
     {
         $this->bankaccountid = $bankaccountid;
         $this->apiParas["bankaccountid"] = $bankaccountid;
     }

     private $headbank;

     public function getHeadbank()
     {
         return $this->$headbank;
     }

     public function setHeadbank($headbank)
     {
         $this->headbank = $headbank;
         $this->apiParas["headbank"] = $headbank;
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

     private $wechatid;

     public function getWechatid()
     {
         return $this->$wechatid;
     }

     public function setWechatid($wechatid)
     {
         $this->wechatid = $wechatid;
         $this->apiParas["wechatid"] = $wechatid;
     }

     private $companyname;

     public function getCompanyname()
     {
         return $this->$companyname;
     }

     public function setCompanyname($companyname)
     {
         $this->companyname = $companyname;
         $this->apiParas["companyname"] = $companyname;
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

     private $socialstatus;

     public function getSocialstatus()
     {
         return $this->$socialstatus;
     }

     public function setSocialstatus($socialstatus)
     {
         $this->socialstatus = $socialstatus;
         $this->apiParas["socialstatus"] = $socialstatus;
     }

     private $firstphonenumber;

     public function getFirstphonenumber()
     {
         return $this->$firstphonenumber;
     }

     public function setFirstphonenumber($firstphonenumber)
     {
         $this->firstphonenumber = $firstphonenumber;
         $this->apiParas["firstphonenumber"] = $firstphonenumber;
     }

     private $applyadviser;

     public function getApplyadviser()
     {
         return $this->$applyadviser;
     }

     public function setApplyadviser($applyadviser)
     {
         $this->applyadviser = $applyadviser;
         $this->apiParas["applyadviser"] = $applyadviser;
     }

     private $applyadvisertelnumber;

     public function getApplyadvisertelnumber()
     {
         return $this->$applyadvisertelnumber;
     }

     public function setApplyadvisertelnumber($applyadvisertelnumber)
     {
         $this->applyadvisertelnumber = $applyadvisertelnumber;
         $this->apiParas["applyadvisertelnumber"] = $applyadvisertelnumber;
     }

     private $idperiodend;

     public function getIdperiodend()
     {
         return $this->$idperiodend;
     }

     public function setIdperiodend($idperiodend)
     {
         $this->idperiodend = $idperiodend;
         $this->apiParas["idperiodend"] = $idperiodend;
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

     private $rootinstcd;

     public function getRootinstcd()
     {
         return $this->$rootinstcd;
     }

     public function setRootinstcd($rootinstcd)
     {
         $this->rootinstcd = $rootinstcd;
         $this->apiParas["rootinstcd"] = $rootinstcd;
     }

     private $gps;

     public function getGps()
     {
         return $this->$gps;
     }

     public function setGps($gps)
     {
         $this->gps = $gps;
         $this->apiParas["gps"] = $gps;
     }

     private $addressbooksum;

     public function getAddressbooksum()
     {
         return $this->$addressbooksum;
     }

     public function setAddressbooksum($addressbooksum)
     {
         $this->addressbooksum = $addressbooksum;
         $this->apiParas["addressbooksum"] = $addressbooksum;
     }

     private $secondconnector;

     public function getSecondconnector()
     {
         return $this->$secondconnector;
     }

     public function setSecondconnector($secondconnector)
     {
         $this->secondconnector = $secondconnector;
         $this->apiParas["secondconnector"] = $secondconnector;
     }

     private $firstconnector;

     public function getFirstconnector()
     {
         return $this->$firstconnector;
     }

     public function setFirstconnector($firstconnector)
     {
         $this->firstconnector = $firstconnector;
         $this->apiParas["firstconnector"] = $firstconnector;
     }

     private $firstrelation;

     public function getFirstrelation()
     {
         return $this->$firstrelation;
     }

     public function setFirstrelation($firstrelation)
     {
         $this->firstrelation = $firstrelation;
         $this->apiParas["firstrelation"] = $firstrelation;
     }

     private $companytelnumber;

     public function getCompanytelnumber()
     {
         return $this->$companytelnumber;
     }

     public function setCompanytelnumber($companytelnumber)
     {
         $this->companytelnumber = $companytelnumber;
         $this->apiParas["companytelnumber"] = $companytelnumber;
     }

     private $addressbooks;

     public function getAddressbooks()
     {
         return $this->$addressbooks;
     }

     public function setAddressbooks($addressbooks)
     {
         $this->addressbooks = $addressbooks;
         $this->apiParas["addressbooks"] = $addressbooks;
     }

     private $edubackground;

     public function getEdubackground()
     {
         return $this->$edubackground;
     }

     public function setEdubackground($edubackground)
     {
         $this->edubackground = $edubackground;
         $this->apiParas["edubackground"] = $edubackground;
     }

     private $secondphonenumber;

     public function getSecondphonenumber()
     {
         return $this->$secondphonenumber;
     }

     public function setSecondphonenumber($secondphonenumber)
     {
         $this->secondphonenumber = $secondphonenumber;
         $this->apiParas["secondphonenumber"] = $secondphonenumber;
     }

     private $orderid;

     public function getOrderid()
     {
         return $this->$orderid;
     }

     public function setOrderid($orderid)
     {
         $this->orderid = $orderid;
         $this->apiParas["orderid"] = $orderid;
     }

     private $applyloansource;

     public function getApplyloansource()
     {
         return $this->$applyloansource;
     }

     public function setApplyloansource($applyloansource)
     {
         $this->applyloansource = $applyloansource;
         $this->apiParas["applyloansource"] = $applyloansource;
     }

     private $gpslocation;

     public function getGpslocation()
     {
         return $this->$gpslocation;
     }

     public function setGpslocation($gpslocation)
     {
         $this->gpslocation = $gpslocation;
         $this->apiParas["gpslocation"] = $gpslocation;
     }

     private $idnumber;

     public function getIdnumber()
     {
         return $this->$idnumber;
     }

     public function setIdnumber($idnumber)
     {
         $this->idnumber = $idnumber;
         $this->apiParas["idnumber"] = $idnumber;
     }

     private $checkorderid;

     public function getCheckorderid()
     {
         return $this->$checkorderid;
     }

     public function setCheckorderid($checkorderid)
     {
         $this->checkorderid = $checkorderid;
         $this->apiParas["checkorderid"] = $checkorderid;
     }

     private $secondrelation;

     public function getSecondrelation()
     {
         return $this->$secondrelation;
     }

     public function setSecondrelation($secondrelation)
     {
         $this->secondrelation = $secondrelation;
         $this->apiParas["secondrelation"] = $secondrelation;
     }

     private $occupation;

     public function getOccupation()
     {
         return $this->$occupation;
     }

     public function setOccupation($occupation)
     {
         $this->occupation = $occupation;
         $this->apiParas["occupation"] = $occupation;
     }

     private $applyorg;

     public function getApplyorg()
     {
         return $this->$applyorg;
     }

     public function setApplyorg($applyorg)
     {
         $this->applyorg = $applyorg;
         $this->apiParas["applyorg"] = $applyorg;
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

     private $phonenumber;

     public function getPhonenumber()
     {
         return $this->$phonenumber;
     }

     public function setPhonenumber($phonenumber)
     {
         $this->phonenumber = $phonenumber;
         $this->apiParas["phonenumber"] = $phonenumber;
     }

     private $sex;

     public function getSex()
     {
         return $this->$sex;
     }

     public function setSex($sex)
     {
         $this->sex = $sex;
         $this->apiParas["sex"] = $sex;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.honeycomb.addressbookanalysis.post";
     }
     public function check()     {          }}
