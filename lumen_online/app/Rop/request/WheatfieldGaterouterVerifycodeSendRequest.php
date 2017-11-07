<?php
class WheatfieldGaterouterVerifycodeSendRequest
{
     private $apiParas = array();

     private $channel_no;

     public function getChannelNo()
     {
         return $this->$channel_no;
     }

     public function setChannelNo($channel_no)
     {
         $this->channel_no = $channel_no;
         $this->apiParas["channel_no"] = $channel_no;
     }

     private $account_type;

     public function getAccountType()
     {
         return $this->$account_type;
     }

     public function setAccountType($account_type)
     {
         $this->account_type = $account_type;
         $this->apiParas["account_type"] = $account_type;
     }

     private $trans_code;

     public function getTransCode()
     {
         return $this->$trans_code;
     }

     public function setTransCode($trans_code)
     {
         $this->trans_code = $trans_code;
         $this->apiParas["trans_code"] = $trans_code;
     }

     private $id_type;

     public function getIdType()
     {
         return $this->$id_type;
     }

     public function setIdType($id_type)
     {
         $this->id_type = $id_type;
         $this->apiParas["id_type"] = $id_type;
     }

     private $org_no;

     public function getOrgNo()
     {
         return $this->$org_no;
     }

     public function setOrgNo($org_no)
     {
         $this->org_no = $org_no;
         $this->apiParas["org_no"] = $org_no;
     }

     private $account_no;

     public function getAccountNo()
     {
         return $this->$account_no;
     }

     public function setAccountNo($account_no)
     {
         $this->account_no = $account_no;
         $this->apiParas["account_no"] = $account_no;
     }

     private $id_code;

     public function getIdCode()
     {
         return $this->$id_code;
     }

     public function setIdCode($id_code)
     {
         $this->id_code = $id_code;
         $this->apiParas["id_code"] = $id_code;
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

     private $busi_code;

     public function getBusiCode()
     {
         return $this->$busi_code;
     }

     public function setBusiCode($busi_code)
     {
         $this->busi_code = $busi_code;
         $this->apiParas["busi_code"] = $busi_code;
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

     private $mobile;

     public function getMobile()
     {
         return $this->$mobile;
     }

     public function setMobile($mobile)
     {
         $this->mobile = $mobile;
         $this->apiParas["mobile"] = $mobile;
     }

     private $summary;

     public function getSummary()
     {
         return $this->$summary;
     }

     public function setSummary($summary)
     {
         $this->summary = $summary;
         $this->apiParas["summary"] = $summary;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.gaterouter.verifycode.send";
     }
     public function check()     {          }}
