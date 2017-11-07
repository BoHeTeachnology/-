<?php
class HfiveTravelAccountFreezeRequest
{
     private $apiParas = array();

     private $account_id;

     public function getAccountId()
     {
         return $this->$account_id;
     }

     public function setAccountId($account_id)
     {
         $this->account_id = $account_id;
         $this->apiParas["account_id"] = $account_id;
     }

     private $operator_type;

     public function getOperatorType()
     {
         return $this->$operator_type;
     }

     public function setOperatorType($operator_type)
     {
         $this->operator_type = $operator_type;
         $this->apiParas["operator_type"] = $operator_type;
     }

     private $company_key;

     public function getCompanyKey()
     {
         return $this->$company_key;
     }

     public function setCompanyKey($company_key)
     {
         $this->company_key = $company_key;
         $this->apiParas["company_key"] = $company_key;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.travel.account.freeze";
     }
     public function check()     {          }}
