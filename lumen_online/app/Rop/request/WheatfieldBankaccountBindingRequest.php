<?php
class WheatfieldBankaccountBindingRequest
{
     private $apiParas = array();

     private $bindid;

     public function getBindid()
     {
         return $this->$bindid;
     }

     public function setBindid($bindid)
     {
         $this->bindid = $bindid;
         $this->apiParas["bindid"] = $bindid;
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

     private $currency;

     public function getCurrency()
     {
         return $this->$currency;
     }

     public function setCurrency($currency)
     {
         $this->currency = $currency;
         $this->apiParas["currency"] = $currency;
     }

     private $certificatenumnumber;

     public function getCertificatenumnumber()
     {
         return $this->$certificatenumnumber;
     }

     public function setCertificatenumnumber($certificatenumnumber)
     {
         $this->certificatenumnumber = $certificatenumnumber;
         $this->apiParas["certificatenumnumber"] = $certificatenumnumber;
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

     private $accountpurpose;

     public function getAccountpurpose()
     {
         return $this->$accountpurpose;
     }

     public function setAccountpurpose($accountpurpose)
     {
         $this->accountpurpose = $accountpurpose;
         $this->apiParas["accountpurpose"] = $accountpurpose;
     }

     private $account_name;

     public function getAccountName()
     {
         return $this->$account_name;
     }

     public function setAccountName($account_name)
     {
         $this->account_name = $account_name;
         $this->apiParas["account_name"] = $account_name;
     }

     private $bank_province;

     public function getBankProvince()
     {
         return $this->$bank_province;
     }

     public function setBankProvince($bank_province)
     {
         $this->bank_province = $bank_province;
         $this->apiParas["bank_province"] = $bank_province;
     }

     private $bank_city;

     public function getBankCity()
     {
         return $this->$bank_city;
     }

     public function setBankCity($bank_city)
     {
         $this->bank_city = $bank_city;
         $this->apiParas["bank_city"] = $bank_city;
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

     private $accountnumber;

     public function getAccountnumber()
     {
         return $this->$accountnumber;
     }

     public function setAccountnumber($accountnumber)
     {
         $this->accountnumber = $accountnumber;
         $this->apiParas["accountnumber"] = $accountnumber;
     }

     private $submit_time;

     public function getSubmitTime()
     {
         return $this->$submit_time;
     }

     public function setSubmitTime($submit_time)
     {
         $this->submit_time = $submit_time;
         $this->apiParas["submit_time"] = $submit_time;
     }

     private $bank_branch;

     public function getBankBranch()
     {
         return $this->$bank_branch;
     }

     public function setBankBranch($bank_branch)
     {
         $this->bank_branch = $bank_branch;
         $this->apiParas["bank_branch"] = $bank_branch;
     }

     private $accountproperty;

     public function getAccountproperty()
     {
         return $this->$accountproperty;
     }

     public function setAccountproperty($accountproperty)
     {
         $this->accountproperty = $accountproperty;
         $this->apiParas["accountproperty"] = $accountproperty;
     }

     private $bankbranchname;

     public function getBankbranchname()
     {
         return $this->$bankbranchname;
     }

     public function setBankbranchname($bankbranchname)
     {
         $this->bankbranchname = $bankbranchname;
         $this->apiParas["bankbranchname"] = $bankbranchname;
     }

     private $openaccountdescription;

     public function getOpenaccountdescription()
     {
         return $this->$openaccountdescription;
     }

     public function setOpenaccountdescription($openaccountdescription)
     {
         $this->openaccountdescription = $openaccountdescription;
         $this->apiParas["openaccountdescription"] = $openaccountdescription;
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

     private $accounttypeid;

     public function getAccounttypeid()
     {
         return $this->$accounttypeid;
     }

     public function setAccounttypeid($accounttypeid)
     {
         $this->accounttypeid = $accounttypeid;
         $this->apiParas["accounttypeid"] = $accounttypeid;
     }

     private $bank_code;

     public function getBankCode()
     {
         return $this->$bank_code;
     }

     public function setBankCode($bank_code)
     {
         $this->bank_code = $bank_code;
         $this->apiParas["bank_code"] = $bank_code;
     }

     private $relatid;

     public function getRelatid()
     {
         return $this->$relatid;
     }

     public function setRelatid($relatid)
     {
         $this->relatid = $relatid;
         $this->apiParas["relatid"] = $relatid;
     }

     private $usertype;

     public function getUsertype()
     {
         return $this->$usertype;
     }

     public function setUsertype($usertype)
     {
         $this->usertype = $usertype;
         $this->apiParas["usertype"] = $usertype;
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

     private $bankheadname;

     public function getBankheadname()
     {
         return $this->$bankheadname;
     }

     public function setBankheadname($bankheadname)
     {
         $this->bankheadname = $bankheadname;
         $this->apiParas["bankheadname"] = $bankheadname;
     }

     private $merrem;

     public function getMerrem()
     {
         return $this->$merrem;
     }

     public function setMerrem($merrem)
     {
         $this->merrem = $merrem;
         $this->apiParas["merrem"] = $merrem;
     }

     private $openaccountdate;

     public function getOpenaccountdate()
     {
         return $this->$openaccountdate;
     }

     public function setOpenaccountdate($openaccountdate)
     {
         $this->openaccountdate = $openaccountdate;
         $this->apiParas["openaccountdate"] = $openaccountdate;
     }

     private $relatedcard;

     public function getRelatedcard()
     {
         return $this->$relatedcard;
     }

     public function setRelatedcard($relatedcard)
     {
         $this->relatedcard = $relatedcard;
         $this->apiParas["relatedcard"] = $relatedcard;
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

     private $tel;

     public function getTel()
     {
         return $this->$tel;
     }

     public function setTel($tel)
     {
         $this->tel = $tel;
         $this->apiParas["tel"] = $tel;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.bankaccount.binding";
     }
     public function check()     {          }}
