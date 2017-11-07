<?php
class TlpaySingleRealtimeValidateRequest
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

     private $id;

     public function getId()
     {
         return $this->$id;
     }

     public function setId($id)
     {
         $this->id = $id;
         $this->apiParas["id"] = $id;
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

     private $account_prop;

     public function getAccountProp()
     {
         return $this->$account_prop;
     }

     public function setAccountProp($account_prop)
     {
         $this->account_prop = $account_prop;
         $this->apiParas["account_prop"] = $account_prop;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.tlpay.single.realtime.validate";
     }
     public function check()     {          }}
