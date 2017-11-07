<?php
class WheatfieldPycreditPersonBankChecksRequest
{
     private $apiParas = array();

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

     private $bank_no;

     public function getBankNo()
     {
         return $this->$bank_no;
     }

     public function setBankNo($bank_no)
     {
         $this->bank_no = $bank_no;
         $this->apiParas["bank_no"] = $bank_no;
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

     private $sign_type;

     public function getSignType()
     {
         return $this->$sign_type;
     }

     public function setSignType($sign_type)
     {
         $this->sign_type = $sign_type;
         $this->apiParas["sign_type"] = $sign_type;
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

     private $sys_no;

     public function getSysNo()
     {
         return $this->$sys_no;
     }

     public function setSysNo($sys_no)
     {
         $this->sys_no = $sys_no;
         $this->apiParas["sys_no"] = $sys_no;
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

     private $real_time;

     public function getRealTime()
     {
         return $this->$real_time;
     }

     public function setRealTime($real_time)
     {
         $this->real_time = $real_time;
         $this->apiParas["real_time"] = $real_time;
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

     private $query_name;

     public function getQueryName()
     {
         return $this->$query_name;
     }

     public function setQueryName($query_name)
     {
         $this->query_name = $query_name;
         $this->apiParas["query_name"] = $query_name;
     }

     private $sign_msg;

     public function getSignMsg()
     {
         return $this->$sign_msg;
     }

     public function setSignMsg($sign_msg)
     {
         $this->sign_msg = $sign_msg;
         $this->apiParas["sign_msg"] = $sign_msg;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.pycredit.person.bank.checks";
     }
     public function check()     {          }}
