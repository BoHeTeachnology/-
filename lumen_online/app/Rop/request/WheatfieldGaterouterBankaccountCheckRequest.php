<?php
class WheatfieldGaterouterBankaccountCheckRequest
{
     private $apiParas = array();

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

     private $org_code;

     public function getOrgCode()
     {
         return $this->$org_code;
     }

     public function setOrgCode($org_code)
     {
         $this->org_code = $org_code;
         $this->apiParas["org_code"] = $org_code;
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

     private $relate_card_no;

     public function getRelateCardNo()
     {
         return $this->$relate_card_no;
     }

     public function setRelateCardNo($relate_card_no)
     {
         $this->relate_card_no = $relate_card_no;
         $this->apiParas["relate_card_no"] = $relate_card_no;
     }

     private $valid_date;

     public function getValidDate()
     {
         return $this->$valid_date;
     }

     public function setValidDate($valid_date)
     {
         $this->valid_date = $valid_date;
         $this->apiParas["valid_date"] = $valid_date;
     }

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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.gaterouter.bankaccount.check";
     }
     public function check()     {          }}
